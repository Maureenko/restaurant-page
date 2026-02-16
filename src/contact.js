export default function loadContact() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    
    const title = document.createElement('h1');
    title.textContent = "Contact Us";

    const phone = document.createElement('p');
    phone.textContent = ("0712-345-678");

    const address = document.createElement('p');
    address.textContent = "123 Food Street,Flavour Town";
    
    container.appendChild(title);
    container.appendChild(phone);
    container.appendChild(address);
    content.appendChild(container);
}