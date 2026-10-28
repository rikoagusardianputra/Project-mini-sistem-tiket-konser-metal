const judul = document.getElementById('judul');
const tombol = document.getElementById('tombol');
const paragraf = document.getElementById('paragraf');

tombol.addEventListener('click', () => {
    if(judul.style.color === 'black') {
        judul.style.color = 'red';
    } else {
        judul.style.color = 'black';
    }
});

// data ul li

const listItems = document.querySelectorAll('#list-items li')

for(i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
    listItems[i].style.color = 'tomato';
}

// console.log(listItems);


// create element

const ul = document.querySelector('#list-items');
const liAdd = document.createElement('li');

liAdd.textContent = 'Aku jembut';
ul.appendChild(liAdd);

// console.log(ul);


// LATIHAN

const daftar = document.querySelector("#daftar");
const button = document.querySelector("#tombol-jembut");   


button.addEventListener('click', () => {
    const liBaru = document.createElement("li"); 

    liBaru.textContent = 'Buat coding jembut';
    daftar.append(liBaru)
});

// TODO KECIL KECILAN

const input = document.querySelector('#input');
const button1 = document.querySelector('#tambahTugas');
const daftarTugas = document.querySelector('#daftar-tugas'); 


button1.addEventListener('click', () => {
    const valueUser = input.value;
    if(input.value === '') {
        return alert('Isi form dulu');
    }

    const libaru = document.createElement('li');
    libaru.textContent = valueUser;

    libaru.setAttribute('class', 'merah');

    daftarTugas.appendChild(libaru);

    input.value = '';
});


const attrDaftar = document.querySelector('#judul');
const attrNew = attrDaftar.getAttribute('id');
console.log(attrNew);

const tombolClass = document.querySelector('#tombolClass');
const teksClass = document.querySelector('#teksClass');

tombolClass.addEventListener('click',() => {
    teksClass.classList.toggle('red');
});

console.log(tombolClass);




const btnReadMore = document.querySelector('#btn-read-more');
const paragrafMore = document.querySelector('.hidden-teks');


btnReadMore.addEventListener('click', () => {
    paragrafMore.classList.toggle('reveal-teks')
});


