const modal=document.querySelector(".modal");
const click=document.querySelector(".nameBtn")
const input = document.querySelector(".input-form input")
const greething=document.querySelector("h1.greeting ");
const error=document.querySelector("span");
const clock =document.querySelector("h3.clock");

function getClock(){//시간
    const data = new Date();
    const hours = string(data.getHours()).padSatrt(2,"0");
    const minites = string(data.getMinites()).padSatrt(2,"0");
    const second = string(data.getSeconds()).padSatrt(2,"0");
    clock.innerHTML = `${hours}:${minites}:${second}`;
}



function writeInput(event){
    event.preventDefault();
    const username=input.value;
    if(username===""){//error
        error.innerHTML="이름을 입력해주세요";
    }else{
    modal.classList.add("hidden");//모달창 없어짐
    greething.innerHTML= username+"님 반갑습니다";//사용자가 작성한 username
    greething.classList.remove("hidden");//username이랑 인삿말
}
}
function close(){
    modal.classList.remove("hidden");
}
function open(){
    modal.classList.remove("hidden");
    click.classList.add("hidden");

}

click.addEventListener("click",open);
modal.addEventListener("submit",writeInput)
getClock();
setInterval(getClock,1000);
