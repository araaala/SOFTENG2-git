function displayTravelDetails() {
    const params = new URLSearchParams(window.location.search);
    const startDate = params.get('startDate');
    const endDate = params.get('endDate');
    let selectedActivities = params.getAll('activities').map(activity => activity.toLowerCase());
    let selectedCities = params.getAll('cities');

    document.getElementById('startDate').textContent = 'Start Date: ' + startDate;
    document.getElementById('endDate').textContent = 'End Date: ' + endDate;

    if (selectedActivities.length > 0) {
        document.getElementById('selectedActivities').textContent = 'Your Preferences: ' + selectedActivities.join(',  ') + '.';
    }

    if (selectedCities.length > 0) {
        document.getElementById('selectedCities').textContent = 'Selected Cities: ' + selectedCities.join(', ') + '.';
    }
}

let itineraryData = [
    { day: 'DAY ONE', morning: 'Check in at Hotel', afternoon: 'Explore the area', link: 'https://example.com'},
    { day: 'DAY TWO', morning: 'Breakfast at ...', afternoon: 'Have fun at...', link: 'https://example.com' },
    { day: 'DAY THREE', morning: 'Visit and discover the heritage of...', afternoon: 'Dinner at,,,', link: 'https://example.com'}
];

function populateItinerary() {
    const itineraryList = document.getElementById('itineraryList');
    itineraryList.innerHTML = '';

    itineraryData.forEach((item, index) => {
        const listItem = document.createElement('li');
        let itineraryItem = `${item.day}: ${item.morning},  ${item.afternoon}`;
        if (item.link) {
            const linkElement = document.createElement('a');
            linkElement.href = item.link;
            linkElement.textContent = 'Click for details';
            itineraryItem += ` (${linkElement.outerHTML})`;
        }
        listItem.innerHTML = itineraryItem;
        itineraryList.appendChild(listItem);
    });
}

function initItineraryPage() {
    displayTravelDetails();
    populateItinerary();
    setupEditItinerary();
}

function setupEditItinerary() {
    populateDaySelect();

    document.getElementById('addActivityButton').addEventListener('click', () => {
        const day = document.getElementById('daySelect').value;
        const timeOfDay = document.getElementById('timeOfDay').value;
        const newActivity = document.getElementById('newActivity').value;

        if (newActivity) {
            const dayIndex = itineraryData.findIndex(item => item.day === day);
            if (dayIndex !== -1) {
                itineraryData[dayIndex][timeOfDay] = newActivity;
                populateItinerary();
            }
        }
    });

    document.getElementById('removeActivityButton').addEventListener('click', () => {
        const day = document.getElementById('daySelect').value;
        const timeOfDay = document.getElementById('timeOfDay').value;

        const dayIndex = itineraryData.findIndex(item => item.day === day);
        if (dayIndex !== -1) {
            itineraryData[dayIndex][timeOfDay] = '';
            populateItinerary();
        }
    });
}

function populateDaySelect() {
    const daySelect = document.getElementById('daySelect');
    daySelect.innerHTML = '';
    itineraryData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.day;
        option.textContent = item.day;
        daySelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', initItineraryPage);
