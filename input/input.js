// let nama = 'Riko';
// let umur = 16;
// let alamat = 'Bali';
// let boolean;


// console.log(`Halo semuanya namaku ${nama} umur saya ${umur} saya berasa dari ${alamat}`);
// console.log(typeof boolean);

// let namaDepan = 'riko';
// let umur = 16;
// let siswa = true;

// document.getElementById('p1').textContent = `nama aku adalah $${namaDepan}`;
// document.getElementById('p2').textContent = `umur aku ${umur}`;
// document.getElementById('p3').textContent = `apakah aku siswa? ${siswa}`;

// let a = 10;
// let b = 5;

// a += 3;
// b -= 2;

// let c = (a + b) % 4;

// a++;
// b--; 

// console.log(c);


// let x = 7;
// let y = x++;
// let z = ++x;

// console.log(z);

// let username;
// const welcome = document.getElementById('welcome');

// document.getElementById('submit').onclick = () => {
//     username = document.getElementById('text').value;
//     welcome.textContent = `Welcome ${username}`;
//     console.log(username);
// };



// INI ADALAH CONTOH INPUT DAN OUTPUT DENGAN JAVASCRIPT
// const valueUsername = document.getElementById('value-username');
// const valueUmur = document.getElementById('value-umur');
// const tombolSubmit = document.getElementById('submit');
// const pesan = document.getElementById('pesan');
// const welcome = document.getElementById('welcome');

// tombolSubmit.onclick = () => {
//     let nama = valueUsername.value;
//     let umur = valueUmur.value;
    
//     welcome.textContent = `Welcome ${nama}`;
//     pesan.textContent = `Halo nama saya ${nama} umur saya adalah ${umur} tahun`;
// };

// Penambahan
// const submitButton = document.getElementById('submit');
// const usernameInput = document.getElementById('value-username');
// const pesan = document.getElementById('pesan');
// const umurInput = document.getElementById('value-umur');

// submitButton.onclick = () => {
//     let nama = usernameInput.value;
//     let umur = Number(umurInput.value); 
//     umur += 1;
//     pesan.textContent = `Halo nama saya ${nama} dan umur saya ${umur} tahun`;
// }


// login dan munculkan text di h3
// const submitButton = document.getElementById("submit");
// const valueUsername = document.getElementById('value-username');
// const pesan = document.getElementById('pesan');
// const valueUmur = document.getElementById('value-umur');

// submitButton.onclick = () => {
//     let nama = valueUsername.value;
//     let umur = Number(valueUmur.value);
//     let umurNanti = umur + 10;

//     pesan.textContent = `Halo ${nama}, Umur mu sekarang adalah ${umur}, 10 tahun lagi umur mu adalah ${umurNanti} `;
// }


// const submitButton = document.getElementById("submit");
// const valueUsername = document.getElementById('value-username');
// const pesan = document.getElementById('pesan');
// const valueUmur = document.getElementById('value-umur');


// submitButton.onclick = () => {
//     let umur = valueUmur.value;
//     umur = Number(umur);
//     umur += 1;

//     console.log(umur);
// };


// STRING CONVERSI
// let a = "tahu";
// let b = "tahu";
// let c = "tahu";

// a = Number(a);
// b = String(b);
// c = Boolean(c);

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);

// const PI = 3.14159;
// let radius = window.prompt('Masukan angka radius nya')
// let jawaban;
// PI = 420.543535353;


// radius = Number(radius);
// jawaban = 2 * PI * radius;
// console.log(jawaban);

const radius = document.getElementById('radius');
const submit = document.getElementById('submit');
const jawaban = document.getElementById('jawaban');

const PI = 3.14159;

submit.addEventListener('click', () => {
    let nilaiRadius = radius.value; // '10'
    nilaiRadius = Number(nilaiRadius);
    let jawabanRadius = 2 * PI * nilaiRadius; // DIPROSES
    
    jawaban.textContent = `Jawaban dari radius mu adalah ${jawabanRadius} CM`;
    console.log(jawabanRadius);
});


