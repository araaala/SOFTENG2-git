function displayTravelDetails() {
    const params = new URLSearchParams(window.location.search);
    const startDate = params.get('startDate');
    const endDate = params.get('endDate');
    const selectedActivities = params.getAll('activities').map(activity => activity.toLowerCase());
    const selectedCities = params.getAll('cities');

    if (startDate) {
        document.getElementById('startDate').textContent = 'Start Date: ' + startDate;
    }

    if (endDate) {
        document.getElementById('endDate').textContent = 'End Date: ' + endDate;
    }

    if (selectedActivities.length > 0) {
        document.getElementById('selectedActivities').textContent = 'Your Preferences: ' + selectedActivities.join(', ') + '.';
    }

    if (selectedCities.length > 0) {
        document.getElementById('selectedCities').textContent = 'Selected Cities: ' + selectedCities.join(', ') + '.';
    }
}

function populateItinerary() {
    const params = new URLSearchParams(window.location.search);
    const selectedActivities = params.getAll('activities');
    const selectedCities = params.getAll('cities');
    
    // Dummy data to simulate the itinerary generation based on selections
    const itineraryData = [
        { day: 'Day 1', details: `Check in at a hotel in ${selectedCities[0]} and enjoy ${selectedActivities[0]}.` },
        { day: 'Day 2', details: `Experience ${selectedCities[1]} with ${selectedActivities[1]}.` },
        { day: 'Day 3', details: `Explore ${selectedCities[2]} by  ${selectedActivities[3]} ` }
    ];

    const itineraryList = document.getElementById('itineraryList');
    itineraryList.innerHTML = '';

    itineraryData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.day}: ${item.details}`;
        itineraryList.appendChild(listItem);
    });
}

function initItineraryPage() {
    displayTravelDetails();
    populateItinerary();
}

document.addEventListener('DOMContentLoaded', initItineraryPage);
