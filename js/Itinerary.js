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

function initItineraryPage() {
    displayTravelDetails();
    populateItinerary(); 
}

function populateItinerary() {
    // Dummy itinerary data (replace with actual data fetched from the database)
    const itineraryData = [
        { day: 'Day 1', morning: 'Breakfast at Restaurant A', afternoon: 'Visit Attraction X' },
        { day: 'Day 2', morning: 'Lunch at Restaurant B', afternoon: 'Explore Attraction Y' }
        // Add more itinerary data as needed
    ];

    // Select the itinerary list element
    const itineraryList = document.getElementById('itineraryList');

    // Clear previous items
    itineraryList.innerHTML = '';

    // Iterate over the itinerary data and create list items for each day
    itineraryData.forEach(item => {
        const listItem = document.createElement('li');
        // Construct the itinerary item string
        const itineraryItem = `${item.day}: Morning - ${item.morning}, Afternoon - ${item.afternoon}`;
        listItem.textContent = itineraryItem;
        // Append the list item to the itinerary list
        itineraryList.appendChild(listItem);
    });
}

// Call the populateItinerary function when the page is loaded
document.addEventListener('DOMContentLoaded', initItineraryPage);
