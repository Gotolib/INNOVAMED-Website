const checkbox = document.getElementById('checkbox');
const leun = document.getElementById('leun');
const ledeux = document.getElementById('ledeux');
const letrois = document.getElementById('letrois');

checkbox.addEventListener('click', () => {
    leun.textContent = leun.textContent === '39,00€' ? '390,00€' : '39,00€'
    ledeux.textContent = ledeux.textContent === '72,90€' ? '729,00€' : '72,90€'
    letrois.textContent = letrois.textContent === '37,90€' ? '379,00€' : '37,90€'

});

