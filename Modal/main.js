// Get modal element
var modal = document.getElementById('simpleModal');
// Get the open button
var modalBtn = document.getElementById('modalBtn');
// Get the close button
var closeBtn = document.getElementById('closeBtn');
// Listen for click
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClose);

// Function to open modal
function openModal(){
    // console.log(123)
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    // console.log(345);
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClose(e){
    console.log(e.target);
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

