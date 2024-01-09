document.addEventListener("DOMContentLoaded", function () {
    const questionContainers = document.querySelectorAll('.question-container');

    questionContainers.forEach(container => {
        const question = container.querySelector(".question");
        const answer = container.querySelector(".answer");
        
        question.addEventListener("click", function () {
            container.classList.toggle("active");
          });
        });
});

document.addEventListener('DOMContentLoaded', function() {
  const homeButton = document.getElementById('homeButton');

  homeButton.addEventListener('click', function() {
      // Redirect to the home page URL
      window.location.href = 'index.html';
      
  });
});