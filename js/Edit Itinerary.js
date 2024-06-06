document.addEventListener('DOMContentLoaded', function() {
    // Retrieve existing itinerary data from URL parameters and populate form
    const params = new URLSearchParams(window.location.search);
    const itineraryData = JSON.parse(params.get('itinerary'));

    document.getElementById('day1').value = itineraryData[0].details;
    document.getElementById('day2').value = itineraryData[1].details;
    document.getElementById('day3').value = itineraryData[2].details;

    // Handle form submission
    document.getElementById('editForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve edited itinerary details
        const editedItinerary = [
            { day: 'Day 1', details: document.getElementById('day1').value },
            { day: 'Day 2', details: document.getElementById('day2').value },
            { day: 'Day 3', details: document.getElementById('day3').value }
        ];

        // Serialize edited itinerary data and redirect back to itinerary page with updated data
        const editedParams = new URLSearchParams();
        editedParams.append('itinerary', JSON.stringify(editedItinerary));
        const editedUrl = 'Itinerary.html?' + editedParams.toString();
        window.location.href = editedUrl;
    });
});
