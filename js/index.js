// SYNTAX:
// document.querySelector("button").addEventListener("click", function(){
//     alert("kdas ");

//     write code whatever do to something when button is clicked
// });


// *****************************Detecting Button Press*********************************************
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", whenButtonClicked);

    function whenButtonClicked(){

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);   

        buttonAnimation(buttonInnerHTML);  // To create a Button Animation.!!
    }
}

//*********************************Detecting Keyboard Press****************************************
document.addEventListener("keypress", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            let audio1 = new Audio("sounds/tom-1.mp3"); // This is a CONSTRUCTOR FUNCTION Which we are just simply using.
            audio1.play();
            break;
            
        case "a":
            let audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;

        case "s":
            let audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;

        case "d":
            let audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
            
        case "j":
            let audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;

        case "k":
            let audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
            
        case "l":
            let audio7 = new Audio("sounds/kick-bass.mp3");
            audio7.play();
            break;
            
        default:
            break;
    }
    
}


function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("whenPressed");

    setTimeout(function(){
        activeButton.classList.remove("whenPressed");
    }, 180);

}

// document.addEventListener("keypress", function(){
//   alert("slamskA");
// });