document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to the server

    // Display success message
    document.getElementById("successMessage").classList.remove("hidden");

    // Optionally clear form fields
    event.target.reset();
});
