var skillsSection = document.getElementById('skills');
var toggleSkillsButton = document.getElementById('toggle-skills');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
