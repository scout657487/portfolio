let menuIcon = document.querySelector("#menu-icon")
let closeIcon = document.querySelector(".close")
let sideBar = document.querySelector(".sideBar")
let cards = document.querySelectorAll(".card")
let head = document.querySelector(".section1-head")
let vidBox = document.querySelector(".hero-vid-box")
document.addEventListener("DOMContentLoaded", () => {
    const video1 = document.querySelector("#projectvideo1");
    const video2 = document.querySelector("#projectvideo2");
    const video3 = document.querySelector("#projectvideo3");
    const reportGeneration = document.querySelector(".reportGeneration");
    const gaming = document.querySelector(".gaming");
    const movie = document.querySelector(".movie");

    const videoList = [video1, video2, video3];

    videoList.forEach((video) => {
        if(video){  // <-- null check
            video.addEventListener('mouseover', ()=> video.play());
            video.addEventListener('mouseout', ()=> video.pause());
        }
    });

    if(reportGeneration){
        reportGeneration.addEventListener("click", ()=> {
            window.location.href = 'https://report-generation-frontend.vercel.app/';
        });
    }
    if(gaming){
        gaming.addEventListener("click", ()=> {
            window.location.href = 'gaming-website/index.html';
        });
    }
    if(movie){
        movie.addEventListener("click", ()=> {
            window.location.href = 'netflix-clone/index.html';
        });
    }
});
menuIcon.addEventListener("click",()=> {
    sideBar.style.display = "block"
})
closeIcon.addEventListener("click",()=> {
    sideBar.style.display = "none"
})




gsap.from(".section1-head span", {
  x: 100,
  opacity: 0,
  duration: 2,
  delay:1,
  ease: "power3.out",
  stagger: 0.6 // 👈 same as duration → no overlap
});
gsap.from(".hero-info-title", {
  y: -100,
  opacity: 0,
  duration: 3,
  delay:1,
  ease: "power3.out", // 👈 same as duration → no overlap
});
gsap.from("#leftist", {
  x: 400,
  opacity: 0,
  delay:1,
  duration: 3,
  ease: "power3.out", // 👈 same as duration → no overlap
});