// TypeScript code for toggling visibility of sections

// Toggle Personal Information Section
const personalSection = document.querySelector('.personal-info') as HTMLElement;
const personalToggleBtn = document.getElementById('toggle-personal-btn') as HTMLButtonElement;

personalToggleBtn.addEventListener('click', () => {
  if (personalSection.style.display === 'none') {
    personalSection.style.display = 'block';
    personalToggleBtn.textContent = 'Hide Personal Info';
  } else {
    personalSection.style.display = 'none';
    personalToggleBtn.textContent = 'Show Personal Info';
  }
});

// Toggle Personal Information Section
const educationSection = document.querySelector('.education') as HTMLElement;
const educationToggleBtn = document.getElementById('toggle-education-btn') as HTMLButtonElement;

educationToggleBtn.addEventListener('click', () => {
  if (educationSection.style.display === 'none') {
    educationSection.style.display = 'block';
    educationToggleBtn.textContent = 'Hide Education';
  } else {
    educationSection.style.display = 'none';
    educationToggleBtn.textContent = 'Show Education Info';
  }
});

// Toggle Skills Section
const skillsSection = document.getElementById('skills-section') as HTMLElement;
const skillsToggleBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;

skillsToggleBtn.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    skillsToggleBtn.textContent = 'Hide Skills';
  } else {
    skillsSection.style.display = 'none';
    skillsToggleBtn.textContent = 'Show Skills';
  }
});

// Toggle Work Experience Section
const experienceSection = document.getElementById('experience-section') as HTMLElement;
const experienceToggleBtn = document.getElementById('toggle-experience-btn') as HTMLButtonElement;

experienceToggleBtn.addEventListener('click', () => {
  if (experienceSection.style.display === 'none') {
    experienceSection.style.display = 'block';
    experienceToggleBtn.textContent = 'Hide Work Experience';
  } else {
    experienceSection.style.display = 'none';
    experienceToggleBtn.textContent = 'Show Work Experience';
  }
});




