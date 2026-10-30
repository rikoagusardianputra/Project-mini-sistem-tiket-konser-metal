// DATA PELANGGAN 

let keranjangBelanja = [
    {namaBarang : 'KaosBMTH', harga: 5100000, member: true},
    {namaBarang : 'JaketSYKES', harga: 1000000, member: false}
];

// JIKA DIA MEMBER MAKA DIA MENDAPATKAN DISKON 10% JIKA TIDAK MAKA HARGA NORMAL

function cekHarga (harga, member) {
    
    if(member === true) {
        return harga *= 0.8;
    } else {
        return harga;
    } 
};

for(let i = 0; i < keranjangBelanja.length; i++) {
    let barang = keranjangBelanja[i];
    let hargaAkhir = cekHarga(barang.harga, barang.member)

    // console.log(hargaAkhir);
};

















let dataSiswa = [
    {nama: 'riko', umur: 17, NIK: 1234, nilai: 980, kehadiran: 'aktif'},
    {nama: 'agus', umur: 17, NIK: 2334, nilai: 830, kehadiran: 'tidak aktif'},
    {nama: 'wirna', umur: 17, NIK: 3244, nilai: 800, kehadiran: 'aktif'},
    {nama: 'anugrah', umur: 17, NIK: 5544, nilai: 870, kehadiran: 'tidak aktif'},
    {nama: 'doni', umur: 17, NIK: 3450, nilai: 900, kehadiran: 'kurang aktif'},
    {nama: 'fernio', umur: 17, NIK: 3451, nilai: 820, kehadiran: 'kurang aktif'},
    {nama: 'rizki', umur: 17, NIK: 3453, nilai: 810, kehadiran: 'aktif'}
];



function cekSiswa (namaCari, nikCari) {
    for(let i = 0; i < dataSiswa.length; i++) {
        let siswa = dataSiswa[i];

        if(siswa.nama === namaCari && siswa.NIK === nikCari) {
            return `Data ditemukan atas nama ${siswa.nama} dengan NIK ${siswa.NIK}`
        }
    }
    return 'tidak ada data tersebut';
}

function cekKelulusan (nilai, kehadiran) { 
    if(nilai >= 400 && kehadiran === 'aktif') {
        return 'Kamu Lulus ';
    } else if(kehadiran === 'kurang aktif') {
        return 'Kamu Lulus'
    } else {
        return 'Kamu tidak lulus';
    }
}; 

function cariNama(cariNama) {
     for(let i = 0; i < dataSiswa.length; i++) {
         let siswa = dataSiswa[i];

         let siswaStatus = cekKelulusan(siswa.nilai, siswa.kehadiran);
         if(siswa.nama === cariNama) {
             console.log(`Nama  : ${siswa.nama}`);
             console.log(`NIK  : ${siswa.NIK}`);
             console.log(`Kehadiran  : ${siswa.kehadiran}`);
             console.log(`Status  : ${siswaStatus}`);
             return;
         }
     }
    console.log('Data tidak ada')
};