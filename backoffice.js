const apiURL = 'https://striveschool-api.herokuapp.com/api/product/'
const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2E0ZWY4MWI0MjAwMTM5YjI4MzgiLCJpYXQiOjE2NzkwNDcyNDYsImV4cCI6MTY4MDI1Njg0Nn0.JOuvgWEwI9jKGVynvQ-fMowvbLurAiPY0bRHB_9XZ-k",
    "Content-Type": "application/json"
}

const n = document.getElementById('name')
const d = document.getElementById('description')
const p = document.getElementById('price')
const b = document.getElementById('brand')
const i = document.getElementById('url')

const form = document.getElementById('form')
const buttonSubmit = document.getElementById('submit')

buttonSubmit.addEventListener('click',()=>{
    
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const products = {
        name: n.value,
        description: d.value,
        price: p.value,
        brand: b.value,
        imageUrl: i.value
    }
    
    fetch(apiURL,{
        method: 'POST',
        headers,
        body: JSON.stringify(products)
    })
})
