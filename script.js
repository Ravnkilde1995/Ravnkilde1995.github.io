//  scroll section active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

// toggle navbar
const menuIcon = document.querySelector("#mobile-menu-icon");
const navbar = document.querySelector(".navbar");


// toggle icon and navbar when click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}
// remove toggle icon and navbar when click (scroll)
window.onscroll = () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    };
  });

  // sticky navbar
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and toggled navbar when click (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Resume section

const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeDetails = document.querySelectorAll(".resume-detail");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});


// project section
// Array of project objects
const projects = [
  {
    title: "Oh.studio",
    description: "A sleek recreation to explore minimal design, smooth scroll animations, interactive hover effects, and more.",
    tech: "HTML5, CSS, JavaScript",
    media: "assets/oh-studio-vid.mp4",
    type: "video",
    link: "projects/oh-studio/index.html",
    github: "https://github.com/Ravnkilde1995/Ravnkilde1995.github.io/tree/main/projects/oh-studio",
    color: "#F5F2E7"
  },
  {
    title: "SmartPDF",
    description: "This Single Page Application includes an OCR-enabled upload system and an editor for inserting data into delivery note templates. It automates parts of a package handling process in GN service desk. Structure is following the MVC pattern.",
    tech: "HTML5, CSS, JavaScript, Flask, Python, OCR",
    media: "assets/SmartPDF.mp4",
    type: "video",
    github: "https://github.com/Ravnkilde1995/SmartPDF/tree/main",
    color: "#E8E3DA"
  }
  // ,
  // {
  //   title: "TEST 3",
  //   description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   media: "assets/ravenArt.png",
  //   type: "image",
  //   color: "#989389"
  // }
];

// Initialize the current project index
let currentProject = 0;

// Get references to the HTML elements
const mediaContainer = document.getElementById("project-media");
const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const number = document.getElementById("project-number");
const tech = document.getElementById("project-tech");
const link = document.getElementById("project-link");
const github = document.getElementById("project-github");
const section = document.querySelector(".projects");

// Function to show the project based on the current index
function showProject(index) {
  const project = projects[index];

  // Clear previous media elements
  mediaContainer.innerHTML = "";

  // Create new media elements based on the project type
  if (project.type === "image") {
    const img = document.createElement("img");
    img.src = project.media;
    mediaContainer.appendChild(img);
  } else if (project.type === "video") {
    const video = document.createElement("video");
    video.src = project.media;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    mediaContainer.appendChild(video);
  }

  // Set project title, description, etc..
  number.textContent = `${index + 1}`;
  title.textContent = project.title;
  description.textContent = project.description;
  tech.textContent = project.tech;
  link.href = project.link;
  github.href = project.github;
  section.style.backgroundColor = project.color;

  // Handle button visibility

  if (project.link) {
    link.style.display = "inline-flex";
    link.href = project.link;
  } else {
    link.style.display = "none";
  }

  if (project.github) {
    github.style.display = "inline-flex";
    github.href = project.github;
  } else {
    github.style.display = "none";
  }
}


// Add event listeners for the previous and next buttons
document.querySelector(".prev-btn").addEventListener("click", () => {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  showProject(currentProject);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentProject = (currentProject + 1) % projects.length;
  showProject(currentProject);
});
// Show the first project on page load
document.addEventListener("DOMContentLoaded", () => {
  showProject(currentProject);
});

// scrool reveal
const sr = ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

sr.reveal('.home-content', { origin: 'top' });
sr.reveal('.home-img img, .portfolio-container, .resume-box', { origin: 'bottom' });
sr.reveal('.home-content h1 ', { origin: 'left' });
sr.reveal('.home-content p', { origin: 'right' });