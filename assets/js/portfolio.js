document.addEventListener("DOMContentLoaded", () => {

    // ===== SCROLL ANIMATIONS =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
     { threshold: 0.1 }
    );

    // Section titles
    document.querySelectorAll(".title").forEach((el) => {
        el.classList.add("animate-fade-up");
        observer.observe(el);
    });

    // About Me - image left, text right
    const aboutImage = document.querySelector(".aboutMe .image");
    const aboutText = document.querySelector(".aboutMe .textContents");
    if (aboutImage) { aboutImage.classList.add("animate-fade-left"); observer.observe(aboutImage); }
    if (aboutText)  { aboutText.classList.add("animate-fade-right"); observer.observe(aboutText); }

    // Education cards
    document.querySelectorAll(".edu-cardCon").forEach((el) => {
        el.classList.add("animate-fade-up");
        observer.observe(el);
    });

    // Skills cards
    document.querySelectorAll(".skills-wrapper").forEach((el) => {
        el.classList.add("animate-fade-up");
        observer.observe(el);
    });

    // Project cards - JS se render hone ke baad
    setTimeout(() => {
        document.querySelectorAll(".project-card").forEach((el) => {
            el.classList.add("animate-fade-up");
            observer.observe(el);
        });
    }, 100);

    // Certificate cards - JS se render hone ke baad
    setTimeout(() => {
        document.querySelectorAll(".cert-experience-card").forEach((el) => {
            el.classList.add("animate-fade-up");
            observer.observe(el);
        });
    }, 100);

    // Contact form
    const contactForm = document.querySelector(".contact-container");
    if (contactForm) {
        contactForm.classList.add("animate-fade-up");
        observer.observe(contactForm);
    }

// scroll animatioin end 

    // Right click band
// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// });

// F12 aur shortcuts band
document.addEventListener("keydown", (e) => {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }
});
    // Element selection
    const themeToggle = document.querySelector("#themeToggle");
    const navBar = document.querySelector(".navbar .nav-links");
    const toggle = document.querySelector(".mobileIcon");
    const toggleIcon = toggle?.querySelector("i");

    // Theme toggle
    themeToggle?.addEventListener("change", () => {
        document.body.classList.toggle("theme");
    });

    // Mobile navigation
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

    // Active navigation link
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

    // Skill animation
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

    // Project cards
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
        },
        {
            title: "File Upload API",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
            content: "A backend API for uploading files, handling multipart form data, and managing uploaded file records.",
            codeUrl: "https://github.com/skverma895746/File-Upload-API.git"
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
                    <p>${project.content}</p>
                    <div class="project-links">
                        <a class="project-link code-link" href="${project.codeUrl}" target="_blank" rel="noreferrer">View Code</a>
                        ${project.liveUrl ? `<a class="project-link live-link" href="${project.liveUrl}" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>Live View</a>` : ""}
                    </div>
                </div>
            </div>
        `).join("");
    }

    // ===== CERTIFICATE & EXPERIENCE DATA =====
    const certExperienceData = [
        {
            title: "AI Powered Python Micro Course",
            issuer: "Skill Course",
            date: "31/03/2026",
            description: "Completed a Python course focused on AI concepts and basic programming skills.",
            certUrl: "https://exam.skillcourse.in/student/view_certificate?uid=SC-5840DD9FA8"
        },
        {
            title: "Power BI Micro Course",
            issuer: "Skill Course",
            date: "31/03/2026",
            description: "Completed a Power BI course covering basics of data visualization and dashboard creation.",
            certUrl: "https://exam.skillcourse.in/student/view_certificate?uid=SC-7BF1CF4EB9"
        },
        {
            title: "SQL Micro Course",
            issuer: "Skill Course",
            date: "31/03/2026",
            description: "Completed a SQL course covering basic database queries and data management.",
            certUrl: "https://exam.skillcourse.in/student/view_certificate?uid=SC-B664FEF568"
        },
        {
            title: "Web Development Internship",
            issuer: "CodSoft",
            date: "23 Oct 2025",
            description: "Completed a 4-week web development internship with hands-on project experience.",
            certUrl: "https://www.linkedin.com/posts/sandeepkumar8957_web-development-internship-at-codsoft-activity-7387431854443999232-l54p"
        },
        {
            title: "Web Development Course",
            issuer: "Web Expert Software Private Limited",
            date: "13 Dec 2025",
            description: "Completed a 2-month web development course with hands-on practice.",
            certUrl: "https://www.linkedin.com/posts/sandeepkumar8957_training-certificate-activity-7420453568509501441-30JA"
        },
    ];

    const certCon = document.querySelector(".cert-experience-container");
    if (certCon) {
        certCon.innerHTML = certExperienceData.map((cert) => `
            <div class="cert-experience-card">
                <h4>${cert.title}</h4>
                <i>${cert.issuer}</i>
                <h4>${cert.date}</h4>
                <p>${cert.description}</p>
                <a href="${cert.certUrl}" target="_blank">View Certificate</a>
            </div>
        `).join("");
    }

    // Contact form
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

    // Typed role text
    if (window.Typed) {
        new Typed("#autotype", {
            strings: ["Programmer", "Developer", "Designer", "Coder", "Data Analyst"],
            typeSpeed: 120,
            backSpeed: 90,
            loop: true
        });
    }

});