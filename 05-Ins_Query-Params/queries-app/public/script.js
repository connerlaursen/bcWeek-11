const button = document.getElementById("getAnimals");
const listOfAnimals = document.getElementById("listAnimals");

const getAnimals = () => {
    console.log('get animals function was called successfully')
    const baseURL = 'http://localhost:3001';
    fetch("/animals")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (let animal of data) {
                console.log(animal);
                let itemList = document.createElement("li");
                itemList.innerText = animal.name;
                listOfAnimals.appendChild(itemList);
            }

        })
}

button.addEventListener('click', () => {
    getAnimals();
})