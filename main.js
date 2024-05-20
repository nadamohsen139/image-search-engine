let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchResult = document.getElementById("search-result");
let searchBtn = document.querySelector(".search-btn");
let showmoreBtn = document.querySelector(".show-more");
let accessKey = "nJe2FZblxUdM2-LwQOFtN5m26FP5JrsPoR7zBi6pyoI";
let keyword = "";
let page = 1;
async function searchImg() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12;`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(page === 1) {
        searchResult.innerHTML = "";
    }
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = `image that contains ${keyword}`;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        const contain = document.createElement("div");
        contain.appendChild(imageLink);
        searchResult.appendChild(contain);
    })
    showmoreBtn.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page =1;
    searchImg();
});
showmoreBtn.addEventListener("click", () => {
    page ++;
    searchImg();
})