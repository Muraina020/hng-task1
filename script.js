document.addEventListener("DOMContentLoaded", function () {
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Get the current date and time
    const currentDate = new Date();
    const dayOfTheWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = currentDate.toISOString().split('T')[1].slice(0, 8);

    // Update the elements with the current data
    slackNameElement.textContent = "Muraina Boluwatife"; // Replace with your actual Slack name
    dayOfTheWeekElement.textContent = dayOfTheWeek;
    utcTimeElement.textContent = utcTime;
});
