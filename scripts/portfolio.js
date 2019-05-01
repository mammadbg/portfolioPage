$("#homeButton").click(function () {
    if (homeSection.classList.contains("visibleClass")) {
        homeSection.classList.remove("visibleClass");
    } else if (aboutSection.classList.contains("visibleClass") || resumeSection.classList.contains("visibleClass") || portfolioSection.classList.contains("visibleClass") || contactSection.classList.contains("visibleClass")) {
        aboutSection.classList.remove("visibleClass");
        resumeSection.classList.remove("visibleClass");
        portfolioSection.classList.remove("visibleClass");
        contactSection.classList.remove("visibleClass");
        $("#homeSection").addClass("visibleClass");
    }
    else {
        $("#homeSection").addClass("visibleClass");
    }
});
// ====================================================================
$("#aboutButton").click(function () {
    if (aboutSection.classList.contains("visibleClass")) {
        aboutSection.classList.remove("visibleClass");
    } else if (homeSection.classList.contains("visibleClass") || resumeSection.classList.contains("visibleClass") || portfolioSection.classList.contains("visibleClass") || contactSection.classList.contains("visibleClass")) {
        homeSection.classList.remove("visibleClass");
        resumeSection.classList.remove("visibleClass");
        portfolioSection.classList.remove("visibleClass");
        contactSection.classList.remove("visibleClass");
        $("#aboutSection").addClass("visibleClass");
    }
    else {
        $("#aboutSection").addClass("visibleClass");
    }
});
// ====================================================================
$("#resumeButton").click(function () {
    if (resumeSection.classList.contains("visibleClass")) {
        resumeSection.classList.remove("visibleClass");
    } else if (aboutSection.classList.contains("visibleClass") || homeSection.classList.contains("visibleClass") || portfolioSection.classList.contains("visibleClass") || contactSection.classList.contains("visibleClass")) {
        aboutSection.classList.remove("visibleClass");
        homeSection.classList.remove("visibleClass");
        portfolioSection.classList.remove("visibleClass");
        contactSection.classList.remove("visibleClass");
        $("#resumeSection").addClass("visibleClass");
    }
    else {
        $("#resumeSection").addClass("visibleClass");
    }
});
// ====================================================================
$("#portfolioButton").click(function () {
    if (portfolioSection.classList.contains("visibleClass")) {
        portfolioSection.classList.remove("visibleClass");
    } else if (aboutSection.classList.contains("visibleClass") || resumeSection.classList.contains("visibleClass") || homeSection.classList.contains("visibleClass") || contactSection.classList.contains("visibleClass")) {
        aboutSection.classList.remove("visibleClass");
        resumeSection.classList.remove("visibleClass");
        homeSection.classList.remove("visibleClass");
        contactSection.classList.remove("visibleClass");
        $("#portfolioSection").addClass("visibleClass");
    }
    else {
        $("#portfolioSection").addClass("visibleClass");
    }
});
// ====================================================================
$("#contactButton").click(function () {
    if (contactSection.classList.contains("visibleClass")) {
        contactSection.classList.remove("visibleClass");
    } else if (aboutSection.classList.contains("visibleClass") || resumeSection.classList.contains("visibleClass") || portfolioSection.classList.contains("visibleClass") || homeSection.classList.contains("visibleClass")) {
        aboutSection.classList.remove("visibleClass");
        resumeSection.classList.remove("visibleClass");
        portfolioSection.classList.remove("visibleClass");
        homeSection.classList.remove("visibleClass");
        $("#contactSection").addClass("visibleClass");
    }
    else {
        $("#contactSection").addClass("visibleClass");
    }
});


