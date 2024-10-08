document.addEventListener("DOMContentLoaded", () => {
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
    const resumeForm = document.querySelector(".resumeForm");
    const resumeDisplay = document.querySelector(".resume");
    const editButton = document.querySelector(".btnEdit");
    editButton.style.display = "none"; // Hidden initially
    editButton.style.marginBottom = "12px";
    generateButton.disabled = true;
    // Function to check if all inputs are filled
    function checkInputs() {
        if (fullNameInput.value.trim() !== "" &&
            emailInput.value.trim() !== "" &&
            phoneNumberInput.value.trim() !== "" &&
            profileSummaryInput.value.trim() !== "" &&
            educationInput.value.trim() !== "" &&
            skillsInput.value.trim() !== "") {
            generateButton.disabled = false;
        }
        else {
            generateButton.disabled = true;
        }
    }
    // Add event listeners for each input field
    fullNameInput.addEventListener("input", checkInputs);
    emailInput.addEventListener("input", checkInputs);
    phoneNumberInput.addEventListener("input", checkInputs);
    profileSummaryInput.addEventListener("input", checkInputs);
    educationInput.addEventListener("input", checkInputs);
    skillsInput.addEventListener("input", checkInputs);
    generateButton.addEventListener("click", () => {
        var _a;
        resumeForm.style.display = 'none';
        resumeDisplay.style.display = 'block';
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
        generateButton.style.display = "none";
        editButton.style.display = "block";
    });
    editButton.addEventListener("click", () => {
        resumeForm.style.display = 'block';
        resumeDisplay.style.display = 'none';
        editButton.style.display = "none";
        editButton.style.flex = "0";
        editButton.style.marginBottom = "12px";
        generateButton.style.display = "block";
        generateButton.style.marginBottom = "12px";
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
