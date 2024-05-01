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

    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const selectedActivities = Array.from(document.querySelectorAll('.activity.selected')).map(activity => activity.value);
    const selectedCities = Array.from(document.querySelectorAll('.city.selected')).map(city => city.value);

    const duration = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    const nights = duration - 1;

    document.getElementById('tripDuration').textContent = `You will be traveling for ${duration} days and ${nights} nights. 
    Your selected activities: ${selectedActivities.join(', ')}. 
    Cities you are planning to visit: ${selectedCities.join(', ')}.`;
    document.getElementById('result').style.display = 'block';

    
});
