const toggleButton = document.getElementById('toggleSkills');
const skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', () => {
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.classList.add('hidden');
        toggleButton.textContent = "View Skills";
    }
});
export {};
