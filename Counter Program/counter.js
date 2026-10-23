const angkaCounter = document.getElementById('angka-counter');
const kurang = document.getElementById('kurang');
const reset = document.getElementById('reset');
const tambah = document.getElementById('tambah');

let hitung = 0;

tambah.addEventListener('click', () => {
    hitung += 1;
    angkaCounter.textContent = hitung;
});

kurang.addEventListener('click', () => {
    hitung -= 1;
    angkaCounter.textContent = hitung;
});

reset.addEventListener('click', () => {
    hitung = 0;
    angkaCounter.textContent = hitung;
});