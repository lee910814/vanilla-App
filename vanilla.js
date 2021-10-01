const modal=document.querySelector(".modal");
const click=document.querySelector(".nameBtn")

function close(){
    modal.classList.remove("hidden");
}
function open(){
    modal.classList.remove("hidden");

}

click.addEventListener("click",open);
