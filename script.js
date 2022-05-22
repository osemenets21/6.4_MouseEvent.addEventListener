let list = document.querySelector('.list');

function changeColor(event) {
    event.target.style.color = event.target.textContent;
}

list.addEventListener("click", function(event){
    if(event.target.closest('li')){
        changeColor(event);
    }
})