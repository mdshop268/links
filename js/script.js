window.addEventListener('load', () => {
    let footer = document.getElementById("footer");
    let year = new Date().getFullYear();

    footer.innerHTML = `&copy; ${year}. Усі права захищенні.`;
});

const openLink = window.open;

document.addEventListener('DOMContentLoaded', (event) => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropArrow = document.querySelector('.arrow');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function() {
        if (dropdownContent.classList.contains('show')) {
            dropArrow.classList.add("rotateL");
            dropdownContent.classList.add('hide');
            setTimeout(() => {
                dropdownContent.classList.remove('show');
                dropdownContent.classList.remove('hide');
                dropArrow.classList.remove("rotateR");
                dropArrow.classList.remove("rotateL");
            }, 500);
        } else {
            dropdownContent.classList.add('show');
            dropArrow.classList.add("rotateR");
        }
    });
});
