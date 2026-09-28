document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@niet\.co\.in$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid NIET email ending with @niet.co.in");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentCourse", course);
    localStorage.setItem("studentFeedback", feedback);

    window.location.href = "feedback.html";
});

