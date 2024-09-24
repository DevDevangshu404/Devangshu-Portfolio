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
});

   // Initialize tilt.js
   VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// Change title and favicon on visibility change
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Projects | Portfolio Devangshu Mazumder";
        $("#favicon").attr("href", "/assets/images/logo.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "/assets/images/logo.png");
    }
});

// Fetch project data from projects.json
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

// Display projects on the page dynamically
function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";

    projects.forEach(project => {
        projectsHTML += `
            <div class="grid-item ${project.category}">
                <div class="box tilt" style="width: 380px; margin: 1rem;">
                    <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="${project.name}">
                    <div class="content">
                        <div class="tag">
                            <h3>${project.name}</h3>
                        </div>
                        <div class="desc">
                            <p>${project.desc}</p>
                            <div class="btns">
                                <a href="${project.links.view}" class="btn" ><i class="fas fa-eye"></i> View</a>
                                <a href="${project.links.code}" class="btn" target="_blank"><i class="fas fa-code"></i> Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    projectsContainer.innerHTML = projectsHTML;

    // Initialize tilt.js
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });

    // Scroll reveal for projects
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });
    srtop.reveal('.work .box', { interval: 200 });

    // Isotope filtering for project categories
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // Filter projects on category button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

// Fetch and display projects when the page loads
getProjects().then(data => {
    showProjects(data);
});

// Disable developer mode (right-click, F12, Ctrl+Shift+I, etc.)
document.onkeydown = function (e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(String.fromCharCode(e.keyCode))) || (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))) {
        return false;
    }
};



