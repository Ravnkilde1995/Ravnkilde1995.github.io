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
    title: "Pricing panel",
    description: "Built as part of a developer bootcamp course by Colt Steele on Udemy, this project is based on a layout template by Travis Williams. It features a simple pricing panel with a toggle for monthly and yearly pricing.",
    tech: "HTML5, CSS",
    media: "assets/pricing-panel.png",
    type: "image",
    link: "projects/pricing-panel/index.html",
    github: "https://github.com/Ravnkilde1995/Ravnkilde1995.github.io/tree/main/projects/pricing-panel",
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
  },
  {
    title: "Oh.studio",
    description: "A sleek recreation to explore minimal design, smooth scroll animations, interactive hover effects, and more.",
    tech: "HTML5, CSS, JavaScript",
    media: "assets/oh-studio-vid.mp4",
    type: "video",
    link: "projects/oh-studio/index.html",
    github: "https://github.com/Ravnkilde1995/Ravnkilde1995.github.io/tree/main/projects/oh-studio",
    color: "#989389"
  }
];

// Initialize the current project index
let currentProject = 0;

// Get references to the HTML elements
const mediaContainers = document.querySelectorAll("#project-media");
const titles = document.querySelectorAll("#project-title");
const descriptions = document.querySelectorAll("#project-description");
const numbers = document.querySelectorAll("#project-number");
const techs = document.querySelectorAll("#project-tech");
const links = document.querySelectorAll("#project-link");
const githubs = document.querySelectorAll("#project-github");
const ProjectSections = document.querySelectorAll(".projects");

// Function to show the project based on the current index
function showProject(index) {
  const project = projects[index];

  // Update all instances
  mediaContainers.forEach((mediaContainer) => {
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
  });

  // Update text content for all instances
  numbers.forEach((number) => (number.textContent = `${index + 1}`));
  titles.forEach((title) => (title.textContent = project.title));
  descriptions.forEach((description) => (description.textContent = project.description));
  techs.forEach((tech) => (tech.textContent = project.tech));
  links.forEach((link) => {
    if (project.link) {
      link.style.display = "inline-flex";
      link.href = project.link;
    } else {
      link.style.display = "none";
    }
  });
  githubs.forEach((github) => {
    if (project.github) {
      github.style.display = "inline-flex";
      github.href = project.github;
    } else {
      github.style.display = "none";
    }
  });

  // Update background color for all ProjectSections
  ProjectSections.forEach((section) => (section.style.backgroundColor = project.color));
}

// Add event listeners for the previous and next buttons
document.querySelectorAll(".prev-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showProject(currentProject);
  });
});

document.querySelectorAll(".next-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentProject = (currentProject + 1) % projects.length;
    showProject(currentProject);
  });
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