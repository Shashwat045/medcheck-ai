const html = require('fs').readFileSync('index.html', 'utf8');

const funcMatch1 = html.match(/function classifyOrganSystem\(symptomsStr\) \{[\s\S]*?return dominantSystem;\s*\}/);
const funcMatch2 = html.match(/function detectSymptomClusters\(symptomsStr, primarySystem\) \{[\s\S]*?return cluster;\s*\}/);

eval(funcMatch1[0]);
eval(funcMatch2[0]);

const s = "chest pain, sore throat, severe heartburn, sour taste";
const sys = classifyOrganSystem(s);
console.log("Classify Result:", sys);
console.log("Detect Result:", detectSymptomClusters(s, sys));
