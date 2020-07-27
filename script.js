 //     Nested Data Structure Exercise
         //     NUMBER 1

 var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
  
  //  Num (1a)  Using a for loop, console.log all of the numbers in the primeNumbers array.

  var arrPrime = nestedData.innerData.numberData.primeNumbers
  function viewP(){
  for ( i = 0; i < arrPrime.length; i++){
  console.log(arrPrime[i])
  }
}                                   // 

  //   Num (1b)  Using a for loop, console.log all of the even Fibonnaci numbers.

  var arrFibonacci = nestedData.innerData.numberData.fibonnaci
  function fibonacciF(){
  for (var x = 0; x < arrFibonacci.length; x++){
  if(arrFibonacci[x] % 2 === 0)
  console.log(arrFibonacci[x])
  }
  }                                // 


  //  Num (1c)   Console.log the value "second" inside the order array 

      var value = nestedData.innerData
      value.order[1]
                                 //   "second"

 // Num (1d)  Invoke the addSnack function and add the snack "chocolate".
   // let's start by checking the contents of snacks key
   nestedData.innerData.snacks    //  ["chips", "fruit", "crackers",]
   // Let's add "chocolate" to the snacks array
    nestedData.innerData.addSnack("chocolate")

    // Let's access the snack key again
       nestedData.innerData.snacks          // ["chips", "fruit", "crackers", "chocolate"]


 // Num (1e)  Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

   /* The keyword "this" refers to the parent objects */



       // NUMBER  (2) Given the following nested object:

               var nestedObject = {
                speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
                data: {
                  continents: {
                    europe: {
                      countries: {
                        switzerland: {
                          capital: "Bern",
                          population: 8000000
                        }
                      }
                    }
                  },
                  languages: {
                    spanish: {
                        hello: "Hola"
                    },
                    french: {
                        hello: "Bonjour"
                    }
                  }
                },
              addSpeaker: function(a){
              this.speakers.push({name:a});
              return this;
                }
              }

  //  Num (2a) Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
    
  var nestedObject = {
     speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
     data: {
      continents: {
           europe: {
          countries: {
         switzerland: {
             capital: "Bern",
           population: 8000000
                    }
                   }
                 }
               },
         languages: {
         spanish: {
         hello: "Hola"
                },
         french: {
         hello: "Bonjour"
                 }
               }
              },
         addSpeaker: function(a){
           this.speakers.push({name:a});
           return this;
                }
               }

  // Let's add a speaker name by calling the function.
  nestedObject.addSpeaker("Aour")   
  nestedObject.speakers    //    [{name:"Elie"},{name:"Tim"},{name:"Matt"},{name:"Aour"}]

  //  Num (2b)  Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

  var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    },
  addLanguage: function(language,value){
  var addL = nestedObject.data.languages
  addL[language] = {
  hello : "value"
  }
  return addL;
    }
  }

  // if we call the function now with the language as "italian" and the value as "Ciao"
  nestedObject.addLanguage("italian","Ciao") 

   /*then */nestedObject.data.languages /*will give us :

   languages: {
    spanish: {
        hello: "Hola"
    },
    french: {
        hello: "Bonjour"
    },
    italian: {
      hello: "Ciao"
    }
  } */

  // Num (2c)  

  var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    },
  addLanguage: function(language,value){
  var addL = nestedObject.data.languages
  addL[language] = {
  hello : "value"
  }
  return addL;
    },
  addCountry: function(Country,newCapital,newPopulation){
  var addCountryN = nestedObject.data.continents.europe.countries
  addCountryN[Country] = {
  capital : "newCapital",
  population: "newPopulation"
  }
  return addCountryN
  }
  }
  /*if we call the function */nestedObject.addCountry("Italy","Rome",60000000) /* the output will be as follow:
  Italy: {capital: "Rome", population: "60000000"}
  switzerland: {capital: "Bern", population: 8000000} */