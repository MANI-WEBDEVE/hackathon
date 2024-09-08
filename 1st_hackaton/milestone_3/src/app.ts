document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById(
    "toggleSkills"
  ) as HTMLButtonElement;
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
  const addreasInput = document.getElementById(
    "addreasInput"
  ) as HTMLInputElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const generateButton = document.querySelector(".btnRe") as HTMLButtonElement;

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
  console.log(skillsSection);

  generateButton.addEventListener("click", () => {
    resumeName.textContent = fullNameInput.value;

    proTag.textContent = professionalTag.value;

    resumeAddreas.childNodes[1].textContent = addreasInput.value;

    resumeEmail.textContent = emailInput.value;

    resumePhone.childNodes[1].textContent = phoneNumberInput.value;

    const file = imageInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        resumeImage.src = reader.result as string;
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
