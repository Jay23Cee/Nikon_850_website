
     var itemClassName = 'carousel_slide'
     var items = document.getElementsByClassName(itemClassName);
    // var carousels_slide = document.getElementsByClassName('carousel_slide carousel_slide--active'),

    total_item =items.length,
    slide = 0,
    moving = false;

    function setInitialClasses(){
        // targets the previous, current, and next items
        

        // This assumes there are at least three items

      items[total_item - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");

    }



/// set event listeners
function setEventListeners(){
    // Get the Left button and event listiner for click

    var left_button = document.getElementById("L-btn").addEventListener("click", Leftarrow);

    // Get the Right button and event listiner for click
    var right_button = document.getElementById("R-btn").addEventListener("click", Rightarrow);

}


//Function when left arrow is click
function Leftarrow() {
   
    if (!moving){
        //if it's the first slide , set as the last slide, else -1
        if (slide === 0){
            slide = (total_item-1);
        }
        else{
            slide--;
        }

        //move carousel to updated slide
        moveCarouselTo(slide);

    }


   

}

//function when right arrow is click
function Rightarrow() {
  
    // check if moving
    if (!moving){
        //if it's the last slide reset to 0 , else +1
        if (slide === (total_item-1)){
            slide = 0;
        }
        else{
            slide++;
        }

        //move carousel to updated slide
        moveCarouselTo(slide);

    }
 
 }


function disableInteraction(){
    //set moving to true for the same duration as our transition

    moving = true;

    // set timeout runs it's function once after the given time
    setTimeout(function(){
        moving= false
    },500);
}

function moveCarouselTo(slide){

// check if carousel is moving, if not, allow interaction 
if (!moving){
    //temporarily disable ineractivity
    disableInteraction();

    //update the "old" adjacent slides with "new ones
    var newPrevious = slide - 1,
    newNext = slide + 1,
    oldPrevious = slide - 2,
    oldNext = slide + 2;

        // Test if carousel has more than three items
        if ((total_item - 1) > 3) {

        // Checks if the new potential slide is out of bounds and sets slide numbers
        if (newPrevious <= 0) {
            oldPrevious = (total_item - 1);
        } else if (newNext >= (total_item - 1)){
            oldNext = 0;
        }

        // Check if current slide is at the beginning or end and sets slide numbers
        if (slide === 0) {
            newPrevious = (total_item - 1);
            oldPrevious = (total_item - 2);
            oldNext = (slide + 1);
        } else if (slide === (total_item -1)) {
            newPrevious = (slide - 1);
            newNext = 0;
            oldNext = 1;
        }

        // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.

        // Based on the current slide, reset to default classes.

        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;

        // Add the new classes
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
        }


}

}


function initCarousel(){
  
    setInitialClasses;
    setEventListeners;

    //set moving to false so that the carousel becomes interactive
    moving = false;
}


setInitialClasses()
var left_button = document.getElementById("L-btn").addEventListener("click", Leftarrow);

// Get the Right button and event listiner for click
var right_button = document.getElementById("R-btn").addEventListener("click", Rightarrow);

