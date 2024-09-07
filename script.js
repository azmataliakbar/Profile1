// TypeScript code for toggling visibility of sections
// Toggle Personal Information Section
var personalSection = document.querySelector('.personal-info');
var personalToggleBtn = document.getElementById('toggle-personal-btn');
personalToggleBtn.addEventListener('click', function () {
    if (personalSection.style.display === 'none') {
        personalSection.style.display = 'block';
        personalToggleBtn.textContent = 'Hide Personal Info';
    }
    else {
        personalSection.style.display = 'none';
        personalToggleBtn.textContent = 'Show Personal Info';
    }
});
// Toggle Personal Information Section
var educationSection = document.querySelector('.education');
var educationToggleBtn = document.getElementById('toggle-education-btn');
educationToggleBtn.addEventListener('click', function () {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        educationToggleBtn.textContent = 'Hide Education';
    }
    else {
        educationSection.style.display = 'none';
        educationToggleBtn.textContent = 'Show Education Info';
    }
});
// Toggle Skills Section
var skillsSection = document.getElementById('skills-section');
var skillsToggleBtn = document.getElementById('toggle-skills-btn');
skillsToggleBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        skillsToggleBtn.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        skillsToggleBtn.textContent = 'Show Skills';
    }
});
// Toggle Work Experience Section
var experienceSection = document.getElementById('experience-section');
var experienceToggleBtn = document.getElementById('toggle-experience-btn');
experienceToggleBtn.addEventListener('click', function () {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
        experienceToggleBtn.textContent = 'Hide Work Experience';
    }
    else {
        experienceSection.style.display = 'none';
        experienceToggleBtn.textContent = 'Show Work Experience';
    }
});
