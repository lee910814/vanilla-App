const modal=document.querySelector(".modal");
const click=document.querySelector(".nameBtn")
const input = document.querySelector(".input-form input")
const greething=document.querySelector("h1.greeting ");
const error=document.querySelector("span");


//모달 작성 함수
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


//모달창
function close(){
    modal.classList.remove("hidden");
  
}

//모달창
function open(){
    modal.classList.remove("hidden"); //모달 나타남
    click.classList.add("hidden");//클릭버튼 사라짐
  
}

click.addEventListener("click",open);//클릭시 모달나타나고 버튼 사라짐
modal.addEventListener("submit",writeInput);
