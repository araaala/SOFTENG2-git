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

    const queryParams = new URLSearchParams({
        email: email,
        startDate: startDate,
        endDate: endDate,
        activities: selectedActivities.join(','),
        cities: selectedCities.join(',')
    });

    window.location.href = 'Itinerary.html?' + queryParams.toString();
});
