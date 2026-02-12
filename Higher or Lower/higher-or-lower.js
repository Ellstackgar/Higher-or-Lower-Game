const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let generated = Math.floor(Math.random()*1000) + 1;

function gameCycle() {

    rl.question("Pick any number. The chosen number is between 1 and 1000:\n", (num) => {
    
        let guess = Number(num);

            if (isNaN(guess)) {

                console.log("That isn't a valid number!");
            
                gameCycle();


            } else {
        
                if (guess > generated) {

                    console.log("The number is lower.")
                    
                    gameCycle();
    
                 } else if (guess < generated) {

                console.log("The number is higher.")

                gameCycle();

                 }

             else {
        
                console.log("Well done! You have guessed the right number!")

                rl.close(); //change this line to being when user exits menu
           

        }
        }    
    
        });
    

    
    };




 

gameCycle();


console.log("code")
// this is a comment
// this is another comment