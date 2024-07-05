const openLink = window.open;

window.addEventListener('load', () => {
    let footer = document.getElementById("footer");
    let year = new Date().getFullYear();

    footer.innerHTML = `&copy; ${year}. Усі права захищенні.`;
});
