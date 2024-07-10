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
    const links = dropdownContent.querySelectorAll('.link');

    dropbtn.addEventListener('click', function() {
        arrow.classList.toggle("rotate");

        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.add("hide");
            dropdownContent.classList.remove("show");

            [...links].reverse().forEach((link, index) => {
                setTimeout(() => {
                    link.classList.remove("show");
                    link.classList.add("hide");
                }, index * 200);
            });

            setTimeout(() => {
                dropdownContent.classList.remove("hide");
                links.forEach((link, index) => {
                    link.classList.remove("hide");
                });
            }, links.length * 200);
        
        } else {
            dropdownContent.classList.add("show");

            links.forEach((link, index) => {
                setTimeout(() => {
                    link.classList.add("show");
                }, index * 200);
            });
        }
    });
});
