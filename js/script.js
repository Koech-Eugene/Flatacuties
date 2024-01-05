//Getting animal posts
document.addEventListener('DOMContentLoaded',getAnimal)
const postName = document.getElementById("animalnames")
const postAnimals = document.getElementById("animals")
const API_URL = "http://localhost:3000/characters"
//initialize the get request
function getAnimal(){
    fetch(API_URL)
    .then((response) => response.json())
    .then((animalData) => {
        // store data in json format
        // console.log(JSON.stringify(animalData))
        // our animal data is stored in an array format hence we loop through the array and retrieve the animal names
        animalData.forEach((animalData) => {
            const list = document.createElement("span")
            list.textContent = animalData.name
            list.addEventListener("click", () => displayAnimalData(animalData))
            postName.appendChild(list)
            postName.className = "list"
        })
    })
    .catch((error) => console.log(error))
}
function displayAnimalData(animalData) {
    //create elements image and votes
    const animalPost = document.createElement('div')
    postAnimals.innerHTML = ""
    const animal = document.createElement("h4")
    animal.textContent = animalData.name
    const image = document.createElement("img")
    image.src = animalData.image
    image.className = "image"
    const vote = document.createElement("p")
    vote.textContent = `Votes: ${animalData.votes}`
    const voteButton = document.createElement("button")
    voteButton.className = "vote"
    voteButton.textContent = "Vote"
    voteButton.addEventListener("click", () => {
        animalData.votes++;
        vote.textContent = `Votes: ${animalData.votes}`
        updateVotes(animalData.id, animalData.name, animalData.image, animalData.votes)
    });
    animalPost.appendChild(animal)
    animalPost.appendChild(image)
    animalPost.appendChild(vote)
    animalPost.appendChild(voteButton)
    postAnimals.appendChild(animalPost)
}
function updateVotes(id, animal, image, votes) {
    let addvotes = {
        "id": id,
        "name": animal,
        "image": image,
        "votes": votes
    }
    const updateURL = `http://localhost:3000/characters/${id}`
    fetch(updateURL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addvotes),
    })
    .then(() => {
        getAnimal()
    })
    .catch((error) => {
        alert(error)
        console.log(error)
    })
}