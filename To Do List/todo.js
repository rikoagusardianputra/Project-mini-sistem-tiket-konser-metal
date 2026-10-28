const kolomInput = document.getElementById('masukan-kegiatan');
const buttonAdd = document.getElementById('button-add');
const daftarKegiatan = document.getElementById('daftar-kegiatan');
const formTugas = document.getElementById('form-tugas');

let semuaKegiatan = [];

function tampilanKegiatan() {
    daftarKegiatan.innerHTML = '';

    semuaKegiatan.forEach((kegiatan, index) => {
        const li = document.createElement('li');
    })
}
