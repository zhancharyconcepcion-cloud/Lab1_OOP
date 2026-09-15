// Simple interactivity for the profile page
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("greetBtn");
  const output = document.getElementById("greetOutput");

  const greetings = [
    "Hello there! Thanks for visiting my page.",
    "Great to see you here!",
    "Git and GitHub are actually pretty fun once it clicks.",
    "Welcome! Feel free to reach out via email."
  ];

  btn.addEventListener("click", () => {
    const random = greetings[Math.floor(Math.random() * greetings.length)];
    output.textContent = random;
  });

  // Dynamic feature: show current date/time in the footer
  const footer = document.querySelector("footer p");
  const now = new Date();
  footer.textContent += " | Page loaded: " + now.toLocaleString();
});
