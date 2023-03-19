const id = new URLSearchParams(window.location.search).get('_id')

const apiURL = 'https://striveschool-api.herokuapp.com/api/product/'
const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2E0ZWY4MWI0MjAwMTM5YjI4MzgiLCJpYXQiOjE2NzkwNDcyNDYsImV4cCI6MTY4MDI1Njg0Nn0.JOuvgWEwI9jKGVynvQ-fMowvbLurAiPY0bRHB_9XZ-k",
    "Content-Type": "application/json"
}

const endPoint = id ? apiURL + id : apiURL
const method = id ? "PUT" : "POST"

const n = document.getElementById('name')
const d = document.getElementById('description')
const p = document.getElementById('price')
const b = document.getElementById('brand')
const i = document.getElementById('url')

const input = [n.value,d.value,p.value,b.value,i.value]

const form = document.getElementById('form')
const buttonSubmit = document.getElementById('submit')

// CREAZIONE POP UP CONFERMA
const confirmed = document.createElement('div')
const text = document.createElement('p')
const yes = document.createElement('button')
const no = document.createElement('button')

yes.innerText = 'Sì'
no.innerText = 'No'

confirmed.classList.add('border','bg-white','p-5','position-absolute','top-50', 'start-50', 'translate-middle','d-none')
yes.className = 'me-3'

form.append(confirmed)
confirmed.append(text,yes,no)

no.onclick = (e)=>{
    e.preventDefault()
    confirmed.className = 'd-none'
}

// FINE POP UP

if(id){
    const subtitle = document.getElementById('subtitle')
    const btnDelete = document.getElementById('delete-btn')
    const btnEdit = document.getElementById('submit')

    subtitle.innerText = '— Modifica elemento'
    btnEdit.innerText = 'Edit'
    subtitle.className = 'd-inline-block'
    btnDelete.classList.remove('d-none')

    btnDelete.addEventListener('click',()=>{
        confirmed.classList.remove('d-none')

        if(n.value === ''){
            text.innerHTML = 'Sei sicuro di voler eliminare questo prodotto?'
        }else{

            text.innerHTML = 
            
            `Sei sicuro di voler eliminare <span class='fs-4 fw-bold text-danger'> 
            ${n.value} 
            </span>?` 
        }

        yes.onclick = ()=>{
            fetch(endPoint,{
                method: 'DELETE',
                headers,
            })
        }

    })
    
    fetch(endPoint,{
        method,
        headers,
    })
    .then(r => r.json())
    .then(body => {
        const {name, description, price, brand, imageUrl} = body

        n.value = name
        d.value = description
        p.value = price
        b.value = brand
        i.value = imageUrl

    })
}

buttonSubmit.addEventListener('click',()=>{
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        const products = {
            name: n.value,
            description: d.value,
            price: p.value,
            brand: b.value,
            imageUrl: i.value
        }
        
        fetch(endPoint,{
            method,
            headers,
            body: JSON.stringify(products)
        })
        .then(r=>r.json())
        .then(b => {
            location.assign(`./details.html?_id=${b._id}`)
        })
    })
})

const btnReset = document.getElementById('reset-btn')
console.log(input);

btnReset.addEventListener('click',()=>{
    confirmed.classList.remove('d-none')
    text.innerText = 'Sei sicuro di voler resettare il form?'
    yes.onclick = (e)=>{
        e.preventDefault()
        form.reset()
        confirmed.classList.add('border','bg-white','p-5','position-absolute','top-50', 'start-50', 'translate-middle','d-none')
    }
})
