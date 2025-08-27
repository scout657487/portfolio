let nextbtn = document.querySelector(".next-btn")
let video = document.querySelector(".hero-video")

const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4'];
let index = 0;


nextbtn.addEventListener("click",()=> {
    index++;
    video.src = movieList[index]
    if(index === 3){
        index = -1;
    }
})