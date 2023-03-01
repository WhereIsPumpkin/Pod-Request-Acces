const input = document.getElementById('email');
const submit = document.getElementById("submit");
const error = document.querySelector('.error');

submit.addEventListener("click", function(event){
    event.preventDefault();
    if(!input.value.includes("@") || !input.value.includes(".")){
        error.classList.add("errorpop");
    };

} );
  
input.addEventListener("input", function(event){
    if(event.target.value.includes("@") && event.target.value.includes(".")){
        error.classList.remove("errorpop");
    };
});