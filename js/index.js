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

if(scroll<=0){
    BtnTop.classList.remove("on","ab");
}else if(scroll>0&&scroll<2700){
    BtnTop.classList.remove("ab");
    BtnTop.classList.add("on");
}else{
    BtnTop.classList.add("ab");
}

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



const gnbMenu = document.querySelectorAll('#header>.header_wrap');
const headerWrap = document.querySelector(".header_wrap");

for(var i=0; i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',(e) => {
        e.currentTarget.classList.add('on');
        var ht = e.currentTarget.children[1].offsetHeight;
        headerWrap.getElementsByClassName.height = 126 + ht + 'px';
    });
    gnbMenu[i].addEventListener('mouseout', (e) => {
        e.currentTarget.classList.remove('on');
        headerWrap.getElementsByClassName.height = '126px';
    });
}
