// Wait for the full DOM to load before running any script
document.addEventListener("DOMContentLoaded", () => {

    // ===== ELEMENT SELECTION =====
    // Selecting all required DOM elements used throughout the script
    const themeToggle = document.querySelector("#themeToggle");
    const navBar = document.querySelector(".navbar .nav-links");
    const toggle = document.querySelector(".mobileIcon");
    const toggleIcon = toggle?.querySelector("i");
    // END: Element Selection


    // ===== THEME TOGGLE =====
    // Toggles dark/light theme on the body when the checkbox is changed
    themeToggle?.addEventListener("change", () => {
        document.body.classList.toggle("theme");
    });
    // END: Theme Toggle


    // ===== MOBILE NAVIGATION TOGGLE =====
    // Opens/closes the mobile nav menu and switches hamburger ↔ close icon
    toggle?.addEventListener("click", () => {
        navBar?.classList.toggle("openClose");
        const isOpen = navBar?.classList.contains("openClose");

        // Update aria-label for accessibility
        toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

        // Switch between bars icon (menu closed) and xmark icon (menu open)
        toggleIcon?.classList.toggle("fa-bars", !isOpen);
        toggleIcon?.classList.toggle("fa-xmark", isOpen);
    });
    // END: Mobile Navigation Toggle


    // ===== CLOSE MENU ON NAV LINK CLICK =====
    // When any nav link is clicked, close the mobile menu and reset icon to bars
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navBar?.classList.remove("openClose");
            toggleIcon?.classList.add("fa-bars");
            toggleIcon?.classList.remove("fa-xmark");
        });
    });
    // END: Close Menu on Nav Link Click


    // ===== ACTIVE NAV LINK ON SCROLL =====
    // Highlights the correct nav link based on which section is currently in view
    const sections = document.querySelectorAll("main[id], section[id]");
    const navLinks = document.querySelectorAll(".navbar .nav-links a");

    window.addEventListener("scroll", () => {
        let current = "main"; // Default active section

        // Loop through each section and check if user has scrolled past it
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 130; // Offset for navbar height
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        // Add 'active' class to the matching nav link
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    });
    // END: Active Nav Link on Scroll


    // ===== SKILL DATA =====
    // Array of [label selector, percentage value, ring selector] for each skill
    const skillData = [
        [".html", 95, ".htmlCon"],
        [".css", 92, ".cssCon"],
        [".javascript", 85, ".jsCon"],
        [".react", 80, ".reactCon"],
        [".bootstrap", 88, ".bootstrapCon"],
        [".node", 75, ".nodeCon"],
        [".express", 75, ".expressCon"],
        [".mongodb", 70, ".mongodbCon"],
        [".python", 72, ".pythonCon"],
        [".sql", 78, ".sqlCon"],
        [".powerbi", 68, ".powerbiCon"],
    ];
    // END: Skill Data


    // ===== SKILL ANIMATION FUNCTION =====
    // Animates the circular skill ring from 0% to the given percentage
    function animateSkill(labelSelector, percentage, ringSelector) {
        const label = document.querySelector(labelSelector);
        const ring = document.querySelector(ringSelector);
        if (!label || !ring) return; // Exit if elements not found

        let current = 0;

        const interval = setInterval(() => {
            current += 1;

            // Convert percentage to degrees for conic-gradient (1% = 3.6deg)
            const degrees = current * 3.6;

            // Update the ring background with conic-gradient to show progress
            ring.style.background = `conic-gradient(var(--activeColor) 0deg ${degrees}deg, rgba(255,255,255,0.12) ${degrees}deg 360deg)`;

            // Update the percentage label text
            label.textContent = `${current}%`;

            // Stop the animation when target percentage is reached
            if (current >= percentage) {
                clearInterval(interval);
            }
        }, 18); // Runs every 18ms for smooth animation
    }

    // Run animation for each skill in the skillData array
    skillData.forEach(([label, percent, ring]) => animateSkill(label, percent, ring));
    // END: Skill Animation


    // ===== PROJECT DATA =====
    // Array of project objects containing title, image, description, and links
    const projectContent = [
        {
            title: "FreeStudyHub",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            content: "An online learning platform providing study materials, notes, and resources for students.",
            codeUrl: "https://github.com/skverma895746/FreeStudyHubWithbackend.git",
            liveUrl: "https://skverma895746.github.io/FreeStudyHub/"
        },
        {
            title: "Note App",
            image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
            content: "A simple and efficient note-taking application to create, edit, and manage daily notes.",
            codeUrl: "https://github.com/skverma895746/Note-Api.git"
            // No liveUrl — only code link available
        },
        {
            title: "CT Paper",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
            content: "A platform to access and manage class test papers for practice and preparation.",
            codeUrl: "https://github.com/skverma895746/RECB-All-CT-papers",
            liveUrl: "https://skverma895746.github.io/RECB-All-CT-papers/"
        },
        {
            title: "Sales Dashboard",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
            content: "An interactive Power BI dashboard that tracks sales performance, highlights trends, and turns business data into clear visual insights.",
            codeUrl: "https://github.com/skverma895746/Data-Analyst.git"
            // No liveUrl — only code link available
        },
        {
            title: "Dictionary App",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
            content: "A web application for searching word meanings, definitions, and pronunciations.",
            codeUrl: "https://github.com/skverma895746/JavaScript-project.git"
            // No liveUrl — only code link available
        },
    ];
    // END: Project Data


    // ===== RENDER PROJECT CARDS =====
    // Dynamically generates and injects project cards into the .project-Container div
    const projectCon = document.querySelector(".project-Container");
    if (projectCon) {
        projectCon.innerHTML = projectContent.map((project) => `
            <div class="project-card">
                <div class="imageCon">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="projectContent">
                    <h4>${project.title}</h4>
                    <p>${project.content}</p>
                    <div class="project-links">
                        <!-- Always show View Code link -->
                        <a class="project-link code-link" href="${project.codeUrl}" target="_blank" rel="noreferrer">View Code</a>

                        <!-- Show Live View link only if liveUrl exists -->
                        ${project.liveUrl ? `<a class="project-link live-link" href="${project.liveUrl}" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>Live View</a>` : ""}
                    </div>
                </div>
            </div>
        `).join("");
    }
    // END: Render Project Cards


    // ===== CONTACT FORM SUBMISSION =====
    // Handles form submission, sends data to Formspree API, and shows feedback
    const form = document.querySelector(".contact-form");
    const error = document.querySelector("#error");
    const button = document.querySelector("#button");

    form?.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default page reload on form submit

        // Disable button and show sending state
        button.disabled = true;
        button.textContent = "Sending...";
        error.textContent = "Sending...";

        // Send form data to Formspree endpoint
        fetch("https://formspree.io/f/xwvwwgwz", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: new FormData(form)
        })
            .then((res) => {
                if (!res.ok) throw new Error("Server error");

                // Success: show confirmation and reset the form
                error.textContent = "Your message has been sent successfully";
                form.reset();
            })
            .catch(() => {
                // Error: show failure message
                error.textContent = "Something went wrong";
            })
            .finally(() => {
                // Re-enable button and clear status message after 3 seconds
                button.disabled = false;
                button.textContent = "Send Message";
                setTimeout(() => {
                    error.textContent = "";
                }, 3000);
            });
    });
    // END: Contact Form Submission


    // ===== TYPED.JS AUTO-TYPING ANIMATION =====
    // Cycles through role strings with a typewriter effect in the hero section
    if (window.Typed) {
        new Typed("#autotype", {
            strings: ["Programmer", "Developer", "Designer", "Coder", "Data Analyst"],
            typeSpeed: 120,   // Speed of typing each character (ms)
            backSpeed: 90,    // Speed of deleting each character (ms)
            loop: true        // Continuously loops through all strings
        });
    }
    // END: Typed.js Animation

});
// END: DOMContentLoaded