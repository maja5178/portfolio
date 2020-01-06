window.addEventListener("load", navShow);


function navShow() {
    console.log("navShow");

    document.querySelector(".burger").addEventListener("click", burgerClick);
}

function burgerClick() {
    console.log("burgerClick");
    document.querySelector('.nav_links').classList.toggle("show");

    document.querySelector('.nav_links').classList.toggle("hide");

    document.querySelector('#nav').classList.toggle("color");
}


let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow_left"),
    arrowRight = document.querySelector("#arrow_right"),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";

}

//show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block"
    current--;
}

// show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block"
    current++;
}


//Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

//Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});
