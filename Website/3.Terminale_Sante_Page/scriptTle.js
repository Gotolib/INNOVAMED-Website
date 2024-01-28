const checkbox = document.getElementById('checkbox');
const ledeux = document.getElementById('ledeux');

checkbox.addEventListener('click', () => {
    ledeux.textContent = ledeux.textContent === '99,25€' ? '397€' : '99,25€'
});
