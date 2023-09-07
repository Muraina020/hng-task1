document.addEventListener("DOMContentLoaded", function () {
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Get the current date and time in milliseconds since the Unix epoch
    const currentTimeMillis = new Date().getTime();
    const dayOfTheWeek = new Date(currentTimeMillis).toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = currentTimeMillis;

    // Update the elements with the current data
    slackNameElement.textContent = "Muraina Boluwatife"; 
    dayOfTheWeekElement.textContent = dayOfTheWeek;
    utcTimeElement.textContent = utcTime + " ms";
});
