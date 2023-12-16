    fetchProfiles();

function fetchProfiles() {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayProfiles(data.results))
        .catch(err => console.error(err));
}

function displayProfiles(profiles) {
    const suggestionsColumn = document.querySelector('.suggestions-column');
    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.innerHTML = `
            <img src="${profile.picture.medium}" alt="${profile.name.first}">
            <p>${profile.name.first} ${profile.name.last}</p>
            <p>${profile.location.city}</p>
        `;
        suggestionsColumn.appendChild(profileDiv);
    });
}
