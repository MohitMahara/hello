// for targeting toggler

document.getElementById("nav-toggle").addEventListener("click", function () {
    document.querySelector(".item-list").classList.toggle("active");
});


// Calculator activity
// Button press check.

let string = "";
var Buttons = document.querySelectorAll(".button");

Array.from(Buttons).forEach((button) => {

    button.addEventListener("click", (e) => {
        var ID = $(button).attr('id');

        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML === 'AC') {
            console.log("evaluted");
            string = "";
            document.querySelector('input').value = string;
        } else if (ID == 'delete') {
            string = string.slice(0, -1);
            document.querySelector("input").value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }


    });
});