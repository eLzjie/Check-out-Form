
// func for validating address
document.getElementById('addressForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var form = document.getElementById('addressForm');
    if (form.checkValidity()) {
        window.location.href = form.action;
    } else {
        form.reportValidity();
    }
});

// clickable dic of radiu buttons
function selectRadio(radioId) {
    var radio = document.getElementById(radioId);
    radio.checked = true;
}
