document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav ul li a');

    const loadPage = (page) => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(err => console.error('Failed to load page: ', err));
    };

    loadPage('subdomains\\about.html');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });
});
