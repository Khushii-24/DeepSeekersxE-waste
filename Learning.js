// Show content section based on button clicked
function showContent(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected content section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to the clicked button
    document.querySelector(`button[onclick="showContent('${sectionId}')"]`).classList.add('active');
}

// Toggle description visibility
function toggleDescription(id) {
    const description = document.getElementById(id);
    const button = description.previousElementSibling.querySelector('.read-more-btn');
    
    if (description.style.display === "block") {
        description.style.display = "none";
        button.textContent = "Read More";
    } else {
        description.style.display = "block";
        button.textContent = "Read Less";
    }
}

// Show the first section by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showContent('green-electronics');
});