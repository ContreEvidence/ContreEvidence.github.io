#!/usr/bin/env python3
from pathlib import Path
import html as html_lib
import re

ROOT = Path(__file__).resolve().parents[1]
TARGETS = [ROOT / "dossiers", ROOT / "articles"]

STRIP = re.compile(r'<(script|style|nav|footer|aside|template|noscript)\b[^>]*>.*?</\1>', re.I|re.S)
TAGS = re.compile(r'<[^>]+>')
SENTENCE = re.compile(r'(?<=[.!?])\s+')
NUMERIC = re.compile(r'(?:\b\d+(?:[\s.,]\d+)?\s*(?:€|%|jours?|semaines?|mois|ans?)\b|\b(?:trois|quatre|cinq|six|sept|huit|neuf|dix|douze)\s+(?:jours?|semaines?|mois|ans?)\b)', re.I)
NORMATIVE = re.compile(r'\b(au moins|minimum|minimale?|maximum|maximale?|il faut|faut-il|doit|devrait|gardez|garder|conservez|conserver|réserve|seuil|avant de|pour pouvoir|nécessaire)\b', re.I)
CAVEAT = re.compile(r'\b(exemple|pédagogique|illustratif|indicatif|hypothèse|selon|dépend|à adapter|adapter|pas universel|non universel|votre situation|votre budget|vos dépenses|vos revenus|votre patrimoine|votre projet|règle officielle|plafond légal|service-public|hcsf|insee|banque de france|urssaf)\b', re.I)


def clean(raw: str) -> str:
    raw = STRIP.sub(' ', raw)
    raw = html_lib.unescape(TAGS.sub(' ', raw))
    return re.sub(r'\s+', ' ', raw).strip()

rows=[]
for folder in TARGETS:
    if not folder.exists(): continue
    for path in sorted(folder.rglob('*.html')):
        text = clean(path.read_text(encoding='utf-8', errors='replace'))
        sentences = SENTENCE.split(text)
        for i, s in enumerate(sentences):
            if not (NUMERIC.search(s) and NORMATIVE.search(s)):
                continue
            context = ' '.join(sentences[max(0,i-1):min(len(sentences),i+2)])
            if CAVEAT.search(context):
                continue
            rows.append((str(path.relative_to(ROOT)).replace('\\','/'), s.strip()))

print(f"Potential relative-framing findings: {len(rows)}")
for path, sentence in rows:
    print(f"{path}\t{sentence}")
