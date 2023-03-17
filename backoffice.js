const id = new URLSearchParams(window.location.search).get('_id')
const apiURL = 'https://striveschool-api.herokuapp.com/api/product/'
const a = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2E0ZWY4MWI0MjAwMTM5YjI4MzgiLCJpYXQiOjE2NzkwNDcyNDYsImV4cCI6MTY4MDI1Njg0Nn0.JOuvgWEwI9jKGVynvQ-fMowvbLurAiPY0bRHB_9XZ-k"
        }
}

const endpoint = id ? apiURL + id : apiURL
const method = id ? "PUT" : "POST"

fetch(endpoint,a)
.then(r => r.json())
.then(body => {
    for(let i = 0;i<body.length;i++){
        const {brand, name, imageUrl, price, description} = body[i]
        console.log(body);
    }
})