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