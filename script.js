var stringers = [3, "jerry", "sandy", 4, "pepper", 15, "jocastah", 12];

function practical(data) {
  var that = this;
  this.ele = document.createElement("div");
  this.eleLine = document.createElement("div");

  if (data < 10) {
    this.eleLine.innerHTML = "the value is " + data + " and is below 10";
  } else if (data === 15) {
    this.eleLine.innerHTML = "the value is " + data + " and is exactly 15";
  } else if (data.length > 5) {
    this.eleLine.innerHTML = "the value is " + data + " and is more than 5";
  } else {
    this.eleLine.innerHTML = "the value is " + data + " and is normal";
  }

  this.ele.appendChild(this.eleLine);
  document.body.appendChild(this.ele);
  this.ele.addEventListener("click", function () {
    that.colorChange();
  });
}

practical.prototype.colorChange = function () {
  this.eleColor.style.color = "blue";
};

function newPracticals() {
  for (var i = 0; i < stringers.length; i++) {
    new practical(stringers[i]);
  }
}
newPracticals();