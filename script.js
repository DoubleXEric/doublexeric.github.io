function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main");
    const mainContentBackground = document.getElementById("mainBackground");
    const navBar = document.getElementById("navBar");

    if (sidebar.style.width === "0px") {
        sidebar.style.width = "30%";
        mainContent.style.marginLeft = "30%";
        mainContentBackground.style.left = "30%";
    } else {
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
        mainContentBackground.style.left = "0";
    }
}

window.onload = function () {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main");
    const mainContentBackground = document.getElementById("mainBackground");
    const navBar = document.getElementById("navBar");

    sidebar.style.width = "30%";
    mainContent.style.marginLeft = "30%";
    mainContentBackground.style.left = "30%";

    var particles = Particles.init({
        selector: '.background',
        maxParticles: 400,
        connectParticles: true,
        color: ['#FFFEFC', '#666666', '#ba0013']
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