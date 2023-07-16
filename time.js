$(document).ready(function() {
  var countS = 25;
  $("#session").html(countS);
  var countB = 5;
  $("#break").html(countB);
  var pos = "TikTack  Timer";
  var countLama;
  var posLama;
  var count;
  $("#stats").html(pos);
  var clock = $(".timer").FlipClock(0, {
    countdown: true,
    clockFace: 'MinuteCounter',
    autoStart: false,
    callbacks: {
      interval: function() {
        if (clock.getTime() == 0) {
          if (pos == "sess") {
            clock.setTime(countB * 60);
            clock.start();
            pos = "break";
            $("#stats").html(pos);
          } else if (pos == "break") {
            clock.setTime(countS * 60);
            clock.start();
            pos = "sess";
            $("#stats").html(pos);
          }
        }
      }
    }
  });
  // fixing currnt time
  $("#start").on("click", function() {
    if (count != countS || clock.getTime() == 0) {
      clock.setTime(countS * 60);
      pos = "Time Begins";
      $("#stats").html(pos);
    } else {
      pos = posLama;
      $("#stats").html(pos);
    }
    count = countS;
  
    const countdownDuration = countS * 60 * 1000; // Convert minutes to milliseconds
    const startTime = new Date().getTime(); // Get the current time in milliseconds
    const endTime = startTime + countdownDuration; // Calculate the end time
  
    const endDateTime = new Date(endTime); // Create a Date object for the end time
    let endHour = endDateTime.getHours();
    const endMinute = endDateTime.getMinutes().toString().padStart(2, "0");
    const endSecond = endDateTime.getSeconds().toString().padStart(2, "0");
    const endMillisecond = endDateTime.getMilliseconds().toString().padStart(3, "0");
    let endAMPM = "AM";
  
    if (endHour >= 12) {
      endHour -= 12;
      endAMPM = "PM";
    }
  
    if (endHour === 0) {
      endHour = 12;
    }
  
    const endDisplayTime = endHour.toString().padStart(2, "0") + ":" + endMinute + ":" + endSecond + "." + endMillisecond + " " + endAMPM;
  
    $("#countdown-end-time").html("Countdown Ends at " + endDisplayTime);
    $("#countdown-end-time").addClass("countdown-end-time-show");
    $("#countdown-end-time").removeClass("countdown-end-time-hide");
  
    clock.start();
  });
  

  // SESSION
  $("#sessInc").on("click", function() {
    if ($("#session").html() > 0) {
      countS = parseInt($("#session").html());
      countS += 1;
      $("#session").html(countS);
    }
  });

  $("#sessDec").on("click", function() {
    if ($("#session").html() > 1) {
      countS = parseInt($("#session").html());
      countS -= 1;
      $("#session").html(countS);
    }
  });

  // BREAK
  $("#breakInc").on("click", function() {
    if ($("#break").html() > 0) {
      countB = parseInt($("#break").html());
      countB += 1;
      $("#break").html(countB);
    }
  });

  $("#breakDec").on("click", function() {
    if ($("#break").html() > 1) {
      countB = parseInt($("#break").html());
      countB -= 1;
      $("#break").html(countB);
    }
  });

  $("#start").on("click", function() {
    if (count != countS || clock.getTime() == 0) {
      clock.setTime(countS * 60);
      pos = "Time Begins";
      $("#stats").html(pos);
    } else {
      pos = posLama;
      $("#stats").html(pos);
    }
    count = countS;
    clock.start();

    const countdownDuration = countS * 60 * 1000; // Convert minutes to milliseconds
    setTimeout(function() {
      if (clock.getTime() == 0) {
        alert("Countdown Timer has ended!");
      }
    }, countdownDuration);
  });

  $("#stop").on("click", function() {
    clock.stop();
    countLama = clock.getTime();
    posLama = $("#stats").html();
  });

  $("#clear").on("click", function() {
    clock.stop();
    pos = "TikTack  Timer";
    $("#stats").html(pos);
    clock.setTime(0);
  });
});


// Generate multiple falling drops
function generateFallingDrops() {
  const container = document.getElementById("falling-container");

  const dropCount = 54; // Adjust the number of drops
  const minDelay = 50; // Adjust the minimum delay between drops (in milliseconds)
  const maxDelay = 1800; // Adjust the maximum delay between drops (in milliseconds)

  for (let i = 0; i < dropCount; i++) {
    const drop = document.createElement("div");
    drop.className = "falling-drop";
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDelay = `${Math.random() * (maxDelay - minDelay) + minDelay}ms`;
    container.appendChild(drop);
  }
}
// Call the function to generate falling drops
generateFallingDrops();


function updateClock() {
  const now = new Date();
  const offset = 330; // Offset in minutes for UTC+05:30
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Get UTC time in milliseconds
  const istTime = new Date(utcTime + offset * 60000); // Add offset to UTC time

  let hours = istTime.getHours();
  const minutes = istTime.getMinutes().toString().padStart(2, "0");
  const seconds = istTime.getSeconds().toString().padStart(2, "0");
  const milliseconds = istTime.getMilliseconds().toString().padStart(3, "0");
  let ampm = "";

  if (hours === 0) {
    hours = 12;
    ampm = "AM";
  } else if (hours < 12) {
    ampm = "AM";
  } else if (hours === 12) {
    ampm = "PM";
  } else {
    hours -= 12;
    ampm = "PM";
  }

  hours = hours.toString().padStart(2, "0");

  const hourSpan = document.querySelector(".clock-hours");
  const minuteSpan = document.querySelector(".clock-minutes");
  const secondSpan = document.querySelector(".clock-seconds");
  const millisecondSpan = document.querySelector(".clock-milliseconds");
  const ampmSpan = document.querySelector(".clock-ampm");

  if (hours !== hourSpan.textContent) {
    hourSpan.textContent = hours;
    hourSpan.classList.add("changed");
    setTimeout(() => {
      hourSpan.classList.remove("changed");
    }, 1000);
  }

  if (minutes !== minuteSpan.textContent) {
    minuteSpan.textContent = minutes;
    minuteSpan.classList.add("changed");
    setTimeout(() => {
      minuteSpan.classList.remove("changed");
    }, 1000);
  }

  if (seconds !== secondSpan.textContent) {
    secondSpan.textContent = seconds;
    secondSpan.classList.add("changed");
    setTimeout(() => {
      secondSpan.classList.remove("changed");
    }, 1000);
  }

  if (milliseconds !== millisecondSpan.textContent) {
    millisecondSpan.textContent = milliseconds;
    millisecondSpan.classList.add("changed");
    setTimeout(() => {
      millisecondSpan.classList.remove("changed");
    }, 1000);
  }

  if (ampm !== ampmSpan.textContent) {
    ampmSpan.textContent = ampm;
  }
}

updateClock();
setInterval(updateClock, 1000);
