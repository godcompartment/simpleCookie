function writeTimeCookie() {
  visit_time = new Date();
  document.cookie = "visit_time=" + visit_time;
}

function readTimeCookie() {
  var in_cookies = document.cookie.split(";");
  for (var i = 0; i < in_cookies.length; i++) {
    if (in_cookies[i].includes("visit_time=")){
      var last_time_val = in_cookies[i].split("visit_time=")[1];
      break;
    } else {
      var last_time_val = undefined;
    }
  }
  return last_time_val;
}

function checkCookie() {
  var last_time_val = readTimeCookie();
  if (last_time_val !== undefined) {
    document.getElementById("demo").innerHTML = "You last visited the page " + last_time_val;
    deleteCookie();
    writeTimeCookie();
  } else {
    writeTimeCookie()
    document.getElementById("demo").innerHTML = "Welcome new visitor!";
  }

}

function deleteCookie() {
  var now = new Date();
  now.setMonth(now.getMonth() - 1);
  document.cookie = "expires=" + now.toUTCString() + ";"
}
