document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll('.logo');
    const logo2 = document.querySelector('.logo2');
    const ambientSound = document.getElementById('ambientSound');
    const screamSound = document.getElementById('screamSound');
    const unlockDiv = document.getElementById('unlockDiv');
    const unlockLogo = document.getElementById('unlockLogo');
    const overlay = document.getElementById('overlay'); // Reference to the overlay div
    const closeOverlayButton = document.getElementById('close-overlay'); // Reference to the close button
    let clickCount = 0;

    // Function to play ambient sound and hide overlay
    function closeOverlay() {
        overlay.style.display = 'none'; // Hide the overlay
        ambientSound.play(); // Play the ambient sound
    }

    // Add event listener for the close button click
    closeOverlayButton.addEventListener('click', closeOverlay);

    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            logo.classList.add('swing');
            setTimeout(() => {
                logo.classList.remove('swing');
            }, 9000); 

            clickCount++;
            // Generate a random number between 3 and 7 (inclusive)
            const randomTrigger = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
            
            if (clickCount === randomTrigger) {
                unlockSequence();
            }
        });
    });

    function unlockSequence() {
        unlockDiv.style.display = 'flex';
        unlockLogo.style.display = 'block';
        screamSound.play();
        setTimeout(() => {
            window.location.href = 'https://www.sweetdreamsbitterreality.com/collections/all';
        }, 5000);
    }
    
    function promptLogo() {
        logo2.classList.add('prompt');
        setTimeout(() => {
            logo2.classList.remove('prompt');
        }, 1000);
    }

    // Swing logo2 every 5 seconds
    setInterval(promptLogo, 5000);
});
