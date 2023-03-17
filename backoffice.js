const id = new URLSearchParams(window.location.search).get('_id')
const apiURL = 'https://striveschool-api.herokuapp.com/api/product/'

const endpoint = id ? apiURL + id : apiURL
const method = id ? "PUT" : "POST"