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

function updateHardSkills(profileData){
    const hardSkills = document.getElementById("hardSkills");

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>  

        `<li class="tools">
                    <div class="tool">
                        <img src="${skill.logo}">
                       
                        <div class="info">
                            <span id="toolName">${skill.name}</span>
                            <span id="level">${skill.level}</span>
                        </div>

                    </div>
        </li>`).join('');
}

function updateLanguages(profileData){
    const languages = document.getElementById("languages")
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById("portfolio")
    portfolio.innerHTML = profileData.portfolio.map(portfolio => 

        `<li>
            <span class="portfolioTitle">${portfolio.name}</span>
            <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
         </li>`).join('');
}

function updateExperiences(profileData){
    const experiences = document.getElementById("experiences")
    experiences.innerHTML = profileData.professionalExperience.map(experience => 
        
        `<li>
            <h3>${experience.name}</h3>
            <span class="period">${experience.period}</span>
            <span>${experience.description}</span>
        </li>`).join('');
}


(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateExperiences(profileData);
})()