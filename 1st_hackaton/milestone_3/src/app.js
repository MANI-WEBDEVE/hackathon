document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleSkills");
    // Get form elements
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
    // Get resume elements
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
    // Function to update the resume dynamically
    generateButton.addEventListener("click", () => {
        var _a;
        // Update name
        resumeName.textContent = fullNameInput.value;
        // Update professional tag
        proTag.textContent = professionalTag.value;
        // Update address
        resumeAddreas.childNodes[1].textContent = addreasInput.value;
        // Update email
        resumeEmail.textContent = emailInput.value;
        // Update phone number
        resumePhone.childNodes[1].textContent = phoneNumberInput.value;
        // Update image if an image is selected
        const file = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                resumeImage.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
        // Update profile summary
        resumeProfileSummary.textContent = profileSummaryInput.value;
        // Update education
        resumeEducation.innerHTML = ""; // Clear previous entries
        const educationList = educationInput.value.split("\n");
        educationList.forEach((education) => {
            const li = document.createElement("li");
            li.textContent = education;
            resumeEducation.appendChild(li);
        });
        // Update skills
        resumeSkills.innerHTML = "";
        // Split skills by either commas or spaces (handling both)
        const skillsList = skillsInput.value
            .split(/[, ]+/)
            .map((skill) => skill.trim())
            .filter((skill) => skill);
        // Debugging: Log the skillsList array to see the result
        console.log(skillsList);
        // Loop over the skills and add each as a list item
        skillsList.forEach((skill) => {
            const li = document.createElement("li");
            li.textContent = skill;
            resumeSkills.appendChild(li);
        });
    });
    toggleButton.addEventListener("click", () => {
        if (skillsSection.classList.contains("hidden")) {
            skillsSection.classList.remove("hidden");
            toggleButton.textContent = "Hide Skills";
        }
        else {
            skillsSection.classList.add("hidden");
            toggleButton.textContent = "View Skills";
        }
    });
});
