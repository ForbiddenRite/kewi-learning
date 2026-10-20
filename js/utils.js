/**
 * Kewi Learning - Utility Functions
 */

/**
 * Show a toast notification
 * @param {string} message
 * @param {string} type - success | error | warning | info
 */
function showToast(message, type = "info") {
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = `toast alert alert-${type}`;
    toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s";
        setTimeout(() => toast.remove(), 300);
    }, TOAST_DURATION_MS);
}

/**
 * Escape HTML to prevent XSS
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
    if (typeof str !== "string") return str;
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return str.replace(/[&<>"']/g, c => map[c]);
}

/**
 * Format date for display
 * @param {string|Date} date
 * @returns {string}
 */
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

/**
 * Format date with time
 * @param {string|Date} date
 * @returns {string}
 */
function formatDateTime(date) {
    const d = new Date(date);
    return d.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

/**
 * Get difficulty badge HTML
 * @param {string} difficulty
 * @returns {string}
 */
function getDifficultyBadge(difficulty) {
    const map = {
        easy: "badge-success",
        medium: "badge-warning",
        hard: "badge-error"
    };
    const label = DIFFICULTIES[difficulty] || difficulty;
    const cls = map[difficulty] || "badge-primary";
    return `<span class="badge ${cls}">${escapeHtml(label)}</span>`;
}

/**
 * Get subject badge HTML
 * @param {string} subject
 * @returns {string}
 */
function getSubjectBadge(subject) {
    const label = SUBJECTS[subject] || subject;
    return `<span class="badge badge-earth">${escapeHtml(label)}</span>`;
}

/**
 * Get type badge HTML
 * @param {string} type
 * @returns {string}
 */
function getTypeBadge(type) {
    const label = EXERCISE_TYPES[type] || type;
    return `<span class="badge badge-primary">${escapeHtml(label)}</span>`;
}

/**
 * Get score badge based on percentage
 * @param {number} percentage
 * @returns {string}
 */
function getScoreBadge(percentage) {
    let cls = "badge-error";
    if (percentage >= 80) cls = "badge-success";
    else if (percentage >= PASSING_SCORE_PERCENT) cls = "badge-warning";
    return `<span class="badge ${cls}">${percentage}%</span>`;
}

/**
 * Debounce function
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
function debounce(fn, delay = DEBOUNCE_DELAY_MS) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

/**
 * Generate a simple unique ID
 * @returns {string}
 */
function generateId(prefix = "id") {
    return prefix + "_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6);
}

/**
 * Toggle dark mode
 */
function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next === "dark" ? "dark" : "");
    localStorage.setItem(STORAGE_KEY_THEME, next);
}

/**
 * Init theme from storage
 */
function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    if (saved === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}

/**
 * Confirm dialog helper
 * @param {string} message
 * @returns {boolean}
 */
function confirmAction(message) {
    return window.confirm(message);
}

/**
 * Get query parameter
 * @param {string} name
 * @returns {string|null}
 */
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

/**
 * Truncate text
 * @param {string} text
 * @param {number} maxLen
 * @returns {string}
 */
function truncate(text, maxLen = 100) {
    if (!text || text.length <= maxLen) return text || "";
    return text.substring(0, maxLen).trim() + "...";
}

/**
 * Calculate percentage
 * @param {number} value
 * @param {number} total
 * @returns {number}
 */
function calcPercentage(value, total) {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
}

// Init theme early
initTheme();


/**
 * Mobile hamburger menu for public navbar (.navbar-nav)
 * Opens as a top-layer panel with a dimmed opaque overlay behind it.
 */
function initNavToggle() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.querySelector(".navbar-nav");
    if (!toggle || !nav) return;

    // Ensure a single shared overlay exists
    var overlay = document.querySelector(".nav-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "nav-overlay";
        overlay.setAttribute("aria-hidden", "true");
        document.body.appendChild(overlay);
    }

    function setOpen(open) {
        nav.classList.toggle("is-open", open);
        overlay.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        document.body.style.overflow = open ? "hidden" : "";
    }

    toggle.addEventListener("click", function () {
        setOpen(!nav.classList.contains("is-open"));
    });

    overlay.addEventListener("click", function () {
        setOpen(false);
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            setOpen(false);
        });
    });

    // Close on resize to desktop
    window.addEventListener("resize", function () {
        if (window.innerWidth > 992) {
            setOpen(false);
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavToggle);
} else {
    initNavToggle();
}
