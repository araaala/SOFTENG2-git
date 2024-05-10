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
        { day: 'DAY ONE', morning: 'Check in at Hotel', afternoon: 'Explore the area', link: 'https://example.com'},
        { day: 'DAY TWO', morning: 'Breakfast at ...', afternoon: 'Have fun at...', link: 'https://example.com' },
        { day: 'DAY THREE', morning: 'Visit and discover the heritage of...', afternoon: 'Dinner at,,,', link: 'https://example.com'}
    ];

    // Select the itinerary list element
    const itineraryList = document.getElementById('itineraryList');

    // Clear previous items
    itineraryList.innerHTML = '';

    // Iterate over the itinerary data and create list items for each day
    itineraryData.forEach(item => {
        const listItem = document.createElement('li');
        // Construct the itinerary item string
        let itineraryItem = `${item.day}: ${item.morning},  ${item.afternoon}`;
        // Check if there's a link associated with this item
        if (item.link) {
            // If there's a link, create an anchor element and append it to the item string
            const linkElement = document.createElement('a');
            linkElement.href = item.link;
            linkElement.textContent = 'Click for details';
            // Append the link to the itinerary item
            itineraryItem += ` (${linkElement.outerHTML})`;
        }
        // Set the HTML content of the list item
        listItem.innerHTML = itineraryItem;
        // Append the list item to the itinerary list
        itineraryList.appendChild(listItem);
    });
}

// Call the populateItinerary function when the page is loaded
document.addEventListener('DOMContentLoaded', initItineraryPage);
