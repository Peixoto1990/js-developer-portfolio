
async function updateProfileInfo(profileData) {
    const data = await profileData;
    const profileElements = {
        photo: document.getElementById("profile.photo"),
        name: document.getElementById("profile.name"),
        job: document.getElementById("profile.job"),
        location: document.getElementById("profile.location"),
        phone: document.getElementById("profile.phone"),
        email: document.getElementById("profile.email")
    }
    profileElements.photo.src = data.photo;
    profileElements.photo.alt = data.name;
    profileElements.name.textContent = data.name;
    profileElements.job.textContent = data.job;
    profileElements.location.textContent = data.location;
    profileElements.phone.textContent = data.phone;
    profileElements.phone.href = `tel:${data.phone}`;
    profileElements.email.textContent = data.email;
    profileElements.email.href = `mailto:${data.email}`;
}

async function updateSoftSkills(profileData) {
    const data = await profileData.skills.softSkills;
    const dataLIElements = data.map((skill) => `<li>${skill}</li>`).join("");
    const listSkills = document.getElementById("profile.skills.softSkills");
    listSkills.innerHTML = dataLIElements;
}

async function updateHardSkills(profileData) {
    const data = await profileData.skills.hardSkills;
    const dataLIElements = data.map((skill) => `<li><img src=${skill.logo} alt=${skill.name} title=${skill.name}></li>`).join("");
    const listSkills = document.getElementById("profile.skills.hardSkills");
    listSkills.innerHTML = dataLIElements;
}

async function updateProfileLanguages(profileData) {
    const data = await profileData;
    const dataLIElements = data.map((language) => `<li>${language}</li>`).join("");
    const listLanguages = document.getElementById("profile.languages");
    listLanguages.innerHTML = dataLIElements;
}

(async () => {
    const profileData = await fechProfileData()
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateProfileLanguages(profileData);
})()