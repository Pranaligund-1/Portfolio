document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully!");
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');
let count = 0;

likeButton.addEventListener('click', () => {
    count++;
    likeCount.textContent = `${count} Likes`;
});