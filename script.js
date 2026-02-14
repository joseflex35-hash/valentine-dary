// script.js

// Function to display an alert when the button is clicked
function showProposalMessage() {
    alert('Will you be my Valentine?');
}

// Adding an event listener to the button
window.onload = function() {
    const button = document.getElementById('proposalButton');
    button.addEventListener('click', showProposalMessage);
};
