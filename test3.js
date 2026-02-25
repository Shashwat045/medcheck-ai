const sysSys = {
    'Neurological': ('chest pain, sore throat, severe heartburn, sour taste'.match(/headache|dizz|confus|stiff neck|numb|vision/g) || []).length,
    'Cardiovascular': ('chest pain, sore throat, severe heartburn, sour taste'.match(/chest|palpitat|\bheart\b|sweat|\barm\b|jaw/g) || []).length,
    'Respiratory': ('chest pain, sore throat, severe heartburn, sour taste'.match(/cough|breath|wheez|sore throat/g) || []).length,
    'Gastrointestinal': ('chest pain, sore throat, severe heartburn, sour taste'.match(/nausea|vomit|abdom|stomach|diarrhea|heartburn|sour taste|sour/g) || []).length,
    'Urinary': ('chest pain, sore throat, severe heartburn, sour taste'.match(/urin|pee|flank/g) || []).length,
    'Musculoskeletal': ('chest pain, sore throat, severe heartburn, sour taste'.match(/muscle|joint|back pain/g) || []).length,
    'Systemic': ('chest pain, sore throat, severe heartburn, sour taste'.match(/fever|temp:\s*10|fatigue|weak/g) || []).length
};

console.log("Regex output for 'chest pain, sore throat, severe heartburn, sour taste':", sysSys);
