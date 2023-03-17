const apiURL = 'https://striveschool-api.herokuapp.com/api/product/'

const n = document.getElementById('name')
const d = document.getElementById('description')
const p = document.getElementById('price')
const b = document.getElementById('brand')

const form = document.getElementById('form')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const products = {
        name: n.value,
        description: d.value,
        price: p.value,
        brand: b.value,
        imageUrl: "https://t3.ftcdn.net/jpg/05/53/96/26/360_F_553962649_kYCSSF6qJ9oR83QLnaBlwOgNj58kxhyB.jpg"
    }
    
    fetch(apiURL,{
        method: 'POST',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2E0ZWY4MWI0MjAwMTM5YjI4MzgiLCJpYXQiOjE2NzkwNDcyNDYsImV4cCI6MTY4MDI1Njg0Nn0.JOuvgWEwI9jKGVynvQ-fMowvbLurAiPY0bRHB_9XZ-k",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(products)
    })
})




// function submitted(event){
//     event.preventDefault()
//     fetch(apiURL,a)
//     .then(r => r.json())
//     .then(b => {
//         const products = {
//             name: document.getElementById('name').value,
//             description: document.getElementById('description').value,
//             price: document.getElementById('brand').value,
//             brand: document.getElementById('brand').value,
//             imageUrl: "https://t3.ftcdn.net/jpg/05/53/96/26/360_F_553962649_kYCSSF6qJ9oR83QLnaBlwOgNj58kxhyB.jpg"
//         }
//         b = JSON.stringify(products)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }
