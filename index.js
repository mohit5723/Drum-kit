// detecting button presses

for(var i=0;i<document.querySelectorAll(".drum").length;i++) // adding event listner. we added drum class bec it is same kept in all the drums
{
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        
        var buttoninnerHtml= this.innerHTML;
        makeSound(buttoninnerHtml);
        buttonAnimation(buttoninnerHtml);
        }
    );
}

// detecting keyboard presses
//keydown is used instead of keypress bec kp is depreciated

document.addEventListener("keydown",function(event){ //event is the event that triggerd the keydown whose value is key determined by the key pressed

    makeSound(event.key); //key is the keyword to determine the presses of key (mdn docs)
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;
    
        default:
            
    }
}


// adding animation 

function buttonAnimation(currentKey)
{

    var activeButton = document.querySelector("." + currentKey); // .w .s .a classes are selected so we use . and currentkey will be detected from the detect btn or detect press
    activeButton.classList.add("pressed"); //adding the css classs of pressed to animate

    setTimeout(function () {
        activeButton.classList.remove("pressed"); //removing after a time of 100ms
        }, 100);
    
}


