document.addEventListener("DOMContentLoaded", () => {

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

    // ===== RENDER CERTIFICATES =====
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

});