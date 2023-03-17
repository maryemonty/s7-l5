const apiURL = 'https://striveschool-api.herokuapp.com/api/product/'
const a = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2E0ZWY4MWI0MjAwMTM5YjI4MzgiLCJpYXQiOjE2NzkwNDcyNDYsImV4cCI6MTY4MDI1Njg0Nn0.JOuvgWEwI9jKGVynvQ-fMowvbLurAiPY0bRHB_9XZ-k"
        }
}

fetch(apiURL, a)
.then(r => r.json())
.then(products => {
    const grid = document.getElementById('crudazon-list');
    grid.firstElementChild.remove();
    
    products.forEach((product)=>{
        console.log(product);
        const divMain = document.createElement('div')
        const cardBody = document.createElement('div')
        const img = document.createElement('img')
        const h5 = document.createElement('h5')
        const p = document.createElement('p')
        const divFlex = document.createElement('div')
        const price = document.createElement('p')
        const btnEdit = document.createElement('button')

        divMain.style.width = '18rem'
        h5.style.textAlign = 'center'

        divMain.classList.add('card','m-3')
        divFlex.classList.add('d-flex','justify-content-between','align-items-baseline')
        btnEdit.classList.add('btn','btn-primary')
        cardBody.className = 'card-body'
        img.className = 'card-img-top'

        img.src = product.imageUrl
        h5.innerText = product.name
        p.innerText = product.description
        price.innerText = product.price +'$'
        btnEdit.innerText = 'Edit'
        
        grid.append(divMain)
        divMain.append(img,cardBody)
        cardBody.append(h5,p,divFlex)
        divFlex.append(price,btnEdit)
    })
})