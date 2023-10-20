function toggleOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Set a threshold for when you want to change the background color
    const scrollThreshold = 200; // Change this value as needed

    // Get the element where you want to change the background color
    const contentElement = document.getElementById('content');

    // Change the background color based on scroll position
    if (scrollPosition > scrollThreshold) {
        contentElement.style.backgroundColor = 'lightblue'; // Change to your desired color
    } else {
        contentElement.style.backgroundColor = ''; // Reset to the default color
    }
});