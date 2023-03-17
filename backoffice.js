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

const form = document.getElementById('form')
const buttonSubmit = document.getElementById('submit')

buttonSubmit.addEventListener('click',()=>{
    
})

if(id){
    const subtitle = document.getElementById('subtitle')
    const btnDelete = document.getElementById('delete-btn')

    subtitle.innerText = '— Modifica elemento'
    subtitle.className = 'd-inline-block'
    btnDelete.classList.remove('d-none')

    btnDelete.addEventListener('click',(e)=>{
        fetch(endPoint,{
            method: 'DELETE',
            headers,
        })
        .then(r => r.json())
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
})


