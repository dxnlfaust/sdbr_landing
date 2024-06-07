document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll('.logo');
    const ambientSound = document.getElementById('ambientSound');
    const screamSound = document.getElementById('screamSound');
    const unlockVideoDesktop = document.getElementById('unlockVideoDesktop');
    const unlockVideoMobile = document.getElementById('unlockVideoMobile');
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
            }, 9000); // Match the longest duration of the swing animation

            clickCount++;
            if (clickCount === 5) {
                unlockSequence();
            }
        });
    });

    function unlockSequence() {
        if (window.innerHeight > window.innerWidth) {
            unlockVideoMobile.style.display = 'block';
            unlockVideoMobile.play();
        } else {
            unlockVideoDesktop.style.display = 'block';
            unlockVideoDesktop.play();
        }
        screamSound.play();
        setTimeout(() => {
            window.location.href = 'https://www.sweetdreamsbitterreality.com/collections/all';
        }, 5000);
    }
});