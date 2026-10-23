// let umur = 17;
// let sim = false;

// if (umur >= 17) {
//     console.log('kamu sudah cukup umur');
//     if (sim) {
//         console.log(`kamu sudah berumur ${umur} kamu sudah ada sim`);
//     } else {
//         console.log(`kamu sudah berumur ${umur} kamu belum ada sim`);
//     }
// } else {
//     console.log(`kamu belum cukup umur`);
// };

// const submit = document.getElementById('submit');
// const isiUmur = document.getElementById('umur');
// const hasilUmur = document.getElementById('hasil-umur');
// let umur;

// submit.addEventListener('click', () => {
//     umur = Number(isiUmur.value);
    
//     if(umur >= 100) {
//         hasilUmur.textContent = (`buset tua banget ${umur}, tapi bisa masuk, harusnya mati aja lo`);
//     } else if (umur >= 18) {
//         hasilUmur.textContent = (`umur mu ${umur} bisa masuk`);
//     } else if (umur <= 0) {
//         hasilUmur.textContent = (`jangan masukin angka 0 atau kurang bro`);
//     } else {
//         hasilUmur.textContent = ('lu gabisa masuk');
//     }
// });


// let member = true;
// let belanja = 100000;

    // if (member == true && belanja >= 100000 ) {
    //     console.log(`Kamu member dan kamu berbelanja di atas 100K, Kamu mendapatkan diskon`);
    // } else if (member == false && belanja >= 100000) {
    //     console.log('Kamu bukan member, dan kamu berbelanja 100K, Kamu tidak mendapatkan diskon')
    // } else if (member == true && belanja <= 100000) {
    //     console.log('Kamu member tapi kamu berbelanja di bawah 100K, Kamu tidak mendapatkan diskon');
    // } else {
    //     console.log('kamu bukan member');
    // };

// let member = false;
// let belanja = 1;


// if (member && belanja >= 100000) {
//     console.log(`Kamu berbelanja ${belanja} dan kamu member kamu mendapatkan diskon`);
// } else if (member && belanja <= 100000) {
//     console.log(`Kamu berbelanja ${belanja} dan kamu member kamu tidak mendapatkan diskon`);
// } else if (!member && belanja >= 100000) {
//     console.log(`Kamu berbelanja ${belanja} dan kamu bukan member kamu tidak mendapatkan diskon`);
// } else {
//     console.log(`Kamu bukan member`)
// };


// let nilai = 75;
// let absensi = 65;

// if (nilai >= 75 && absensi >= 80) {
//     console.log('Nilai kamu bagus dan absensi kamu bagus, LULUS');
// } else if (nilai < 75 && absensi >= 80 ) {
//     console.log('nilai kamu anjlok dan absensi kamu bagus, GAGAL');
// } else {
//     console.log('gagal');
// };

// const statusBayar = 'lunas';

// if (statusBayar !== 'lunas') {
//     console.log('bayar');
// } else {
//     console.log('sudah bayar');
// };



// while loop, tidak di butuhkan juga sih
// let login = false;
// let username;
// let password;

// while (!login) {
//     username = window.prompt('masukan nama kamu');
//     password = window.prompt('masukan password kamu');

//     if(username === 'riko' && password === 'rikoganteng123') {
//         login = true;
//         console.log('kamu login');

//     } else {
//         console.log('kamu gagal');
//     }
// };


// for(let i = 1; i <= 30; i++) {
//     if(i === 21) {
//         break;
//     } else {
//         console.log(i);
//     }
// };

// function rikoGanteng(username, age) {
//     console.log(`${username} ganteng`);
//     console.log(`kamu umur $${age}`);
// };

// rikoGanteng(17, "Riko");

// function totalMakanan(makanan, jumlah) {
//     let hargaMakanan = jumlah * 3000;
//     console.log(`${makanan} ${jumlah} porsi, total harga ${hargaMakanan}`);
// };

// totalMakanan('Siobak', 3);
// totalMakanan('Mie Ayam', 5);

// function kali(a, b) {
//     let hasil = a * b;
//     return hasil;
// };

// let jawaban = kali(1, 2);;
// console.log(jawaban);


// cek harga gitar
// function hitungHargaGitar(harga, member) {
//     if(member === true) {
//         let hargaDiskon = harga * 0.9;
//         return hargaDiskon;
//     } else {
//         return harga;
//     };
// };

// let member = hitungHargaGitar(4000000, true);
// let bukanMember = hitungHargaGitar(4000000, false);

// console.log(member);
// console.log(bukanMember);


// function hitungOngkir(totalBelanja, jarak) {
//     let ongkir = jarak * 5000;

//     if(totalBelanja >= 500000) {
//         return 0;    
//     } else {
//         return ongkir;
//     }
// };

// let upline = hitungOngkir(500000, 10);;
// console.log(upline);

// let downline = hitungOngkir(450000, 40);
// console.log(downline);


// function cekLulus (nilai) {
//     if(nilai >= 80) {
//         return 'A';
//     } else if (nilai >= 70) {
//         return 'B';
//     } else if (nilai >= 60) {
//         return 'C';
//     }
//     return 'Goblog Lu';
// };

// let hasilKelulusan = cekLulus(50);
// console.log(hasilKelulusan);


// function cekAksesKonser(umur, tiket) {
//     if(tiket === true) {
//         if (umur >= 18) {
//             return 'masuk dah lu';;
//         } else {
//             return 'Tolak masih kecil'
//         }
//     } else {
//         return 'kaga punya tiket';
//     }
// };

// let hasilPengecekan = cekAksesKonser(16, true);

// console.log(hasilPengecekan);


// cek akun
// function cekAksesAdmin(username, password, blokir) {
//     let nama = 'kawo';
//     let kataSandi = 'kawo123';

//     if(blokir === true) {
//         return 'akun anda diblokir';
//     } else if(username === nama && password === kataSandi) {
//         return 'selamat datang';
//     } 
//     return 'Alah gausah masuk username sama password lu salah';
// };

// let hasilAkses = cekAksesAdmin('kawo', 'kawo123', true);
// console.log(hasilAkses);




// DISKON PAYMENT
// function hitungTotal(hargaAwal, member, payment) {
//     let diskonTotal = hargaAwal;

//     if(member === true) {
//         diskonTotal = diskonTotal * 0.8;;
//     };

//     if(payment === 'cash') {
//         diskonTotal = diskonTotal + 2000;
//     } else if (payment === 'BCA') {
//         diskonTotal = diskonTotal + 5000;;
//     } else if (payment === 'QRIS') {
//         diskonTotal = diskonTotal + 0;
//     }
//     return diskonTotal;
// };

// let hasilAkhir = hitungTotal(200000, true, 'QRIS')
// console.log(hasilAkhir);

// PAYMENT
// function hitungTotal(member, harga, payment) {
//     let diskonTotal = harga;

//     if(member === false) {
//         diskonTotal = harga;
//     } else {
//         diskonTotal = diskonTotal * 0.8;
//     }

//     //PEMBAYARAN

//     if(payment === 'BCA') {
//         diskonTotal = diskonTotal + 5000;
//     } else if(payment === 'CASH') {
//         diskonTotal = diskonTotal + 2000;
//     } else if(payment === 'QRIS') {
//         diskonTotal = diskonTotal + 0;
//     }

//     return diskonTotal;
// }

// let hasil = hitungTotal(true, 30000, 'BCA');
// console.log(hasil);



// LOGIKA KU SENDIRI
// function hitungTotal(hargaBarang, jumlahItem, pengiriman) {
//     let totalHargaBarang = hargaBarang;
//     if(jumlahItem >= 3) {
//         totalHargaBarang = totalHargaBarang - 15000;
//     };

//     if(pengiriman === 'express') {
//         totalHargaBarang = totalHargaBarang + 20000;
//     } else if(pengiriman === 'reguler') {
//         totalHargaBarang = totalHargaBarang + 15000;
//     };
//     return totalHargaBarang;
// };

// let hasil = hitungTotal(20000, 3, 'express');
// console.log(hasil);


const memberIya = document.getElementById('member_iya');
const memberTidak= document.getElementById('member_tidak');
const harga = document.getElementById('harga');
const jumlahInput = document.getElementById('jumlah');
const pengiriman = document.getElementById('pengiriman');
const submit = document.getElementById('submit');
const hasilTotal = document.getElementById('hasil');

function hitungTotal(member, harga, jumlah, pengiriman) {
    let total = harga;
    if(member) {
        total *= 0.8;
    };

    if(jumlah >= 3) {
        total *= 0.9;
    };

    if(pengiriman === 'cargo') {
        total += 1000000;
    } else if(pengiriman === 'express') {
        total += 500000;
    }
    return total;
};

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let trueMember = memberIya.checked;
    let cekHarga = Number(harga.value);
    let cekJumlah = Number(jumlahInput.value);
    let cekPengiriman = pengiriman.value.toLowerCase();

    
    let hasil = hitungTotal(trueMember, cekHarga, cekJumlah, cekPengiriman);
    hasilTotal.textContent = `Total Kamu berbelanja adalah Rp${hasil.toLocaleString('id-ID')}`;

    console.log(hasil);
});




// function hitungTotal(member, hargaBarang, jumlahItem, pengiriman) {
//     let diskonHarga = hargaBarang;

//     if(!member) {
//         diskonHarga += 0;
//         // return diskonHarga;
//     } else {
//         diskonHarga *= 0.7;
//         // return diskonHarga;
//     };

//     if(jumlahItem >= 3) {
//         diskonHarga *= 0.9;
//     };

//     if(pengiriman === "cargo") {
//         diskonHarga += 1000000;
//     } else if(pengiriman === "express") {
//         diskonHarga += 500000;
//     }
//     return diskonHarga;
// };   

// let hasil = hitungTotal(true, 5000, 3, "cargo");
// console.log(hasil);
