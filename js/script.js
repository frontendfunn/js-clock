// this clock created based on the milliseconds elapsed for the day at that particular point of time
// i'll create three functions here

function getElapsedTimeInMilliseconds() {
  const startDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
  const endDate = new Date();
  return endDate - startDate;
}

function generateAngles(milliseconds) {
  // function which generate angles used by hours , seconds and minutes hands
  return {
    secondsAngle: (milliseconds / 1000) * 6,
    minutesAngle: (milliseconds / 1000 / 60) * 6,
    hoursAngle: (milliseconds / 1000 / 60 / 60) * 30,
  };
}

function Time() {
  let secondsHand = document.querySelector("#secondsHand");
  let minutesHand = document.querySelector("#minutesHand");
  let hoursHand = document.querySelector("#hoursHand");

  setInterval(function () {
    let angles = generateAngles(getElapsedTimeInMilliseconds());
    secondsHand.style.transform = `rotate(${angles.secondsAngle}deg)`;
    minutesHand.style.transform = `rotate(${angles.minutesAngle}deg)`;
    hoursHand.style.transform = `rotate(${angles.hoursAngle}deg)`;
  }, 1000);
}
Time();
