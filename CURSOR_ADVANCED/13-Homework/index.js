const planetsListButton = document.getElementById("getPlanets")
const planetsList = document.getElementById("planets_list");
const charactersList = document.getElementById("characters_list")
const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")
const getCharacterButton = document.getElementById("getCharacters")
const selectButton = document.getElementById("choose_episode")

// Выбираем эпизод 
let filmNumber = 2;

selectButton.addEventListener("change", function(e) {
    filmNumber = selectButton.value;
    console.log(selectButton.value)
    return filmNumber;
})



// Выводим список персонажей

let charactersData = null;

getCharacterButton.addEventListener("click", getCharactersList)

function getCharactersList() {
    charactersList.innerHTML = null;
    axios.get(`https:////swapi.dev/api/films/${filmNumber}`)
        .then((response) => {
            charactersArr = response.data.characters
            charactersArr.map(i => axios.get(i)
                .then((response) => {
                    charactersData = {
                        name: response.data.name,
                        gender: response.data.gender,
                        birth: response.data.birth_year
                    }
                    if (charactersData.gender == "male") {
                        charactersData.gender = "♂"
                    } else if (charactersData.gender == "female") {
                        charactersData.gender = "♀"
                    }
                    const img = document.createElement("img")
                    img.src = "./img/" + charactersData.name + ".png"
                    console.log(img.src)

                    charactersList.insertAdjacentHTML("beforeend", `<br><br><br>Full Name: ${charactersData.name} <br>
                            Gender: ${charactersData.gender} <br>
                            Date of birth: ${charactersData.birth} <br>`)
                    charactersList.append(img)
                })
            )
        })
}


// Выводим список планет

planetsListButton.addEventListener("click", getPlanetsList)

let planetData = null;
let pageNumber = 1;


nextButton.addEventListener('click', function(e) {
    if (pageNumber >= 6) {
        return pageNumber;
    } else pageNumber += 1
    getPlanetsList()
})

prevButton.addEventListener('click', function(e) {
    if (pageNumber > 1) {
        pageNumber -= 1
    } else return pageNumber;
    getPlanetsList()
})

function getPlanetsList() {
    planetsList.innerHTML = null;
    axios.get(`https://swapi.dev/api/planets/?page=${pageNumber}`)
        .then((response) => {
            planetData = response.data.results
            console.log(planetData)
            planetData.map((p, i) => {
                planetsList.insertAdjacentHTML("beforeend", `<li>${p.name}</li>`)
            })
        })
}