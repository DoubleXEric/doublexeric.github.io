function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main");

    if (sidebar.style.width === "0px") {
        sidebar.style.width = "30%";
        mainContent.style.marginLeft = "30%";
    } else {
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
    }
}

window.onload = function () {
    var particles = Particles.init({
        selector: '.background',
        maxParticles: 400,


// options for breakpoints
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 200,
                    color: '#48F2E3',
                    connectParticles: true
                }
            }
        ]
    });
};

// E.g. gets called on a button click
function pause() {
    particles.pauseAnimation();
}

// E.g. gets called on a button click
function resume() {
    particles.resumeAnimation();
}