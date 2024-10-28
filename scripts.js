const poems = [
    'Cierro los ojos y siempre te veo, porque vives en mi alma.',
    'Los planetas se alinean si les enseñas tus dientes             8/10/2024.',
    'Eres el color que le da vida a mi pintura                      12/07/2024',
    'Eres dulce coco que del suelo y me lleva a lo mas alto sin escalera 14/09/2024',
    'Te voy a amar demasiado asi estes lejitos 09/09/2024.',
    'Sus ojos, le juro, son dos faros que guían. Y cada dia me píerdo más en ellos 27/10/2024.',
    'Usted, que con una mirada hace florecer mi mundo  20/10/2024',
];

const poemContainer = document.getElementById('poem-container');

// Genera tarjetas para cada poema
poems.forEach(poem => {
    const poemCard = document.createElement('div');
    poemCard.classList.add('card');
    poemCard.innerHTML = `<p>${poem}</p>`;
    
    poemContainer.appendChild(poemCard);
});
