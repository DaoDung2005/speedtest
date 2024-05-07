function measureSpeed() {
  var startTime, endTime;
  var download = new Image();
  download.onload = function() {
      endTime = (new Date()).getTime();
      var duration = (endTime - startTime) / 1000; // in seconds
      var bitsLoaded = 2000000; // assume 2 Mbps (2 megabits per second)
      var speedBps = (bitsLoaded / duration).toFixed(2); // bits per second
      var speedMbps = (speedBps / 1000000).toFixed(2); // megabits per second
      var speedMBps = (speedBps / 8000000).toFixed(2); // megabytes per second

      document.getElementById('speedMbps').innerText = speedMbps + " Mbps";
      document.getElementById('speedMBps').innerText = speedMBps + " MB/s";
      setTimeout(measureSpeed, 1000); // Measure speed again after 1 second
  }
  startTime = (new Date()).getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = "https://vietteltelecom.vn/images/logo_home_new.png" + cacheBuster;
}

measureSpeed(); // Start measuring speed when the page loads
