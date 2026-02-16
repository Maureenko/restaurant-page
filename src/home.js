export default function loadHome() {
    const content = document.getElementById('content');

    const container = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to the KOKO cafe";

    const description = document.createElement('p');
    description.textContent = "The best food in town. Fresh Ingredients. Cozy atmosphere.";

    container.appendChild(headline);
    container.appendChild(description);
    content.appendChild(container);
}