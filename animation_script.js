window.addEventListener("load", navShow);


function navShow() {
    console.log("navShow");

    document.querySelector(".burger").addEventListener("click", burgerClick);
}

function burgerClick() {
    console.log("burgerClick");
    document.querySelector('.nav_links').classList.toggle("show");

    document.querySelector('.nav_links').classList.toggle("hide");
}


//annimationer vis kode istedet for animationer
window.addEventListener("load", clickKnap);

function clickKnap() {
    console.log("clickKnap");

    document.querySelector(".knap").addEventListener("click", showKode);

}

function showKode() {
    console.log("showKode");
    document.querySelector('.ball_1').classList.toggle("dont_show");
    document.querySelector('.ball_2').classList.toggle("dont_show");
    document.querySelector('.ball_3').classList.toggle("dont_show");

    document.querySelector('.kode_1').classList.toggle("dont_show");
    document.querySelector('.kode_2').classList.toggle("dont_show");
    document.querySelector('.kode_3').classList.toggle("dont_show");


}
