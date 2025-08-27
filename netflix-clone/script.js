let form = document.querySelector("form")
let input = document.querySelector(".email")
let results = document.querySelector(".back-ground")
let searchResult = document.createElement("div");
         searchResult.classList.add("results")
         let box2 = document.createElement("div")
        
let section = document.querySelector(".experiment")
let backBtn = document.createElement("button")
backBtn.classList.add("back-button")
let keyword = "";


form.addEventListener("submit", (dets)=> {
    dets.preventDefault();
    searchMovies();
    form.reset();
})
async function searchMovies(){
    keyword = input.value.trim();
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`)
    let data = await response.json()
    console.log(data);
   if(keyword !== " "){
     searchResult.innerHTML = "";
    for(let movie of data){

        let img = document.createElement("img")
        img.src = movie.show.image.medium;

        searchResult.appendChild(img)
       
        results.style.display = "none"
    }
    if(!document.body.contains(searchResult)){
             document.body.prepend(searchResult);
        }
        else{
            results.style.display = "block"
            section.style.display = "block"
        }
        document.body.appendChild(backBtn);
        document.body.appendChild(box2)
        box2.classList.add("box2")
        backBtn.innerHTML = '	&larr; Back'
   }
}
backBtn.addEventListener("click",()=> {
    searchResult.remove();
    box2.remove();
    results.style.display = "block"
    section.style.display = "block";
    backBtn.remove();

})



