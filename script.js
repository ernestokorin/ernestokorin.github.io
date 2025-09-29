document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav ul li a');

    // function 2 load a page
    const loadPage = (page) => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(err => console.error('Failed to load page: ', err));
    };

    // load about.html by default
    loadPage('subdomains\\about.html');

    // event listeners for navigation links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });
});



//dropdowns
function toggleDropdown(element) {
    element.classList.toggle('active');
}

// page load animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.dropdown-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.transform = 'translateY(0)';
            section.style.opacity = '1';
        }, index * 100);
    });
});


// new 
