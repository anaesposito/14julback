const fetch = require("node-fetch");

let url = "https://api.github.com/users/ogranada";


const devolucion = (response) =>{
return response.json()
}

const errorCatch = () =>{
    return "Hola soy un error"
}

const leerUser = (data) =>{
console.log(data.followers_url)
return fetch(data.followers_url)
}

const followers =(data) =>{
    console.log(data)

}

fetch(url)
.then(devolucion)
.then(leerUser)
.then(devolucion)
.then(followers)
.catch(errorCatch)