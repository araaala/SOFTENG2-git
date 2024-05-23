document.querySelectorAll('.activity').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});

document.querySelectorAll('.city').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});

document.getElementById('tripForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const selectedActivities = Array.from(document.querySelectorAll('.activity.selected')).map(activity => activity.value);
    const selectedCities = Array.from(document.querySelectorAll('.city.selected')).map(city => city.value);

    fetch('/send-itinerary', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            startDate: startDate,
            endDate: endDate,
            activities: selectedActivities,
            cities: selectedCities
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Itinerary sent successfully!');
        } else {
            alert('Failed to send itinerary.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while sending the itinerary.');
    });
});
