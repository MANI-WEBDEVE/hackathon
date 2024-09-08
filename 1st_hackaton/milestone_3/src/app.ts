document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById(
    "toggleSkills"
  ) as HTMLButtonElement;
  // Get form elements
  const skillsSection = document.getElementById("skillSection") as HTMLElement;
  const fullNameInput = document.getElementById("fullName") as HTMLInputElement;
  const professionalTag = document.getElementById(
    "professionalTag"
  ) as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneNumberInput = document.getElementById(
    "phoneNumber"
  ) as HTMLInputElement;
  const imageInput = document.getElementById("image") as HTMLInputElement;
  const profileSummaryInput = document.getElementById(
    "profileSummary"
  ) as HTMLTextAreaElement;
  const educationInput = document.getElementById(
    "education"
  ) as HTMLTextAreaElement;
  const addreasInput = document.getElementById("addreasInput") as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const generateButton = document.querySelector(".btnRe") as HTMLButtonElement;

  // Get resume elements
  const resumeName = document.querySelector("header h1") as HTMLElement;
  const proTag = document.querySelector("header p") as HTMLElement;
  const resumeEmail = document.querySelector(".email a") as HTMLElement;
  const resumePhone = document.querySelector(".phoneNumber") as HTMLElement;
  const resumeImage = document.querySelector(".img img") as HTMLImageElement;
  const resumeAddreas = document.querySelector(".addreashome") as HTMLElement;
  const resumeProfileSummary = document.querySelector(
    ".profileup"
  ) as HTMLElement;
  const resumeEducation = document.querySelector(
    ".education ul"
  ) as HTMLElement;
  const resumeSkills = document.querySelector(".skill") as HTMLElement;

  console.log(resumeSkills);
  console.log(skillsSection)

  // Function to update the resume dynamically
  generateButton.addEventListener("click", () => {
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
    const file = imageInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        resumeImage.src = reader.result as string;
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
    } else {
      skillsSection.classList.add("hidden");
      toggleButton.textContent = "View Skills";
    }
  });
});
