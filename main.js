let rate = document.getElementById("rate");
let span = Array.from(document.getElementsByTagName("span"));

span.forEach(element => {
    element.addEventListener("click", function() {
        
        let selected = document.getElementById("selected")

        element.style.transition = "0.25s";
        if(element.getAttribute('id') === "selected") {
            element.removeAttribute("id");
        } else {

            if (selected != null) {
                selected.removeAttribute("id")
                element.setAttribute("id", "selected");
            } else {
                element.setAttribute("id", "selected");
            }
        }
    })
});

let submit = document.getElementById("submit");
let thx = document.getElementById("thx");
let def = document.getElementById("default")
let rating = document.getElementById("rating");
let alr = document.getElementById("alert");
let back = document.getElementById("back");

submit.addEventListener("click", function() {
    let selected = document.getElementById("selected")
    if(selected != null) {
        thx.style.display = "block";
        def.style.display = "none";
        rating.textContent = `You selected ${selected.textContent} out of 5`
    } else {
        def.style.display = "none";
        alr.style.display = "block";
        back.addEventListener("click", function() {
            def.style.display = "block";
            alr.style.display = "none";        
        })
    }
})

let backAgain = document.getElementById("backAgain");

backAgain.addEventListener("click", function() {
    thx.style.display = "none";
    def.style.display = "block";
})

