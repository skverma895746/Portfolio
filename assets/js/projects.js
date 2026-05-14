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
            title: "Marks Predictor",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
            content: "A machine learning project that predicts student marks using input data and performance-based features.",
            codeUrl: "https://github.com/skverma895746/marks-predictor"
        },
        {
            title: "Fraud Detection System",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
            content: "A data analytics and machine learning system designed to detect suspicious or fraudulent transactions.",
            codeUrl: "https://github.com/skverma895746/fraud-detection-system"
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
            image: "assets/images/dashboard.png",
            content: "An interactive Power BI dashboard that tracks sales performance and turns data into clear visual insights.",
            codeUrl: "https://github.com/skverma895746/Data-Analyst.git"
        },
        {
            title: "File Upload API",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
            content: "A backend API for uploading files, handling multipart form data, and managing uploaded file records.",
            codeUrl: "https://github.com/skverma895746/File-Upload-API.git"
        },
  {
        title: "Calculator",
        image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=900&q=80",
        content: "A fully functional calculator built with JavaScript supporting basic arithmetic operations.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/calculator.html"
    },
    {
        title: "To-Do List",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
        content: "A task management app with full CRUD operations to create, edit, and delete daily tasks.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/todolist.html"
    },
    {
        title: "Password Generator",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=900&q=80",
        content: "A secure password generator that creates strong random passwords with custom options.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/passwordgenerator.html"
    },
    {
        title: "Digital Watch",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
        content: "A real-time digital watch displaying live time using JavaScript Date API.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/digitalwatch.html"
    },
    {
        title: "Image Gallery",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80",
        content: "A responsive image gallery with smooth hover effects and interactive UI.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/imagegallery.html"
    },
    {
        title: "Guess The Number Game",
        image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=900&q=80",
        content: "A fun number guessing game with hints and score tracking built with JavaScript logic.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/guessanumbergame.html"
    },
    {
        title: "Temperature Converter",
        image: "https://images.unsplash.com/photo-1501837303764-ada599fdac6c?auto=format&fit=crop&w=900&q=80",
        content: "A utility app to convert temperature between Celsius, Fahrenheit, and Kelvin.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/tempratureconveter.html"
    },
    {
        title: "QR Code Generator",
        image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=900&q=80",
        content: "A QR code generator that converts any text or URL into a scannable QR code.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/Qrcodegenerator.html"
    },
    {
        title: "Text To Voice Converter",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=80",
        content: "A text-to-speech app using Web Speech API to convert written text into audio.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/texttovoiceconveter.html"
    },
    {
        title: "Login Page",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=900&q=80",
        content: "A clean and responsive login page UI with form validation using JavaScript.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/loginPage.html"
    },
    {
        title: "Image Slider",
        image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?auto=format&fit=crop&w=900&q=80",
        content: "An auto-sliding image carousel with manual controls built using vanilla JavaScript.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/imageSlider.html"
    },
    {
        title: "Typing Test",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        content: "A typing speed test app that measures WPM and accuracy in real time.",
        codeUrl: "https://github.com/skverma895746/JavaScript-project/blob/main/typingtest.html"
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
