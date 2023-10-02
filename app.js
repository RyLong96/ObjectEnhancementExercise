// refactor same keys and values

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName,
    };
};


// let favoriteNumber = 42;
// const instructor = {
//     firstName: 'Colt',
//     [favoriteNumber] : "That is my favorite!"
// }

//confused as to what is trying to be accomplished here.



const instructor = {
    firstName : "Colt",
    sayHi() {return "Hi!";},
    sayBye() {return this.firstName + " says bye!"}
}

//how does "this" work in line 24

const d = createAnimal("dog", "bark", "woooof!");
d.bark();

const s = createAnimal("sheep", "bleet", "baaaa");
s.bleet();

function generateAnimalObj(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}


//need a walkthrough on this.
