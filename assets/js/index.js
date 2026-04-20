// theme 
// document.body.classList.toggle("light", themeToggle.checked);

// navbar 
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("change", (e) => {
            e.stopImmediatePropagation();
            document.body.classList.toggle("theme");
        })
    }

    const navBar = document.querySelector(".navbar .nav-links");
    const Toggle = document.querySelector(".mobileIcon");
    if (navBar && Toggle) {
        Toggle.addEventListener("click", () => {
            navBar.classList.toggle("openClose");
            if (navBar.classList.contains("openClose")) {
                Toggle.textContent = "✖";
                Toggle.style.color = "red";
            }
            else {
                Toggle.textContent = "☰";
                Toggle.style.color = "white";
            }
        });
    }
    // navbar tracking
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // form data handle
    const form = document.querySelector(".contact-form");
    const error = document.querySelector("#error")
    const button = document.querySelector("#button");
    if (form && error && button) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            button.disabled = true;
            button.textContent = "Sending...";
            error.textContent = "Sending...";
            button.style.cursor = "not-allowed";
            const data = new FormData(form);
            fetch("https://formspree.io/f/xwvwwgwz", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: data
            })
                .then(res => {
                    if (!res.ok) {
                        error.textContent = "Server error";
                        error.style.color = "red";
                        return;
                    }
                    error.textContent = "✔ Your message has been sent successfully";
                    error.style.color = "var(--activeColor)";
                    form.reset();

                    setTimeout(() => {
                        error.textContent = "";
                    }, 3000);
                })
                .catch(() => {
                    error.textContent = "Something went wrong";

                    setTimeout(() => {
                        error.textContent = "";
                    }, 3000);
                })
                .finally(() => {
                    button.disabled = false;
                    button.textContent = "Send Message";
                    button.style.cursor = "pointer";
                });
        });
    }
    //   #skills mover 
    function Spinner(className, percentage, skillContainer) {
        const skillCon = document.querySelector(skillContainer);
        const ClassName = document.querySelector(className);
        if (skillCon && ClassName) {
            let current = 0;
            const interval = setInterval(() => {
                current++;
                skillCon.style.background = `conic-gradient(var(--activeColor) 0deg ${current * 3.6}deg, black ${current * 3.6}deg 360deg)`;
                ClassName.textContent = current + "%";
                if (current >= percentage) {
                    clearInterval(interval);
                }
            }, 100);
        }
    }
    Spinner(".html", 90, ".htmlCon");
    Spinner(".css", 90, ".cssCon");
    Spinner(".javascript", 80, ".jsCon");
    Spinner(".react", 60, ".reactCon");
    Spinner(".bootstrap", 80, ".bootstrapCon");
    Spinner(".node", 75, ".nodeCon");
    Spinner(".express", 80, ".expressCon");
    Spinner(".mongodb", 60, ".mongodbCon");
    Spinner(".python", 80, ".pythonCon");
    Spinner(".sql", 80, ".sqlCon");
    Spinner(".powerbi", 75, ".powerbiCon");

    // project content 
    const projectContent = [
        {
            title: "FreeStudyHub",
            image: "https://play-lh.googleusercontent.com/wUBvR23eQKZLBWXe2EJ8FnrKS7GToNDdTfp7O6sYABXz9qRLNWQSwBLKkedK-BKM0ert",
            content: "An online learning platform providing study materials, notes, and resources for students.",
            link: "https://skverma895746.github.io/FreeStudyHub/"
        },
        {
            title: "Note App",
            image: "https://i.ytimg.com/vi/JBHUZh7tk1g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCDsut7svNUYz0lEQqMjM-VDPYlvg",
            content: "A simple and efficient note-taking application to create, edit, and manage daily notes.",
            link:"https://github.com/skverma895746/Note-Api.git"
        },
        {
            title: "CT Paper",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavF0WzHYApupf0zjjGTKYINu55maaRw0aBttR3FYB3w&s",
            content: "A platform to access and manage class test papers for practice and preparation.",
            link: "https://skverma895746.github.io/RECB-All-CT-papers/"
        },
        {
            title: "Sales Dashboard (Power BI)",
            image: "assets/images/dashboard.png",
            content: "An interactive sales dashboard built using Power BI to visualize and analyze business data.",
            link:"https://github.com/skverma895746/Data-Analyst.git"
        },
        {
            title: "Dictionary App",
            image: "https://codingartistweb.com/wp-content/uploads/2021/09/dictionary-01.png",
            content: "A web application that allows users to search word meanings, definitions, and pronunciations instantly.",
            link:"https://github.com/skverma895746/JavaScript-project.git"
        },
    ];
    const projectCon = document.querySelector(".project-Container");
    if (projectCon) {
        function ProjectMaterial() {
            projectContent.forEach(obj => {
                projectCon.innerHTML += `
              <div class="project-card">
                    <div class = "imageCon">
                    <img src="${obj.image}" alt="Imgae not loaded">
                    </div>
                    <div class="projectContent">
                        <h4>${obj.title}</h4>
                        <p>${obj.content}
                        <a href="${obj.link}" target="_blank">Click here</a></p>
                    </div>
                </div>`;
            })
        }
    }
    ProjectMaterial();
    //  end 
});
