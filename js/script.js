//Getting animal posts
document.addEventListener('DOMContentLoaded',getAnimal)
const postAnimals = document.getElementById("animals")
const API_URL = "http://localhost:3000/characters"
//initialize the get request
function getAnimal(){
    fetch(API_URL)
    .then((response) => response.json())
    .then((animalData) => {
        // store data in json format
        // console.log(JSON.stringify(animalData))
        // our animal data is stored in an array format hence we loop through the array
        animalData.forEach((animal) => {
            display(animal)
        })
    })
    .catch((error) => console.log(error))
}
