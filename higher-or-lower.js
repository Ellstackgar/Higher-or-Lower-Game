
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require("fs")
let parsing;
let generated;
let currentScore;

// function for starting and playing game

function gameCycle() {



    rl.question("Pick any number. The chosen number is between 1 and 1000:\n", (num) => {
    currentScore += 1
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
        
                console.log("Well done! You have guessed the right number!\nGoing back to the Menu.\nThat took " + currentScore + " attempts.")


                // add a line to say how many guesses it took to getting the right answer
                mainMenu();


               
           

        }
        }    
    
        });
    

    
    };

// function of menu screen
function mainMenu() {
    console.log(`==== MAIN MENU ==== 
    1. Start Game 
    2. View Stats 
    3. Exit

        `);
    
    rl.question("> ", chooseMenu);
};

// function of handling user input and going into correct menu option
function chooseMenu(choice) {

    switch (choice.trim()) {

        case "1":
            generated = Math.floor(Math.random()*1000) + 1;
            currentScore = 0
            gameCycle();
            break;

        case "2":
            viewStats();
            break;

        case "3":
            console.log("Exiting Menu...")
            rl.close();
            break;

        default:
        console.log("That option is invalid.")
        mainMenu();

    }


};

// function to saving new high score 

function logHighScore(){

    fs.writeFile("stats.json", JASON.stringify(newScore, null, 2), err => {

        if (err) {
            console.log(err);
        } else {

            console.log("File Overwritten") // keep for now - just a checker

        
        };
        });
    };

// function to saving most recent attempted score


// function to display stats for viewer
function viewStats() {

    fs.readFileSync("stats.json", "utf-8", (err, jsonString) => {

        if (err) {
            console.log(err)
        } else {        

            try { 
            parsing = JSON.parse(jsonString);


            console.log(parsing);

            // later make this readable when printed to terminal

            } catch (err){
                console.log("Error parsing JSON", err);
            };           
        };
        
       });
    };



viewStats();

mainMenu();


 

gameCycle();

