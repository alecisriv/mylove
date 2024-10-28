const poems = [
    'Cierro los ojos y siempre te veo, porque vives en mi alma.',
    'Los planetas se alinean si les enseñas tus dientes             8/10/2024.',
    'Eres el color que le da vida a mi pintura                      12/07/2024',
    'Eres dulce coco que del suelo y me lleva a lo mas alto sin escalera 14/09/2024',
    'Te voy a amar demasiado asi estes lejitos 09/09/2024.',
];

const poemContainer = document.getElementById('poem-container');

// Genera tarjetas para cada poema
poems.forEach(poem => {
    const poemCard = document.createElement('div');
    poemCard.classList.add('card');
    poemCard.innerHTML = `<p>${poem}</p>`;
    
    poemContainer.appendChild(poemCard);
});
