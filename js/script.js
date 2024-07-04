const openLink = (link) => { window.open(link); }

window.addEventListener('load', () => {
    let footer = document.getElementById("footer");
    
    let re = /YEAR/g;
    let year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace(re, year);
});