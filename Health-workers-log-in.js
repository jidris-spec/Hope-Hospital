
document.addEventListener('DOMContentLoaded', function() {
    // Home button click event
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', function() {
        // Redirect to the home page URL
        window.location.href = 'index.html';
    });

    // Forget button click event
    const forgetButton = document.getElementById('passwordLink');
    forgetButton.addEventListener('click', function() {
        // Redirect to the forget page URL
        window.location.href = 'forget.html';
    });

    // Form submission handling
    var form = document.querySelector(".container form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission

        // Get form values
        var emailValue = document.getElementById("email").value;
        var passwordValue = document.getElementById("password").value;

        // Create an object to store form data
        var workersData = {
            email: emailValue,
            password: passwordValue,
        };

        // Convert the form data to a JSON string
        var workersDataJSON = JSON.stringify(workersData);

        // Store the form data in localStorage
        localStorage.setItem("workersData", workersDataJSON);

        // Display a message or perform any other actions
        alert("Form data saved to local storage!");
    });
});

