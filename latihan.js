
// let hasil = ganjilGenap(2);
// console.log(hasil);

// function lulus(nilaiRaport, kehadiran) {
//     if(nilaiRaport >= 75 && kehadiran === 80) {
//         return 'kamu lulus';
//     } else {
//         return 'kamu tidak lulus, maaf';
//     }
// }; 

// let result = lulus(75, 60);
// console.log(result);



// ganjil genap angka
// function ganjilGenap(angka) {
//     if(angka % 2 === 0) {
//         return 'angka ini genap';
//     } else {
//         return 'angka ini ganjil';
//     }
// };

// function cekEmail(email) {
//     if(email.includes('@')) {
//         return true;
//     } else {
//         return false;
//     }
// };

// let hasil = cekEmail('');
// console.log(hasil);

// let nama = ["Agus", "Made", "Rizki", "Anugrah", "Wirna"];
// // nama.push('Dika');
// // nama.pop();
// // nama.unshift('Riko');
// // nama.shift();

// let panjangArray = nama.length;
// let index = nama.indexOf('Agus');
// console.log(panjangArray); 
// console.log(index);


// let nama = ["Agus", "Made", "Rizki", "Anugrah", "Wirna"];

// for(let a = 0; a < nama.length; a++) {
//     console.log(`Nama orang keren : ${nama[a]}`);
// };

// let angka = [1, 2, 3, 4, 5];

// let hasil = angka.map((item) => {
//     return item *= 1000;
// })

// console.log(hasil);


// let nama = ["agus", "made", "rizki", "anugrah", "wirna"];

// nama.map((item) => {
//     console.log(`Nama orang keren : ${item}`);
// })

// filter
// let angka = [10, 20, 40, 21, 52];

// let angkaBesar = angka.filter((item) => {
//     return item > 22;
// }); 

// console.log(angkaBesar);

// FIND
// let nama = ["agus", "made", "rizki", "anugrah", "wirna"];

// let pencarian = nama.find((item) => {
//     return item.length > 4;
// });

// console.log(pencarian);

// let nama = ["agus", "made", "rizki", "anugrah", "wirna", "memek", "mamah"];

// let hasilA = nama.find((item) => {
//     return item.includes('m');
// }); 

// console.log(hasilA);


// let angka = [10, 20, 40, 21, 52];

// let hasil = angka.map((item) => {
//     return item -= 2;
// });

// console.log(`hasil dari perkalian itu adalah ${hasil}`);


// let nama = ["agus", "made", "rizki", "anugrah", "wirna", "memek", "mamah"];

// let hasil = nama.forEach((item) => {
//     console.log(`nama orang keren disini adalah: ${item}`);
// });


// spread operator
// let angka = [10, 20, 52];
// let nambahAngka =  [100, ...angka, 2000];
// console.log(nambahAngka);


// rest parameter

// function hasil(...nilai) {
//     console.log(nilai);
// };

// hasil(90, 10, 10);

// function nama(ketua, ...anggota) {
//     console.log(`Ketua : ${ketua}`);
//     console.log(`Anggota : ${anggota}`);
// };

// nama("Rizki", "Agus", "Arie", "Rava");


// let nilaiSiswa = [75, 55, 90, 82, 60, 95];
// let kelulusan = nilaiSiswa.filter((item) => {
//     return item >= 80;
// });

// let daftarBaru = [...kelulusan, 100, 98];

// daftarBaru.forEach((item) => {
//     console.log(`nilai siswa yang lolos : ${item}`);
// });

// console.log(daftarBaru);

// let laguMetal = ["Dehumanized", "A Propechy", "Blackhole"];
// laguMetal.push('Heavy Lies The Crown');


// let setListFinal = [...laguMetal, 'LaguBaruMetal'];
// setListFinal.forEach((item) => {
//     console.log(`Ini adalah lagu dari band X : ${item}`);
// });


// console.log(setListFinal);

let daftarLagu = [
    { judul: "Dehumanized", durasi: 3.6 },
    { judul: "Blackhole", durasi: 4.6 },
    { judul: "A Propechy", durasi: 2.9 },
    { judul: "The Black", durasi: 4.3 },
    { judul: "Sweet child o mine", durasi: 7.4 },
];

// panjang
let panjangDurasi = daftarLagu.filter((lagu) => {
    return lagu.durasi >= 4;
});
let daftarLaguPanjang = panjangDurasi.map((lagu) => {
    return lagu.judul;
});
console.log(`Daftar lagu panjang : ${daftarLaguPanjang.join(', ')}`);


 // pendek
let pendekDurasi = daftarLagu.filter((lagu) => {
    return lagu.durasi <= 4;
});
let daftarLaguPendek = pendekDurasi.map((lagu) => {
    return lagu.judul;
});
console.log(`Daftar Lagu Pendek: ${daftarLaguPendek.join(', ')}`);

// let totalDurasi = daftarLagu.reduce((total, lagu) => {
//     return total + lagu.durasi;
// }, 0);  

// console.log(totalDurasi);







