$(document).ready(function () {
    // Menu toggle for mobile view
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll and load event for smooth scrolling and menu handling
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });

    // Initialize tilt.js for media images/videos
    VanillaTilt.init(document.querySelectorAll(".project-image, video"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3
    });

    // Scroll reveal for project sections
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    // Apply animations to elements
    srtop.reveal('.project-description h1', { delay: 200 });
    srtop.reveal('.project-description p', { delay: 400 });
    srtop.reveal('.media img, .media video', { interval: 200 });
    srtop.reveal('.cta .btn', { delay: 600 });
    srtop.reveal('.footer', { delay: 800 });

    // Change title and favicon on visibility change
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === "visible") {
            document.title = "My Portfolio | Devangshu Mazumder";
            $("#favicon").attr("href", "/assets/images/logo.png");
        } else {
            document.title = "Come Back to Portfolio!";
            $("#favicon").attr("href", "/assets/images/logo.png");
        }
    });

    // Disable right-click and developer tools (Ctrl+Shift+I, etc.)
    document.onkeydown = function (e) {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(String.fromCharCode(e.keyCode))) || (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))) {
            return false;
        }
    };

    // Smooth scroll for anchor links (e.g., Scroll to Top button)
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
});

// Scroll to Top Button Behavior
let scrollTopBtn = document.getElementById("scroll-top");

window.onscroll = function () {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add("active");
    } else {
        scrollTopBtn.classList.remove("active");
    }
};

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
