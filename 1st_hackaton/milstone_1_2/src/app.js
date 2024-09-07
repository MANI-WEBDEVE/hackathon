var toggleButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.classList.add('hidden');
        toggleButton.textContent = "View Skills";
    }
});
