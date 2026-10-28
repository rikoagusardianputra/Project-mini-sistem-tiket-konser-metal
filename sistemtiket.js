// DATA PENONTON
const dataPenonton = {
    nama : 'Oliver Sykes',
    umur : 18,
    tiket : 'VIP'
};

// DATA LAGU
let daftarLagu = [
    { judul: "Dehumanized", durasi: 3.6 },
    { judul: "Blackhole", durasi: 4.6 },
    { judul: "A Propechy", durasi: 2.9 },
    { judul: "The Black", durasi: 4.3 },
    { judul: "Sweet child o mine", durasi: 7.4 },
];

let laguAkses;

// AKSES MASUK KEDALAM KONSER

// FUNGSI AKSES MASUK
function aksesMasuk(penonton) {
    //JIKA DIA UMUR >= 18 DAN MEMPUNYAI TIKET VIP ATAU REGULER BOLEH MASUK
    //JIKA DIA UMUR >= 18 DAN TIDAK MEMPUNYAI TIKET VIP ATAU REGULER BOLEH MASUK
    if(penonton.umur >= 18 && (penonton.tiket === 'VIP' || penonton.tiket === 'REGULER')) {
        return `Kamu umur ${penonton.umur} dan kamu mempunyai tiket ${penonton.tiket} kamu boleh masuk`

    } else {
        return `Kamu umur ${penonton.umur} kamu mempunyai tiket ${penonton.tiket} kamu tidak boleh masuk`;
    };
};

// FUNGSI AKSES LAGU
function aksesLagu(penonton, daftarLagu) {
    // JIKA DIA VIP DAPAT SEMUA DURASI
    if(penonton.umur <18) {
        return [];
    };

    if(penonton.tiket === 'VIP') {
        return daftarLagu;
    } else {
        return daftarLagu.filter((lagu) => {
            return lagu.durasi <= 4;
        });
    }
};

let daftarReguler = aksesLagu(dataPenonton, daftarLagu);
let laguYangBisaDiAkses = daftarReguler.map((lagu) => {
    return `${lagu.judul} (${lagu.durasi}) menit`
});

let hasilAkses = aksesMasuk(dataPenonton);
let hasilAksesLagu = aksesLagu(dataPenonton, daftarLagu)
console.log(hasilAkses);
console.log(`Lagu yang bisa kamu dengar adalah ${laguYangBisaDiAkses.join(', ')}`);