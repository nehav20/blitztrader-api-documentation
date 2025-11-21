document.addEventListener("DOMContentLoaded", function() {
    // Select the logo link in Material theme
    const logoLink = document.querySelector("a.md-logo, a.md-header-nav__title");
    
    if (logoLink) {
        // Use MkDocs-style URL (folder-style)
        logoLink.href = "/0.Welcome/";  // Change this if you rename the home page to index.md, then use "/"
    }
});
