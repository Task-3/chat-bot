function applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('selected-theme', themeName);
    console.log(`Theme updated to: ${themeName}`);
}

function changeTheme(themeName) {
    applyTheme(themeName);
}

async function loadSavedTheme() {
    console.log("Fetching theme from storage...");

    // simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const savedTheme = localStorage.getItem('selected-theme') || 'light';

    applyTheme(savedTheme);

    console.log("Theme loaded successfully.");
}

// Run when DOM is ready
window.addEventListener('DOMContentLoaded', loadSavedTheme);
(function themeNotification() {
    const originalApply = applyTheme;

    window.applyTheme = function(themeName) {
        originalApply(themeName);

        const msg = document.createElement("div");
        msg.innerText = `Theme: ${themeName}`;
        msg.style.position = "fixed";
        msg.style.bottom = "20px";
        msg.style.right = "20px";
        msg.style.background = "black";
        msg.style.color = "white";
        msg.style.padding = "10px 15px";
        msg.style.borderRadius = "8px";
        msg.style.zIndex = "1000";

        document.body.appendChild(msg);

        setTimeout(() => msg.remove(), 1500);
    };
})();