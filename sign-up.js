
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    // Get form values
    var patientNameValue = document.getElementById("patientName").value;
    var emailValue = document.getElementById("email").value;
    var phoneValue = document.getElementById("phone").value;
    var appointmentDateValue = document.getElementById("appointmentDate").value;
    var departmentValue = document.getElementById("department").value; // Corrected variable name
    
    // Create an object to store form data
    var formData = {
        patientName: patientNameValue,
        email: emailValue,
        phone: phoneValue,
        appointmentDate: appointmentDateValue,
        department: departmentValue, // Corrected property name
    };
    
    // Convert the form data to a JSON string
    var formDataJSON = JSON.stringify(formData);
    
    // Store the form data in localStorage
    localStorage.setItem("formData", formDataJSON);
    
    // Display a message or perform any other actions
    alert("Form data saved to local storage!");
});


document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('backButton');

    homeButton.addEventListener('click', function() {
        // Redirect to the home page URL
        window.location.href = 'index.html';
        
    });
});