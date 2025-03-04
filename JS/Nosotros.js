document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });
});
