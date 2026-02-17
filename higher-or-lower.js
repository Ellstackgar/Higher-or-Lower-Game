
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fs = require("fs")

let generated;
let currentScore;
let newScore;

// function for starting and playing game

function gameCycle() {



    rl.question("Pick any number. The chosen number is between 1 and 1000:\n", (num) => {
    currentScore += 1
    newScore = currentScore
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
        
                console.log("Well done! You have guessed the right number!\nGoing back to the Menu.\nThat took " + currentScore + " attempts.");

                logNewScores();
              
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
            console.log(viewStats());
            
            mainMenu();
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

function logNewScores(){

        const parsing = viewStats();
        
            parsing["Last Attempt"] = newScore;

            if (newScore > parsing.Leaderboard[4]) {
                parsing.Leaderboard.push(newScore);
                parsing.Leaderboard.sort((a,b) => b - a);
                parsing.Leaderboard = parsing.Leaderboard.slice(0,5);

            };

            fs.writeFile("stats.json", JSON.stringify(parsing, null, 2), "utf-8", err => {
          
            console.log(parsing)
    

        if (err) {
            console.log(err);
        };

        });
    };

// function to saving most recent attempted score


// function to display stats for viewer
function viewStats() {

    const jsonString = fs.readFileSync("stats.json", "utf-8");

    if (!jsonString.trim()) {
        // File is empty — return default structure
        return {
            lastAttempt: 0,
            Leaderboard: [0, 0, 0, 0, 0]
        };
    }
            try { 

                return JSON.parse(jsonString);

           // console.log(parsing, "first log");

            } catch (err){
                console.log("Error parsing JSON", err);
            };           
        };

 


mainMenu();





