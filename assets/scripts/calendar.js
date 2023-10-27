function initCalBtn(name, description, startDate, startTime, endDate, endTime){
    const config = {
        name:name,
        description:description,
        startDate:startDate,
        startTime:startTime,
        endDate:endDate,
        endTime:endTime,
        timeZone:"Asia/Singapore",
        location:"Credit Agricole Booth @ SFF Expo Hall 2",
        availability:"busy",
        options:['Apple','Google','iCal','Outlook.com','Yahoo','Microsoft365'],
        pastDateHandling:"disable"
      };
      const button = document.getElementById('cal-btn');
      if (button) {
        button.addEventListener('click', () => atcb_action(config, button));
      }
}