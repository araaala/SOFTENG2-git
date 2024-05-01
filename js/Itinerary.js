// Function to fetch itinerary data from the database and populate the itinerary section
function populateItinerary() {
    // Make an AJAX request to fetch itinerary data from the database
    // Example AJAX request using Fetch API:
    fetch('api/itinerary')
        .then(response => response.json())
        .then(data => {
            // Populate the itinerary list with fetched data
            const itineraryList = document.getElementById('itineraryList');
            itineraryList.innerHTML = ''; // Clear previous items
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.description;
                itineraryList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching itinerary data:', error));
}

// Function to handle editing the itinerary
function editItinerary() {
    // Allow user to edit the itinerary, e.g., add or remove activities
    // Example functionality:
    const editButton = document.getElementById('editItineraryBtn');
    editButton.addEventListener('click', () => {
        // Implement your editing functionality here
        console.log('Editing itinerary...');
    });
}

// Function to retrieve and display selected travel details from the previous page
function displayTravelDetails() {
    // Retrieve selected travel details from the previous page using query parameters, session storage, or cookies
    // Example functionality:
    const params = new URLSearchParams(window.location.search);
    const startDate = params.get('startDate');
    const endDate = params.get('endDate');
    const activities = params.getAll('activity');
    const cities = params.getAll('city');

    // Display retrieved data on the itinerary page
    document.getElementById('startDate').textContent = 'Start Date: ' + startDate;
    document.getElementById('endDate').textContent = 'End Date: ' + endDate;

    const activitiesList = document.getElementById('activitiesList');
    activities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = activity;
        activitiesList.appendChild(listItem);
    });

    const citiesList = document.getElementById('citiesList');
    cities.forEach(city => {
        const listItem = document.createElement('li');
        listItem.textContent = city;
        citiesList.appendChild(listItem);
    });
}

// Function to initialize the itinerary page
function initItineraryPage() {
    populateItinerary(); // Populate itinerary section with data from the database
    editItinerary(); // Initialize editing functionality
    displayTravelDetails(); // Display selected travel details from the previous page
}

// Call the initItineraryPage function when the page is loaded
document.addEventListener('DOMContentLoaded', initItineraryPage);
