window.addEventListener('load', () => {
    let footer = document.getElementById("footer");
    let year = new Date().getFullYear();

    footer.innerHTML = `&copy; ${year}. Усі права захищенні.`;
});

const openLink = window.open;

document.addEventListener('DOMContentLoaded', (event) => {
    const dropbtn = document.querySelector('.dropbtn');
    const arrow = document.querySelector('.arrow');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function() {
        arrow.classList.toggle("rotate");
        dropdownContent.classList.toggle("show");
    });
});
