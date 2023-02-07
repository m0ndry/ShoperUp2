const postLoaderButton = document.querySelector(".post--loader");
const hiddenPost = document.querySelector(".post.hidden");

postLoaderButton.addEventListener("click", function() {
    hiddenPost.classList.remove("hidden");
});



// Zadanie 1

// const table = ["x", "y", "z"];

// function checkTable(table, tableIndex) {      
      
//     if (table.includes(tableIndex)) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }    
// }
    
// checkTable(table, "x");

// Zadanie 2

//Poddaje się. Z 4 godziny nad tym siedziałem. Nie wychodzi :)

// let insideTable = [];
// let tripleTable = [];
// const table = [ "ala ma kota", "test test", "xxx" ];


// function convertStringToArrays(table, separator)  = nawet nie próbowałem tego zamykać w funkcji ;)



// PIerwszy sposób o którym myślałem 

// for(let i = 0; i < table.length; i++) {
//     for(let j = 0; j < table[i].split(); j++) {
//       tripleTab = table.split();
      
//     }   
//     console.log(tripleTab);
//  }
 
// Drugi sposób o którym myślałem
//  for(let i = 0; i < table.length; i++) {
//     insideTable = table[i].split();
      
//     }
   
// tripleTable = ${insideTable}

// console.log(tripleTable);
    
 



// convertStringToArrays(table, " "); = nawet nie próbowałem tego zamykać w funkcji ;)


// Zadanie 9

const person = {
    name: "Michał",
    surname: "Mądrzak",
    age: 38,
    favouriteMovies: ["Die Hard", " Die Hard 2", " Die Hard 3"],
    getFavMovies: function() {
     return this.favouriteMovies.join();
    },
    getFullName:  function() {
        return `${this.name} ${this.surname}`;
    },
    sayHello: function() {
        console.log(`Hello my name is ${this.getFullName()}. I am ${this.age} years old, and my favorite movies are: ${this.getFavMovies()}.`)
    }
}
person.sayHello();
