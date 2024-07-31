function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// script.js

// JavaScript for toggling theme
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
// Function to toggle between dark and light mode
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        button.textContent = 'Switch to Dark Mode';
    } else {
        body.classList.add('dark-mode');
        button.textContent = 'Switch to Light Mode';
    }
}

// Add event listener to the button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const button = document.querySelector('.theme-toggle-btn');
    button.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
}
