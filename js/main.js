// var adBar = document.querySelector('#ad-bar');
//     var adContents = document.querySelectorAll('.ad-bar-content');
//     var totalContents = adContents.length;
//     var contentIndex = 0;

//     function updateAdContent() {
//       adContents.forEach(function(content) {
//         content.style.display = 'none';
//       });

//       adContents[contentIndex].style.display = 'block';
//       contentIndex = (contentIndex + 1) % totalContents;
//     }

//     // Adjust the animation duration based on the text length
//     function adjustAnimationDuration() {
//       var adText = adContents[contentIndex].querySelector('p');
//       var textWidth = adText.offsetWidth;
//       var barWidth = adBar.offsetWidth;
//       var animationDuration = Math.max((textWidth + barWidth) / 50, 10);
//       adContents[contentIndex].style.animationDuration = animationDuration + 's';
//     }

//     setInterval(function() {
//       updateAdContent();
//       adjustAnimationDuration();
//     }, 20000);

// var adBar = document.querySelector('#ad-bar');
// var adContents = document.querySelectorAll('.ad-bar-content');
// var currentIndex = 0;
// var interval = 5000;

// function showNextAd() {
//   adContents[currentIndex].classList.remove('active');
//   currentIndex = (currentIndex + 1) % adContents.length;
//   adContents[currentIndex].classList.add('active');
// }

// function startAdRotation() {
//   showNextAd();
//   setInterval(showNextAd, interval);
// }

// if (adContents.length > 0) {
//   adBar.style.width = '100%';
//   adContents[currentIndex].classList.add('active');
//   startAdRotation();
// }

// Optional: Add more ad texts to display
// var adTexts = [
//     "Limited Time Offer: Get 20% off on all products!",
//     "Don't miss our summer sale: Up to 50% off!",
//     "Special discount for new customers: 15% off!",
//     // Add more ad texts here
//   ];

//   // Randomly select an ad text to display
//   var randomAdIndex = Math.floor(Math.random() * adTexts.length);
//   var adTextElement = document.getElementsByClassName("ad-text");
//   adTextElement.textContent = adTexts[randomAdIndex];

// You can add more discount messages to the array if needed
const discountMessages = [
  "Get 20% off on all products!",
  "Limited time offer: Buy 2, Get 1 Free!",
  "Big sale: Up to 50% off selected items!",
];

const marquee = document.querySelector(".advertising-tape marquee");

// Populate the marquee with discount messages
discountMessages.forEach((message) => {
  const span = document.createElement("span");
  span.classList.add("discount-message");
  span.textContent = message;
  marquee.appendChild(span);
});
