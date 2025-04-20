//  scroll section active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

// toggle navbar
const menuIcon = document.querySelector("#menu-icon");
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

// project section
// Array of project objects
const projects = [
    {
      title: "TEST 1",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      media: "assets/ravenArt.png",
      type: "image",
      link: "#",
      color: "#F5F2E7"
    },
    {
      title: "TEST 2",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      media: "assets/ravenArt.png",
      type: "image",
      link: "#",
      color: "#E8E3DA"
    },
    {
      title: "TEST 3",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      media: "assets/ravenArt.png",
      type: "image",
      link: "#",
      color: "#989389"
    },
    {
      title: "TEST 4",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      media: "assets/ravenArt.png",
      type: "image",
      link: "#",
      color: "#E8E3DA"
    },
    {
      title: "TEST 5",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      media: "assets/ravenArt.png",
      type: "image",
      link: "#",
      color: "#F5F2E7"
    },
    {
      title: "TEST 6",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      media: "assets/ravenArt.png",
      type: "image",
      link: "#",
      color: "#E8E3DA"
    }
  ];

// Initialize the current project index
let currentProject = 0;

// Get references to the HTML elements
const mediaContainer = document.getElementById("project-media");
const titleEl = document.getElementById("project-title");
const descriptionEl = document.getElementById("project-description");
const linkEl = document.getElementById("project-link");
const sectionEl = document.querySelector(".projects");

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
    video.src = project.src;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    projectMedia.appendChild(video);
  }

  // Set project title, description, link, and background color
  titleEl.textContent = project.title;
  descriptionEl.textContent = project.description;
  linkEl.href = project.link;
  sectionEl.style.backgroundColor = project.color;
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