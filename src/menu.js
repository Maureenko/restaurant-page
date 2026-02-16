export default function loadMenu() {
  const content = document.getElementById('content');

  const container = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = "Our Menu";

  const item1 = document.createElement('p');
  item1.textContent = "🍔 Burger - $10";

  const item2 = document.createElement('p');
  item2.textContent = "🍕 Pizza - $12";

  container.appendChild(title);
  container.appendChild(item1);
  container.appendChild(item2);
  content.appendChild(container);
}
