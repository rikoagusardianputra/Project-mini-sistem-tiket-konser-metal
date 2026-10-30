// DATA SISWA
let dataSiswa = [
    {nama: 'riko', NIK: 1234, nilai: 980, kehadiran: 'aktif'},
    {nama: 'agus', NIK: 2334, nilai: 830, kehadiran: 'tidak aktif'},
    {nama: 'wirna', NIK: 3244, nilai: 800, kehadiran: 'aktif'},
    {nama: 'anugrah', NIK: 5544, nilai: 870, kehadiran: 'tidak aktif'},
    {nama: 'doni', NIK: 3450, nilai: 900, kehadiran: 'kurang aktif'},
    {nama: 'fernio', NIK: 3451, nilai: 820, kehadiran: 'kurang aktif'},
    {nama: 'rizki', NIK: 3453, nilai: 810, kehadiran: 'aktif'}
];

// PENGECEKAN SISWA YANG KURANG AKTIF
function cekAktif(absen) {
    let hasilCekAktif = dataSiswa.filter((x) => {
        return x.kehadiran === 'kurang aktif';
    });
    
    if(hasilCekAktif.length < 0) {
        return hasilCekAktif;
    } else { 
        return 'tidak ada siswa yang kurang aktif';
    }
};

// PENGECEKAN NIK SISWA
    function cekNIK(namaCari, NIKCari) {
        // JIKA NAMA DAN NIK SESUAI JALANKAN
        let hasil = dataSiswa.find((x) => {
            return x.nama === namaCari && x.NIK === NIKCari;
        });

        if(hasil) {
            return `Data di temukan atas nama ${hasil.nama} dengan NIK ${hasil.NIK}`;
        } else {
            return `Data tidak temukan`;
        }
    }

// PENGECEKAN NILAI SISWA

function cekNilai(nama) {
    let hasilCekNilai = dataSiswa.find((x) => {
        return x.nilai >= 800;
    });
    return hasilCekNilai;
}

let resultCekNilai = cekNilai();
console.log(resultCekNilai);

// PENGECEKAN HASIL KELULUSAN SISWA

// OUTPUT MELALUI CONSOLE.LOG