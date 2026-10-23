let daftarLagu = [
    { judul: "Dehumanized", durasi: 3.6 },
    { judul: "Blackhole", durasi: 4.6 },
    { judul: "A Propechy", durasi: 2.9 },
    { judul: "The Black", durasi: 4.3 },
    { judul: "Sweet child o mine", durasi: 7.4 },
];

let laguDurasiPendek = daftarLagu.filter((lagu) => {
    return lagu.durasi <= 4;
});
let ambilJudulDurasi = laguDurasiPendek.map((lagu) => {
    return `${lagu.judul} dengan durasi (${lagu.durasi}) menit`;  
});

console.log(`Lagu santai < 4 menit ${ambilJudulDurasi.join(', ')}`);
