const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname,'..');
const ctx = {window:{}};
vm.createContext(ctx);
const CATALOG_LAYERS = [
  'assets/library-catalog.js',
  'assets/library-daily-money.js',
  'assets/library-work-foundations.js',
  'assets/library-transitions.js',
  'assets/library-acquisition.js',
  'assets/tools-catalog.js'
];
for (const rel of CATALOG_LAYERS) {
  const file=path.join(ROOT,rel);
  if(fs.existsSync(file)) vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:rel});
}
const editorial=Array.isArray(ctx.window.CE_LIBRARY_CATALOG)?ctx.window.CE_LIBRARY_CATALOG:[];
const tools=Array.isArray(ctx.window.CE_TOOLS_CATALOG)?ctx.window.CE_TOOLS_CATALOG:[];
const items=[...editorial,...tools];

function text(html=''){
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi,' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi,' ')
    .replace(/<section class="ce-related"[\s\S]*?<\/section>/gi,' ')
    .replace(/<nav\b[\s\S]*?<\/nav>/gi,' ')
    .replace(/<footer\b[\s\S]*?<\/footer>/gi,' ')
    .replace(/<[^>]+>/g,' ')
    .replace(/&nbsp;|&#160;/gi,' ')
    .replace(/&amp;/gi,'&')
    .replace(/&quot;/gi,'"')
    .replace(/&#39;|&apos;/gi,"'")
    .replace(/&euro;|&#x20ac;/gi,'€')
    .replace(/&[a-z]+;|&#\d+;/gi,' ')
    .replace(/\s+/g,' ')
    .trim();
}
const out={};
for(const item of items){
  if(!item?.h || out[item.h]) continue;
  const file=path.join(ROOT,item.h);
  if(!fs.existsSync(file)) continue;
  const body=text(fs.readFileSync(file,'utf8'));
  out[item.h]=body.slice(0,24000);
}
fs.writeFileSync(path.join(ROOT,'assets/search-index.js'),`window.CE_SEARCH_INDEX=${JSON.stringify(out)};\n`,'utf8');
console.log(`Index plein texte généré pour ${Object.keys(out).length} contenus, outils inclus.`);
