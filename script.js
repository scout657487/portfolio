const video1 = document.querySelector("#projectvideo1")
const video2 = document.querySelector("#projectvideo2")
const video3 = document.querySelector("#projectvideo3")

const videoList = [video1, video2, video3];

videoList.forEach((video)=> {
    video.addEventListener('mouseover', ()=> {
        video.play();
    })
})