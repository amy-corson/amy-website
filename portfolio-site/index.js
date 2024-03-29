const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const currentSkillsBtn = document.getElementById("current-skill-btn");
const learningSkillsBtn = document.getElementById("learning-skill-btn");
const currentSkillsContainer = document.getElementById("skill-list");
const learningSkillsContainer = document.getElementById("learning-skills");
const themeToggle = document.getElementById("theme-toggle");
const header = document.getElementById("home");
const aboutSection = document.getElementById("about");
const skillsSection = document.getElementById("skills");
const portfolioSection = document.getElementById("portfolio");
const footer = document.getElementById("footer");
const emailBtn = document.getElementById("email-btn");

//intersection observer header

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-150px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("scrolled");
    } else {
      entry.target.classList.add("scrolled");
    }
  });
}, options);

observer.observe(header);



// copy email to clipboard

emailBtn.addEventListener("click", () => {
    console.log("yes!")
  navigator.clipboard.writeText("aecorson@gmail.com");
  alert("Copied the text: aecorson@gmail.com");
})

// theme

function toggleTheme() {
  themeToggle.classList.toggle("active");
  header.classList.toggle("daymode");
  aboutSection.classList.toggle("daymode");
  skillsSection.classList.toggle("daymode");
  portfolioSection.classList.toggle("daymode");
  footer.classList.toggle("daymode");
}

themeToggle.addEventListener("click", toggleTheme);

//stars animation 
const stars = document.getElementsByClassName("fa-star")

function fireStars() {
  let randomNum = Math.floor((Math.random())*15)
  for(let i = 0; i < stars.length; i++) {
    if (stars[randomNum] === stars[i]) {
      stars[i].classList.add("fired")
      setTimeout(() => stars[i].classList.remove("fired"), 1200)
    }
  }
}

let star

if(!header.classList.contains("daymode")){
  starInterval = setInterval(fireStars, 400)
}else if (header.classList.contains("daymode")){
  clearInterval(starInterval)
}

// theme on start

const today = new Date()
const hour = today.getHours()
function setThemeByTime() {
  if(hour > 19 || hour < 6 ) {
    return
  } else {
    toggleTheme()
  }
}

setThemeByTime()

// navigation

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// skills

function toggleToSkills() {
  currentSkillsBtn.classList.remove("skill-btn-hidden");
  learningSkillsContainer.classList.add("hidden");
  currentSkillsContainer.classList.remove("hidden");
  learningSkillsBtn.classList.add("skill-btn-hidden");
}

function toggleToLearning() {
  currentSkillsContainer.classList.add("hidden");
  learningSkillsBtn.classList.remove("skill-btn-hidden");
  currentSkillsBtn.classList.add("skill-btn-hidden");
  learningSkillsContainer.classList.remove("hidden");
}

currentSkillsBtn.addEventListener("click", toggleToSkills);
learningSkillsBtn.addEventListener("click", toggleToLearning);
