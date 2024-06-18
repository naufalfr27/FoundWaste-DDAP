document.addEventListener("DOMContentLoaded", function() {
    // Read More/Less functionality
    const readMoreBtn = document.getElementById("read-more-btn-1");
    const readLessBtn = document.getElementById("read-less-btn-1");
    const additionalContent = document.getElementById("additional-content");

    if (readMoreBtn && readLessBtn && additionalContent) {
        readMoreBtn.addEventListener("click", function() {
            additionalContent.style.display = "block";
            readMoreBtn.style.display = "none";
            readLessBtn.style.display = "block";
        });

        readLessBtn.addEventListener("click", function() {
            additionalContent.style.display = "none";
            readMoreBtn.style.display = "block";
            readLessBtn.style.display = "none";
        });
    }

    // Chevron functionality
     
    const sdgsRow2 = document.querySelector('.sdgs .row2');
    const sdgsLeftChevron = document.querySelector('.sdgs .toggle-slider.left i');
    const sdgsRightChevron = document.querySelector('.sdgs .toggle-slider.right i');

    const sdgsScrollAmount = 500; // Adjust the scroll amount as needed

    sdgsLeftChevron.addEventListener('click', () => {
        sdgsRow2.scrollBy({
            left: -sdgsScrollAmount,
            behavior: 'smooth'
        });
    });

    sdgsRightChevron.addEventListener('click', () => {
        sdgsRow2.scrollBy({
            left: sdgsScrollAmount,
            behavior: 'smooth'
        });
    });

    // Edukasi Section Scroll Logic
    
        const edukasiRow2 = document.querySelector('.edukasi .row2');
        const edukasiLeftChevron = document.querySelector('.edukasi .toggle-slider .bx-chevron-left-circle');
        const edukasiRightChevron = document.querySelector('.edukasi .toggle-slider .bx-chevron-right-circle');
    
        const edukasiScrollAmount = 300; // Adjust the scroll amount as needed
    
        edukasiLeftChevron.addEventListener('click', () => {
            edukasiRow2.scrollBy({
                left: -edukasiScrollAmount,
                behavior: 'smooth'
            });
        });
    
        edukasiRightChevron.addEventListener('click', () => {
            edukasiRow2.scrollBy({
                left: edukasiScrollAmount,
                behavior: 'smooth'
            });
        });
    });
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });

    