const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathText = document.querySelector(".breaths-text");
let breathsLeft = 3;

// watching for selected breaths from user
numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathText.innerText = breathsLeft;
});

//Grow/Shrink Circle

const growShrink = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

//Breathing Instructions
const breatheTextUpdate = () => {
  breathsLeft--;
  breathText.innerText = breathsLeft;
  instructions.innerText = "Breathe in";
  setTimeout(() => {
    instructions.innerText = "Hold Breathe";
    setTimeout(() => {
      instructions.innerText = "Release Breathe Slowly";
    }, 4000);
  }, 4000);
};

//Breathing App Function

const breathingApp = () => {
  const breathingAnimation = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimation);
      instructions.innerText = "Session completed! Click Begin to start again";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreaths.value;
      breathText.innerText=breathsLeft;
      return;
    }
    growShrink();
    breatheTextUpdate();
  }, 12000);
};

//Start Breathing

start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerText = "Get ready...";
  setTimeout(() => {
    instructions.innerText = "Breathing is about to begin...";
    setTimeout(() => {
      breathingApp();
      growShrink();
      breatheTextUpdate();
    }, 2000);
  }, 2000);
});
