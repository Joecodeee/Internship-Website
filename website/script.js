async function getJsonData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parses the JSON string into a JS object
        return data;
    } catch (error) {
        console.error("Error fetching or parsing JSON:", error);
    }
}
let internships = getJsonData('temp_data/database.json');
internships.then(data => {
    const internshipList = document.getElementById('internship-list');
    data.Internships.forEach(internship => {
        const internshipDiv = document.createElement('div');
        internshipDiv.className = 'internship';
        internshipDiv.innerHTML = `
            <h2>${internship.Type}</h2>
            <p><strong>Location:</strong> ${internship.Location}</p>
            <p><strong>Deadline:</strong> ${internship.Deadline}</p>
            <p><strong>Grade Eligibility:</strong> ${internship.GradeEligibility}</p>
            <p><strong>Difficulty:</strong> ${internship.Difficulty}</p>
            <p><strong>Tags:</strong> ${internship.Tags.join(', ')}</p>
            <p><strong>Application Link:</strong> <a href="${internship.ApplicationLink}" target="_blank">Apply Here</a></p>
            <p><strong>Short Description:</strong> ${internship.ShortDescription}</p>
        `;
        internshipList.appendChild(internshipDiv);
    });
});