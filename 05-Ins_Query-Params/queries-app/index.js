const express = require('express');
const cors = require('cors');


//import animals
const animals = [
    {
        name: 'Lion',
        fact: 'Lions are the only cats that have manes, the thick hair around their heads.'
    },
    {
        name: 'Giraffe',
        fact: 'Giraffes are the tallest land animals on earth, with legs that can be up to 6 feet long.'
    },
    {
        name: 'Panda',
        fact: 'Pandas are native to China and are known for their love of bamboo.'
    },
    {
        name: 'Kangaroo',
        fact: 'Kangaroos are marsupials native to Australia and are known for their powerful legs and tail, which they use to hop around.'
    },
    {
        name: 'Octopus',
        fact: 'Octopuses are intelligent creatures that have been known to open jars, solve puzzles, and even escape from tanks in aquariums.'
    },
    {
        name: 'Penguin',
        fact: 'Penguins are birds that cannot fly, but they are excellent swimmers and can swim up to speeds of 15 miles per hour.'
    },
    {
        name: 'Flamingo',
        fact: 'Flamingos are known for their distinctive pink feathers, which are caused by the pigments in their diet of brine shrimp and algae.'
    },
    {
        name: 'Hippopotamus',
        fact: 'Hippopotamuses are large, semi-aquatic mammals native to Africa. They are known for their short legs and massive bodies.'
    },
    {
        name: 'Wolf',
        fact: 'Wolves are social animals that live in packs and communicate with each other using vocalizations like howls and barks.'
    },
    {
        name: 'Crocodile',
        fact: 'Crocodiles are reptiles that live in freshwater environments, such as rivers and swamps, and are known for their powerful jaws and sharp teeth.'
    },
    {
        name: 'Sloth',
        fact: 'Sloths are slow-moving animals that spend most of their time hanging upside down in trees in Central and South America.'
    },
    {
        name: 'Pelican',
        fact: 'Pelicans are large birds with a distinctive pouch under their beak that they use to store fish and other food.'
    },
    {
        name: 'Seahorse',
        fact: 'Seahorses are small, fish-like creatures that are known for their unique appearance and their mating habits, in which the males become pregnant and give birth.'
    },
    {
        name: 'Eagle',
        fact: 'Eagles are large birds of prey that are known for their sharp vision and powerful wings. They are found on every continent except Antarctica.'
    }
]

console.log(animals)
const app = express();
const PORT = 3001;

//middlewares
app.use(express.static("public"));
// app.use(cors());

app.get("/", (req, res) => {
    res.send("<p>home</p>");
})

app.get("/animals", (req, res) => {
    res.json(animals);
})

app.get("/animals/:animal", (req, res) => {
    console.log(req.params.animal)
    console.log(req.query)
    const animal = req.params.animal.toLowerCase();
    const animalFact = animals.filter((animalObject) => animalObject.name.toLowerCase() === animal)
    if (animalFact.length > 0) {
        res.json(animalFact);
    } else {
        res.send("Animal not found");
    }

})


app.get("*", (req, res) => {
    res.send("<h1>404 NOT FOUND</h1>")
})



app.listen(PORT, () => {
    console.log(`server listening to ${PORT}`)
});