/**
 * Kewi Learning - Authentication Module
 * Handles login, logout, session management.
 */

/**
 * Get currently logged-in user from session
 * @returns {Object|null}
 */
function getCurrentUser() {
    const raw = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

/**
 * Set current user session
 * @param {Object} user
 */
function setCurrentUser(user) {
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));
}

/**
 * Clear session (logout)
 */
function logout() {
    localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
}

/**
 * Check if user is logged in
 * @returns {boolean}
 */
function isLoggedIn() {
    return getCurrentUser() !== null;
}

/**
 * Check if current user has a specific role
 * @param {string} role
 * @returns {boolean}
 */
function hasRole(role) {
    const user = getCurrentUser();
    return user && user.role === role;
}

/**
 * Require authentication - redirect if not logged in
 * @param {string} [requiredRole] - optional role check
 */
function requireAuth(requiredRole) {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = getLoginPath();
        return false;
    }
    if (requiredRole && user.role !== requiredRole) {
        // Redirect to appropriate dashboard
        if (user.role === ROLE_TEACHER) {
            window.location.href = "../teacher/dashboard.html";
        } else {
            window.location.href = "../student/dashboard.html";
        }
        return false;
    }
    return true;
}

/**
 * Login handler
 * @param {string} username
 * @param {string} password
 * @returns {{success: boolean, user?: Object, error?: string}}
 */
function login(username, password) {
    if (!username || !password) {
        return { success: false, error: "Please enter both username and password." };
    }
    const user = authenticateUser(username.trim(), password);
    if (!user) {
        return { success: false, error: "Invalid username or password." };
    }
    setCurrentUser(user);
    return { success: true, user };
}

/**
 * Get path to login page relative to current location
 */
function getLoginPath() {
    const path = window.location.pathname;
    if (path.includes("/pages/teacher/") || path.includes("/pages/student/")) {
        return "../login.html";
    }
    if (path.includes("/pages/")) {
        return "login.html";
    }
    return "pages/login.html";
}

/**
 * Get path to home
 */
function getHomePath() {
    const path = window.location.pathname;
    if (path.includes("/pages/teacher/") || path.includes("/pages/student/")) {
        return "../../index.html";
    }
    if (path.includes("/pages/")) {
        return "../index.html";
    }
    return "index.html";
}

/**
 * Redirect to role-based dashboard after login
 * @param {Object} user
 */
function redirectToDashboard(user) {
    if (user.role === ROLE_TEACHER) {
        window.location.href = "teacher/dashboard.html";
    } else if (user.role === ROLE_STUDENT) {
        window.location.href = "student/dashboard.html";
    } else {
        window.location.href = getHomePath();
    }
}

/**
 * Update the navbar user info if present
 */
function getDashboardPathForUser(user) {
    if (!user) return getHomePath();
    const path = (window.location.pathname || "").replace(/\\/g, "/");
    const inTeacher = path.indexOf("/teacher/") !== -1;
    const inStudent = path.indexOf("/student/") !== -1;
    const inPages = path.indexOf("/pages/") !== -1;

    if (user.role === ROLE_TEACHER) {
        if (inTeacher) return "dashboard.html";
        if (inStudent) return "../teacher/dashboard.html";
        if (inPages) return "teacher/dashboard.html";
        return "pages/teacher/dashboard.html";
    }
    // student (default)
    if (inStudent) return "dashboard.html";
    if (inTeacher) return "../student/dashboard.html";
    if (inPages) return "student/dashboard.html";
    return "pages/student/dashboard.html";
}

function updateNavbarUser() {
    const user = getCurrentUser();
    const userDisplay = document.getElementById("nav-user-display");
    const loginBtn = document.getElementById("nav-login-btn");
    const logoutBtn = document.getElementById("nav-logout-btn");
    const dashLink = document.getElementById("nav-dashboard-link");
    const brandLink = document.querySelector(".navbar-brand");

    if (user) {
        if (userDisplay) {
            const roleLabel = user.role === ROLE_TEACHER ? "Teacher" : (user.role === ROLE_STUDENT ? "Student" : user.role);
            const name = user.fullName || user.username;
            userDisplay.innerHTML = '<span class="nav-user-name">' + name + '</span> <span class="badge badge-primary nav-role-badge">' + roleLabel + '</span>';
            userDisplay.classList.remove("hidden");
        }
        if (loginBtn) loginBtn.classList.add("hidden");
        if (logoutBtn) logoutBtn.classList.remove("hidden");

        const dashPath = getDashboardPathForUser(user);
        if (dashLink) {
            dashLink.classList.remove("hidden");
            dashLink.href = dashPath;
        }
        // After login: brand "Kewi Learning" goes to Dashboard (not home)
        if (brandLink) {
            brandLink.href = dashPath;
            brandLink.title = "Go to Dashboard";
        }
    } else {
        if (userDisplay) userDisplay.classList.add("hidden");
        if (loginBtn) loginBtn.classList.remove("hidden");
        if (logoutBtn) logoutBtn.classList.add("hidden");
        if (dashLink) dashLink.classList.add("hidden");
        // Logged out: brand returns to home
        if (brandLink) {
            brandLink.href = getHomePath();
            brandLink.title = "Kewi Learning Home";
        }
    }
}

/**
 * Attach logout handler
 */
function initAuthUI() {
    updateNavbarUser();
    const logoutBtn = document.getElementById("nav-logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            logout();
            window.location.href = getHomePath();
        });
    }
}

// Auto-init on DOM ready
document.addEventListener("DOMContentLoaded", initAuthUI);
