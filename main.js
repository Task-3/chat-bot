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

