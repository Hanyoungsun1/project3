const leng = document.querySelector(".topMenu_inner>ul>li");
const btnLeng = document.querySelector(".topMenu_inner>ul:nth-child(2)");
const btnLengClose = document.querySelector(".topMenu_inner>ul>.on");

btnLeng.addEventListener("click",(e)=> {
    e.preventDefault();
    leng.classList.add("on");
});

btnLengClose.addEventListener("click", (e) => {
    e.preventDefault();
    leng.classList.remove("on");
});


const sites = document.querySelector("#footer>dl>.family_site>dl");
const btnSites = document.querySelector("#footer>dl>.family_site");
const btnSitesClose = document.querySelector("#footer>dl>.family_site>dl.on");

btnSites.addEventListener("click",(e)=> {
    e.preventDefault();
    sites.classList.add("on");
});

btnSitesClose.addEventListener("click", (e) => {
    e.preventDefault();
    sites.classList.remove("on");
});


