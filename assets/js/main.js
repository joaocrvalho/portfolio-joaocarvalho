function updateProfileInfo(profileData){
    const photo = document.getElementById("profile.photo");
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById("profile.name");
    name.innerText = profileData.name;

    const job = document.getElementById("profile.job");
    job.innerText = profileData.job;

    const location = document.getElementById("profile.location");
    location.innerText = profileData.location;

    const phone = document.getElementById("profile.phone");
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    const email = document.getElementById("profile.email");
    email.innerHTML = profileData.email;
    email.href = `malito:${profileData.email}`;
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById("softSkills");

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}



(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData)
})()