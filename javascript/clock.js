const clock =document.querySelector(".clock h3");


function getClock(){//시간
    const data = new Date();
    const hours = string(data.getHours()).padSatrt(2,"0");
    const minites = string(data.getMinites()).padSatrt(2,"0");
    const second = string(data.getSeconds()).padSatrt(2,"0");
    clock.innerHTML = `${hours}:${minites}:${second}`;
}

getClock();
setInterval(getClock,1000);
