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
    const name = document.createElement("h4")
    name.textContent = animalData.name
    const image = document.createElement("img")
    image.src = animalData.image
    image.className = "image"
    const vote = document.createElement("p")
    vote.textContent = `Votes: ${animalData.votes}`
    const voteButton = document.createElement("button")
    voteButton.className = "vote"
    voteButton.textContent = "Vote"
    voteButton.onclick = () =>{
        animalData.votes++
        newvotes = updateVotes(animalData.id, animalData.votes)
        textContent = `Votes: ${animalData.votes}`
    }
    animalPost.appendChild(name)
    animalPost.appendChild(image)
    animalPost.appendChild(vote)
    animalPost.appendChild(voteButton)
    postAnimals.appendChild(animalPost)
}
function updateVotes(newVotes) {
    const updateURL = "http://localhost:3000/characters"
    fetch(updateURL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ votes: newVotes }),
    })
        .then((response) => response.json())
        .then((updatedData) => {
            console.log("Votes updated successfully:", updatedData)
        })
        .catch((error) => console.error("Error updating votes:", error))
}


