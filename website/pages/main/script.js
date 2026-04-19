
// Source - https://stackoverflow.com/a/57421321
// Posted by JSON C11
// Retrieved 2026-03-30, License - CC BY-SA 4.0
let internships = [];
let locations = new Map();
let fields = [];
const url = "https://api.airtable.com/v0/appQ6iBaQfbnA1zbx/Internships.doc";

const options = {
  headers: {
    Authorization: "Bearer patw8g71Fb0JeR1zI.5998de08f7b0f0939c416a59d7678a58b43db6e014a366e70efeac4ae5112610"
  }
};

const finished = fetch(url, options)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    internships = data.records.filter(item => item.fields && item.fields.Name); // Filter out records without fields or Name
    data.records.forEach(record => { // Collect unique locations for filter options
      if (record.fields.Location) {
        locations.set(record.fields.Location, true);
      }
    });
    fields = data.records[0].fields ? Object.keys(data.records[0].fields) : []; // Get field names from the first record, if available
    console.log(fields);
    updateInternshipList(internships);
  })
  .catch(error => {
    console.error('Failed to load internships:', error);
    const internshipList = document.getElementById('internship-list');
    internshipList.innerHTML = '<p>Unable to load internships. Please refresh.</p>';
  });

function formatField(value) {
  if (Array.isArray(value)) return value.join(', ');
  return value || 'N/A';
}

function createInternshipCard(record) {
  const divObj = document.createElement('div');
  divObj.className = 'Internship';
  divObj.appendChild(document.createElement('h1')).innerHTML = record.fields.Name;
  fields.forEach(field => {
    if(field === 'Name') return; // Skip the name field since it's already displayed
    let p = document.createElement('p');
    p.innerHTML = `<strong>${field}:</strong> ${formatField(record.fields[field])}`;
    if(field === 'Link') {
      p.innerHTML = ` <strong>${field}:</strong><a href="${record.fields['Link']}" target="_blank">${record.fields['Link']}</a>`;
    }
    if(field === 'Status (Automated)' && record.fields['Status (Automated)'] === 'Closing Soon') {
      p.className = 'closing-soon';
    }
    divObj.appendChild(p);
  });
  return divObj;
}

function updateInternshipList(list) {
  const internshipList = document.getElementById('internship-list');
  internshipList.innerHTML = '';

  if (list.length === 0) {
    internshipList.innerHTML = '<p>No internships match the selected filters.</p>';
    return;
  }

  list.forEach(record => {
    if(!record.fields || !record.fields.Name) return; // Skip records without fields or Name
    document.getElementById('internship-list').appendChild(createInternshipCard(record));
  });
}

async function filterInternships() {
  try {
    await finished; // ensure data loaded before filtering

    const locationValue = (document.getElementById('location-filter').value || '');
    const difficultyValue = (document.getElementById('difficulty-filter').value || '');
    const typeValue = (document.getElementById('type-filter').value || '').toLowerCase();

    const filtered = internships.filter(record => {
      const fields = record.fields || {};
      const location = (fields.Location || '').toString().toLowerCase();
      const difficulty = (fields.Difficulty || '').toString().toLowerCase();
      const type = (fields.Type || '').toString().toLowerCase();

      const locationMatches = locationValue === '' || location.includes(locationValue);
      const difficultyMatches = difficultyValue === '' || difficulty.includes(difficultyValue);
      const typeMatches = typeValue === '' || type.includes(typeValue);

      return locationMatches && difficultyMatches && typeMatches;
    });

    updateInternshipList(filtered);
  } catch (error) {
    console.error('Error filtering internships:', error);
  }
}

function clearFilters() {
  document.getElementById('location-filter').value = '';
  document.getElementById('type-filter').value = '';  
  document.getElementById('difficulty-filter').value = '';
  updateInternshipList(internships);
}


