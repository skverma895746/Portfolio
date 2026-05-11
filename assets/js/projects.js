document.addEventListener("DOMContentLoaded", () => {

    const projectContent = [
        {
            title: "FreeStudyHub",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            content: "An online learning platform providing study materials,notes, and resources for students.",
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
            content: "An interactive Power BI dashboard that tracks sales performance and turns data into clear visual insights.",
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
                        <a class="project-link code-link"
                           href="${project.codeUrl}"
                           target="_blank">View Code</a>
                        ${project.liveUrl ? `
                        <a class="project-link live-link"
                           href="${project.liveUrl}"
                           target="_blank">
                           <i class="fa-solid fa-arrow-up-right-from-square"></i>
                           Live View</a>` : ""}
                    </div>
                </div>
            </div>
        `).join("");
    }

});