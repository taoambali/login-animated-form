const inputs = document.querySelectorAll('.form-input');

inputs.forEach(input => {
    input.addEventListener("focus" , () => {
        input.offsetParent.classList.add("active");
    });

    input.addEventListener("blur", () => {
        if(input.value == "") {
            input.offsetParent.classList.remove("active");
        }
    })
})