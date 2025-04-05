// Initialize Slick Slider
$(document).ready(function(){
    $('.gutentor-module-slider-row').slick({
        dots: false,
        dotsTablet: false,
        dotsMobile: false,
        arrows: true,
        arrowsTablet: false,
        arrowsMobile: false,
        fade: false,
        draggable: true,
        infinite: true,
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 3000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });
});

// Dropdown Functionality
function updateSubcategory() {
    const category = document.getElementById("category").value;
    const subcategory = document.getElementById("subcategory");
    subcategory.innerHTML = '<option value="">-- Select an Item --</option>';

    if (category === "computing") {
        const items = [
            { group: "Computers", items: ["Desktop computers", "Laptops", "Tablets"] },
            { group: "Peripherals", items: ["Monitors", "Keyboards", "Mice", "Printers", "Scanners", "Routers and modems"] },
            { group: "Servers", items: ["Servers"] },
            { group: "Storage Devices", items: ["Hard drives", "USB drives"] }
        ];

        items.forEach(section => {
            const optgroup = document.createElement("optgroup");
            optgroup.label = section.group;
            section.items.forEach(item => {
                const option = document.createElement("option");
                option.value = item.toLowerCase().replace(/\s+/g, "-");
                option.textContent = item;
                optgroup.appendChild(option);
            });
            subcategory.appendChild(optgroup);
        });
    } else if (category === "mobile") {
        const items = ["Cell phones and smartphones", "Tablets", "MP3 players"];
        items.forEach(item => {
            const option = document.createElement("option");
            option.value = item.toLowerCase().replace(/\s+/g, "-");
            option.textContent = item;
            subcategory.appendChild(option);
        });
    } else if (category === "entertainment") {
        const items = ["Televisions", "DVD and Blu-ray players", "Stereo systems", "Video game consoles"];
        items.forEach(item => {
            const option = document.createElement("option");
            option.value = item.toLowerCase().replace(/\s+/g, "-");
            option.textContent = item;
            subcategory.appendChild(option);
        });
    } else if (category === "appliances") {
        const items = ["Microwaves", "Toasters", "Blenders", "Vacuum cleaners", "Hair dryers"];
        items.forEach(item => {
            const option = document.createElement("option");
            option.value = item.toLowerCase().replace(/\s+/g, "-");
            option.textContent = item;
            subcategory.appendChild(option);
        });
    } else if (category === "other") {
        const items = ["Cables and cords", "Chargers", "Batteries (with appropriate handling)", "Cameras and digital cameras", "Office equipment (fax machines, copiers)"];
        items.forEach(item => {
            const option = document.createElement("option");
            option.value = item.toLowerCase().replace(/\s+/g, "-");
            option.textContent = item;
            subcategory.appendChild(option);
        });
    }
}