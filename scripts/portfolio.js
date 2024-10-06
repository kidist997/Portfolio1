const portfolioItems = document.querySelectorAll(".portfolio-item");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

let currentIndex = 0;

function updateDisplay() {
  portfolioItems.forEach((item) => item.classList.remove("show"));

  portfolioItems[currentIndex].classList.add("show");
}

function showNext() {
  currentIndex = (currentIndex + 1) % portfolioItems.length; // Loop back to first item
  updateDisplay();
}

function showPrevious() {
  currentIndex =
    (currentIndex - 1 + portfolioItems.length) % portfolioItems.length; // Loop back to last item
  updateDisplay();
}

rightArrow.addEventListener("click", showNext);
leftArrow.addEventListener("click", showPrevious);

updateDisplay();
