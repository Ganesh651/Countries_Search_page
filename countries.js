let userInput = document.getElementById("userInput");
let spinner = document.getElementById("spinner");
let resultsContainer = document.getElementById("resultsContainer")

let searchInputVal = "";
function createAndAppendResults(result){
    let {flag,name,population} = result;

    let containerEl = document.createElement("div");
    // containerEl.classList.add("")

    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container")
    resultsContainer.appendChild(cardContainer);

    let flagImg = document.createElement("img");
    flagImg.src = flag;
    flagImg.classList.add("country-flag");
    cardContainer.appendChild(flagImg);

    let wrapContainer = document.createElement("div");
    wrapContainer.classList.add("d-flex","flex-row","ml-4")
    flagImg.appendChild(wrapContainer);

    let heading = document.createElement("h1");
    heading.textContent = name;
    heading.classList.add("country-name");
    cardContainer.appendChild(heading);

    let description = document.createElement("p");
    description.classList.add("country-population")
    description.textContent = population;
    cardContainer.appendChild(description)
}

function displaySearchResults(search_Results){
    for (let result of search_Results){
        createAndAppendResults(result);
        console.log(result)
    }
}

function getResults(){ 
    let URL = "https://apis.ccbp.in/countries-data";
    let Option = {
        Method : "GET"
    };
    fetch(URL,Option)
    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        let search_Results = jsonData;
        displaySearchResults(search_Results);
    })
    }

getResults();
function onSearch(event){
    searchInputVal = event.target.value;
    getResults();
}

userInput.addEventListener("keydown", onSearch);