console.log("                               Preliminaries                            ")
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

for( i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
for( i = numbers.length; i >= 0; i--) {
    console.log(numbers[i])
}

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}


////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("                               Bronze Medal                            ")
var numArr = []
for( i = 0; i < numbers.length; i++) {
numArr.push(numbers[i])

}
console.log(numArr)

for ( i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
} 
var fruitArr = []
for (i = 0; i < fruit.length; i += 2) {
    fruitArr.push(fruit[i])
}
console.log(fruitArr)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("                               Silver Medal                            ")

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

  var peepArr = []
  for ( i = 0 ; i < peopleArray.length; i++ ) {
    peepArr.push( peopleArray[i].name )
  }
  console.log(peepArr)

  console.log ()

  var namesArr = []
  var occupationsArr = []
  for (i = 0 ; i < peopleArray.length; i++) {
    namesArr.push( peopleArray[i].name)
    occupationsArr.push(peopleArray[i].occupation)
  }
  console.log( namesArr)
  console.log(  occupationsArr)

  console.log ()


  var namesArr2 = []
  var occupationsArr2 = []
  for (i = 0 ; i < peopleArray.length; i += 2) {
    namesArr.push( peopleArray[i].name)
    occupationsArr.push(peopleArray[i].occupation)
  }

  console.log ()
  for (i = 0; i < peopleArray.length; i++ ) {
    if ( i % 2 == 0 ) {
    namesArr2.push( peopleArray[i].name ) 
    }
     if ( i % 2 != 0 ) {
      occupationsArr2.push ( peopleArray[i].occupation )
    }
    }
    console.log(namesArr2 )
    console.log(occupationsArr2)

   
   
   
    console.log("                               Gold Medal                            ")


var gold1 = [[],[],[]]
var gold2 = [[],[],[]]
var gold3 = [[],[],[]]
var gold4 = [[],[],[]]
let Arr = []
    for(var i = 0; i < 3; i++){
      let Arr = []
//      gold1.push ( "0" )
           for(var j = 0; j < 3 ; j++){
            gold1[i].push ( 0)
           }
       }

console.log (gold1)
console.log ()

for(var i = 0; i < 3; i++){

    for(let j = 0; j < 3; j++) {
      gold2[i].push(i) 
    }
    
   }

console.log (gold2)
console.log ()

for(var i = 0; i < 3; i++){

  for(let j = 0; j < 3; j++) {
    gold3[i].push(j) 
  }
  
 }

console.log (gold3)
console.log ()
for(var i = 0; i < 3; i++){

  for(let j = 0; j < 3; j++) {
    gold4[i].push('x') 
  }
  
 }

console.log (gold4)