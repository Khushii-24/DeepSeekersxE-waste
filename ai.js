document.addEventListener("DOMContentLoaded", () => {
    
    // Image Upload & Detection Simulation
    const uploadBox = document.getElementById("upload-box");
    const uploadInput = document.getElementById("upload-input");

    uploadBox.addEventListener("click", () => {
        uploadInput.click();
    });

    uploadInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            uploadBox.innerHTML = `<p>Processing Image...</p>`;
            setTimeout(() => {
                uploadBox.innerHTML = `<p>E-Waste Detected! <br> Possible Materials: Metal, Plastic, Circuit Board</p>`;
            }, 2000);  // Simulating AI Detection Delay
        }
    });

    // Recycling Suggestions
    document.getElementById("suggest-recycling").addEventListener("click", () => {
        alert("Recycling Options:\n1. Take it to an authorized e-waste recycler.\n2. Sell reusable parts.\n3. Donate for refurbishment.");
    });

    // Material Classification
    document.getElementById("classify-material").addEventListener("click", () => {
        const selectedMaterial = document.getElementById("material-type").value;
        alert(`E-Waste classified as: ${selectedMaterial.toUpperCase()}`);
    });
});
