const facts = [
    "I am 19 years old.",
    "I love mountains.",
    "I enjoy outdoor activities such as hiking or climbing.",
    "I appreciate nature and scenic landscapes.",
    "I have an adventurous spirit and a desire for exploration."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
