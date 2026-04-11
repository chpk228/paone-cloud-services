// Function to update IST Clock
function updateClock() {
    const clockElement = document.getElementById('istClock');
    if (!clockElement) return;

    const now = new Date();
    
    // Convert to IST (India Standard Time)
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    const istTime = now.toLocaleTimeString('en-IN', options);
    const istDate = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    clockElement.innerHTML = `IST Time: ${istTime} <br> ${istDate}`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock on load
window.onload = updateClock;

// Smooth scroll highlight (Optional: adding active class to nav)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        document.querySelectorAll('nav a').forEach(a => a.style.color = '#ffcc00');
        this.style.color = '#fff';
    });
});
