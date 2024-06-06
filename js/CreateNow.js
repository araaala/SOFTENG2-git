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

    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const selectedActivities = Array.from(document.querySelectorAll('.activity.selected')).map(activity => activity.value);
    const selectedCities = Array.from(document.querySelectorAll('.city.selected')).map(city => city.value);

    if (startDate && endDate && selectedActivities.length && selectedCities.length) {
        const params = new URLSearchParams();
        params.append('startDate', startDate);
        params.append('endDate', endDate);
        selectedActivities.forEach(activity => params.append('activities', activity));
        selectedCities.forEach(city => params.append('cities', city));

        window.location.href = 'Itinerary.html?' + params.toString();
    } else {
        alert('Please fill in all required fields and select at least one activity and city.');
    }
});
