let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]
let count = 0
const porudzbina = []

/* <select name="dino" class="select-field" id="select-dino"> */
const selectBox = document.querySelector('#select-dino')
const forma = document.querySelector('#forma')
const divItem = document.querySelector('.item')
const inputKupac = document.querySelector('#kupac')
const napomena = document.querySelector('.textarea-field')
const buttonAll = document.querySelector('#btn-all')


dinos.forEach(dino =>{
    const option = document.createElement('option')
    option.value = dino.id
    option.textContent = dino.name 
    selectBox.appendChild(option)
})

function isValid(){
    selectBox.value !== '' &&
    inputKupac.value.trim() !== '' &&
    inputKupac.value.trim().length >= 4
}


    forma.addEventListener('submit', (e) =>{
        e.preventDefault()

        if(!isValid()){
            alert('Поља не смеју бити празна. Име купца мора садржати најмање 4 слова.')
        }
        // const btnDelete = document.createElement('button')
        //         btnDelete.className = 'item-trashCan'
        //         btnDelete.textContent = 'Обриши'
        //     // divActions.appendChild(btnDelete)

        //     btnDelete.addEventListener('click',(e) => {
        //         // e.target.parentElement.parentElement.remove()
        //         dinos.splice(dinos.findIndex(el => el.id === id), 1)
        //         // console.log(dinos)
        
        
        
        let findDinos = dinos.find((element) =>{
            return element.name === selectBox.value
        })
        console.log(dinos.cena)
        

        divItem.innerHTML = `
            <p><span>Купац:</span> ${inputKupac.value}</p>
            <p><span>Напомена:</span> ${napomena.value}</p>
            <p><span>Диносаурус:${selectBox.value} </span></p>
            <p><span>Цена:${findDinos.cena} </span></p>
            <p><button>Обриши</button></p>`


        porudzbina.push({
            id: '1',
            name: inputKupac.value,
            img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
            cena: findDinos.cena
        })
        
    })

