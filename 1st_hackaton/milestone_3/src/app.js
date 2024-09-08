document.addEventListener("DOMContentLoaded", () => {
    // const toggleButton = document.getElementById(
    //   "toggleSkills"
    // ) as HTMLButtonElement;
    const skillsSection = document.getElementById("skillSection");
    const fullNameInput = document.getElementById("fullName");
    const professionalTag = document.getElementById("professionalTag");
    const emailInput = document.getElementById("email");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const imageInput = document.getElementById("image");
    const profileSummaryInput = document.getElementById("profileSummary");
    const educationInput = document.getElementById("education");
    const addreasInput = document.getElementById("addreasInput");
    const skillsInput = document.getElementById("skills");
    const generateButton = document.querySelector(".btnRe");
    const resumeName = document.querySelector("header h1");
    const proTag = document.querySelector("header p");
    const resumeEmail = document.querySelector(".email a");
    const resumePhone = document.querySelector(".phoneNumber");
    const resumeImage = document.querySelector(".img img");
    const resumeAddreas = document.querySelector(".addreashome");
    const resumeProfileSummary = document.querySelector(".profileup");
    const resumeEducation = document.querySelector(".education ul");
    const resumeSkills = document.querySelector(".skill");
    console.log(resumeSkills);
    console.log(skillsSection);
    generateButton.disabled = true;
    // Function to check if all inputs are filled
    function checkInputs() {
        if (fullNameInput.value.trim() !== '' &&
            emailInput.value.trim() !== '' &&
            phoneNumberInput.value.trim() !== '' &&
            profileSummaryInput.value.trim() !== '' &&
            educationInput.value.trim() !== '' &&
            skillsInput.value.trim() !== '') {
            generateButton.disabled = false; // Enable the button if all fields are filled
        }
        else {
            generateButton.disabled = true; // Keep it disabled if any field is empty
        }
    }
    // Add event listeners for each input field
    fullNameInput.addEventListener('input', checkInputs);
    emailInput.addEventListener('input', checkInputs);
    phoneNumberInput.addEventListener('input', checkInputs);
    profileSummaryInput.addEventListener('input', checkInputs);
    educationInput.addEventListener('input', checkInputs);
    skillsInput.addEventListener('input', checkInputs);
    generateButton.addEventListener("click", () => {
        var _a;
        resumeName.textContent = fullNameInput.value;
        proTag.textContent = professionalTag.value;
        resumeAddreas.childNodes[1].textContent = addreasInput.value;
        resumeEmail.textContent = emailInput.value;
        resumePhone.childNodes[1].textContent = phoneNumberInput.value;
        const file = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                resumeImage.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
        resumeProfileSummary.textContent = profileSummaryInput.value;
        resumeEducation.innerHTML = "";
        const educationList = educationInput.value.split("\n");
        educationList.forEach((education) => {
            const li = document.createElement("li");
            li.textContent = education;
            resumeEducation.appendChild(li);
        });
        resumeSkills.innerHTML = "";
        const skillsList = skillsInput.value
            .split(/[, ]+/)
            .map((skill) => skill.trim())
            .filter((skill) => skill);
        console.log(skillsList);
        skillsList.forEach((skill) => {
            const li = document.createElement("li");
            li.textContent = skill;
            resumeSkills.appendChild(li);
        });
    });
    // toggleButton.addEventListener("click", () => {
    //   if (skillsSection.classList.contains("hidden")) {
    //     skillsSection.classList.remove("hidden");
    //     toggleButton.textContent = "Hide Skills";
    //   } else {
    //     skillsSection.classList.add("hidden");
    //     toggleButton.textContent = "View Skills";
    //   }
    // });
});
