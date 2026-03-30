
// Source - https://stackoverflow.com/a/57421321
// Posted by JSON C11
// Retrieved 2026-03-30, License - CC BY-SA 4.0

const url = "https://api.airtable.com/v0/appQ6iBaQfbnA1zbx/Internships.doc";

const options = {
  headers: {
    Authorization: "Bearer pat7JVX6AU2i6kEtS.adc837c224ebc03d39fb78436b48ef38e66dd9241346ff5e3f60d157ebcc1f87"
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => {
    console.log(data);
    const internshipList = document.getElementById('internship-list');
    data.records.forEach(internship => {
        const internshipDiv = document.createElement('div');
        internshipDiv.className = 'Internship';
        internshipDiv.innerHTML = `
            <h2>${internship.fields.Name}</h2>
            <p><strong>Type:</strong> ${internship.fields.Type}</p>
            <p><strong>Location:</strong> ${internship.fields.Location}</p>
            <p><strong>Deadline:</strong> ${internship.fields.Deadline}</p>
            <p><strong>Tags:</strong> ${internship.fields["Field"]}</p>
            <p><strong>Grade Eligibility:</strong> ${internship.fields["Grade Level"]}</p>
            <p><strong>Difficulty:</strong> ${internship.fields.Difficulty}</p>
            <p><strong>Application Link:</strong> <a href="${internship.fields.ApplicationLink}" target="_blank">Apply Here</a></p>
            <p><strong>Short Description:</strong> ${internship.fields["Short Description"]}</p>
            <p><strong>Closing Soon:</strong> ${internship.fields["Closing Soon?"]}</p>
        `;
        internshipList.appendChild(internshipDiv);
    });
  });
//<p><strong>Tags:</strong> ${internship.fields.Field.join(', ')}</p>