document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#themeToggle");
    const navBar = document.querySelector(".navbar .nav-links");
    const toggle = document.querySelector(".mobileIcon");
    const toggleIcon = toggle?.querySelector("i");

    themeToggle?.addEventListener("change", () => {
        document.body.classList.toggle("theme");
    });

    toggle?.addEventListener("click", () => {
        navBar?.classList.toggle("openClose");
        const isOpen = navBar?.classList.contains("openClose");
        toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        toggleIcon?.classList.toggle("fa-bars", !isOpen);
        toggleIcon?.classList.toggle("fa-xmark", isOpen);
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navBar?.classList.remove("openClose");
            toggleIcon?.classList.add("fa-bars");
            toggleIcon?.classList.remove("fa-xmark");
        });
    });

    const sections = document.querySelectorAll("main[id], section[id]");
    const navLinks = document.querySelectorAll(".navbar .nav-links a");

    window.addEventListener("scroll", () => {
        let current = "main";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 130;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    });

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

    function animateSkill(labelSelector, percentage, ringSelector) {
        const label = document.querySelector(labelSelector);
        const ring = document.querySelector(ringSelector);
        if (!label || !ring) return;

        let current = 0;
        const interval = setInterval(() => {
            current += 1;
            const degrees = current * 3.6;
            ring.style.background = `conic-gradient(var(--activeColor) 0deg ${degrees}deg, rgba(255,255,255,0.12) ${degrees}deg 360deg)`;
            label.textContent = `${current}%`;

            if (current >= percentage) {
                clearInterval(interval);
            }
        }, 18);
    }

    skillData.forEach(([label, percent, ring]) => animateSkill(label, percent, ring));

    const projectContent = [
        {
            title: "FreeStudyHub",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            content: "An online learning platform providing study materials, notes, and resources for students.",
            link: "https://skverma895746.github.io/FreeStudyHub/"
        },
        {
            title: "Note App",
            image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
            content: "A simple and efficient note-taking application to create, edit, and manage daily notes.",
            link: "https://github.com/skverma895746/Note-Api.git"
        },
        {
            title: "CT Paper",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
            content: "A platform to access and manage class test papers for practice and preparation.",
            link: "https://skverma895746.github.io/RECB-All-CT-papers/"
        },
        {
            title: "Sales Dashboard",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
            content: "An interactive Power BI dashboard that tracks sales performance, highlights trends, and turns business data into clear visual insights.",
            link: "https://github.com/skverma895746/Data-Analyst.git"
        },
        {
            title: "Dictionary App",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
            content: "A web application for searching word meanings, definitions, and pronunciations.",
            link: "https://github.com/skverma895746/JavaScript-project.git"
        },
    ];

    const projectCon = document.querySelector(".project-Container");
    if (projectCon) {
        projectCon.innerHTML = projectContent.map((project) => `
            <div class="project-card">
                <div class="imageCon">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="projectContent">
                    <h4>${project.title}</h4>
                    <p>${project.content} <a href="${project.link}" target="_blank">Click here</a></p>
                </div>
            </div>
        `).join("");
    }

    const form = document.querySelector(".contact-form");
    const error = document.querySelector("#error");
    const button = document.querySelector("#button");

    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        button.disabled = true;
        button.textContent = "Sending...";
        error.textContent = "Sending...";

        fetch("https://formspree.io/f/xwvwwgwz", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: new FormData(form)
        })
            .then((res) => {
                if (!res.ok) throw new Error("Server error");
                error.textContent = "Your message has been sent successfully";
                form.reset();
            })
            .catch(() => {
                error.textContent = "Something went wrong";
            })
            .finally(() => {
                button.disabled = false;
                button.textContent = "Send Message";
                setTimeout(() => {
                    error.textContent = "";
                }, 3000);
            });
    });

    if (window.Typed) {
        new Typed("#autotype", {
            strings: ["Programmer", "Developer", "Designer", "Coder", "Data Analyst"],
            typeSpeed: 120,
            backSpeed: 90,
            loop: true
        });
    }
});
