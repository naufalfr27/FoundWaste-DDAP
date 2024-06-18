document.addEventListener("DOMContentLoaded", function() {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var readMoreButton = document.getElementById('read-more');
    readMoreButton.addEventListener('click', function() {
        var content = document.getElementById('additional-content');
        content.style.display = 'block'; // Show the content
        this.style.display = 'none'; // Hide the button
    });
});
var readMoreButton = document.getElementById('read-more2');
    readMoreButton.addEventListener('click', function() {
        var content = document.getElementById('additional-content2');
        content.style.display = 'block'; // Show the content
        this.style.display = 'none'; // Hide the button
    });
    var readMoreButton = document.getElementById('read-more3');
    readMoreButton.addEventListener('click', function() {
        var content = document.getElementById('additional-content3');
        content.style.display = 'block'; // Show the content
        this.style.display = 'none'; // Hide the button
    });
    var readMoreButton = document.getElementById('read-more4');
    readMoreButton.addEventListener('click', function() {
        var content = document.getElementById('additional-content4');
        content.style.display = 'block'; // Show the content
        this.style.display = 'none'; // Hide the button
    });   
    
        
    