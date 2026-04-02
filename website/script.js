
// Source - https://stackoverflow.com/a/57421321
// Posted by JSON C11
// Retrieved 2026-03-30, License - CC BY-SA 4.0
let internships = [];
let locations = [];
let fields = [];
const url = "https://api.airtable.com/v0/appQ6iBaQfbnA1zbx/Internships.doc";

const options = {
  headers: {
    Authorization: "Bearer pat7JVX6AU2i6kEtS.adc837c224ebc03d39fb78436b48ef38e66dd9241346ff5e3f60d157ebcc1f87"
  }
};

const finished = fetch(url, options)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    internships = data.records.filter(item => item.fields && item.fields.Name);
    fields = data.records[0].fields ? Object.keys(data.records[0].fields) : [];
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
    const p = document.createElement('p');
    p.innerHTML = `<strong>${field}:</strong> ${formatField(record.fields[field])}`;
    if(field === 'Link') {
      p.innerHTML = ` <strong>${field}:</strong><a href="${record.fields['Link']}" target="_blank">${record.fields['Link']}</a>`;
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

    const filtered = internships.filter(record => {
      const fields = record.fields || {};
      const location = (fields.Location || '').toString().toLowerCase();
      const difficulty = (fields.Difficulty || '').toString().toLowerCase();

      const locationMatches = locationValue === '' || location.includes(locationValue);
      const difficultyMatches = difficultyValue === '' || difficulty.includes(difficultyValue);

      return locationMatches && difficultyMatches;
    });

    updateInternshipList(filtered);
  } catch (error) {
    console.error('Error filtering internships:', error);
  }
}

function clearFilters() {
  document.getElementById('location-filter').value = '';
  document.getElementById('difficulty-filter').value = '';
  updateInternshipList(internships);
}


