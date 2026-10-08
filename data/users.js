/**
 * Kewi Learning - Users Data Store
 * Sample users and helper functions for CRUD operations.
 * Data is persisted to localStorage.
 * Password would be hashed in real production.
 */

const DEFAULT_USERS = [
    {
        id: "u_teacher_001",
        username: "teacher",
        password: "teacher123",
        role: "teacher",
        fullName: "Ms. Sarah Chan",
        email: "sarah.chan@example.com",
        status: "active",
        createdAt: "2026-01-15T08:00:00Z",
        avatar: null
    },
    {
        id: "u_student_001",
        username: "student1",
        password: "student123",
        role: "student",
        fullName: "Alex Wong",
        email: "alex.wong@example.com",
        status: "active",
        createdAt: "2026-02-01T09:00:00Z",
        className: "3A",
        avatar: null
    },
    {
        id: "u_student_002",
        username: "student2",
        password: "student123",
        role: "student",
        fullName: "Jamie Li",
        email: "jamie.li@example.com",
        status: "active",
        createdAt: "2026-02-01T09:05:00Z",
        className: "3A",
        avatar: null
    },
    {
        id: "u_student_003",
        username: "student3",
        password: "student123",
        role: "student",
        fullName: "Taylor Ng",
        email: "taylor.ng@example.com",
        status: "active",
        createdAt: "2026-02-03T10:00:00Z",
        className: "3B",
        avatar: null
    },
    {
        id: "u_student_004",
        username: "student4",
        password: "student123",
        role: "student",
        fullName: "Casey Chan",
        email: "casey.chan@example.com",
        status: "active",
        createdAt: "2026-02-05T11:00:00Z",
        className: "3B",
        avatar: null
    },
    {
        id: "u_student_005",
        username: "student5",
        password: "student123",
        role: "student",
        fullName: "Morgan Ho",
        email: "morgan.ho@example.com",
        status: "active",
        createdAt: "2026-02-10T08:30:00Z",
        className: "4A",
        avatar: null
    }
];

/**
 * Initialize users in localStorage if not present
 */
function initUsers() {
    if (!localStorage.getItem(STORAGE_KEY_USERS)) {
        localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(DEFAULT_USERS));
    }
}

/**
 * Get all users
 * @returns {Array}
 */
function getUsers() {
    initUsers();
    return JSON.parse(localStorage.getItem(STORAGE_KEY_USERS) || "[]");
}

/**
 * Save users array
 * @param {Array} users
 */
function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
}

/**
 * Find user by username
 * @param {string} username
 * @returns {Object|null}
 */
function findUserByUsername(username) {
    return getUsers().find(u => u.username.toLowerCase() === username.toLowerCase()) || null;
}

/**
 * Find user by ID
 * @param {string} id
 * @returns {Object|null}
 */
function findUserById(id) {
    return getUsers().find(u => u.id === id) || null;
}

/**
 * Authenticate user
 * @param {string} username
 * @param {string} password
 * @returns {Object|null} user object without password
 */
function authenticateUser(username, password) {
    const user = findUserByUsername(username);
    if (user && user.password === password && user.status === STATUS_ACTIVE) {
        const { password: _, ...safeUser } = user;
        return safeUser;
    }
    return null;
}

/**
 * Create a new user
 * @param {Object} userData
 * @returns {Object} created user (without password)
 */
function createUser(userData) {
    const users = getUsers();
    if (findUserByUsername(userData.username)) {
        throw new Error("Username already exists");
    }
    const newUser = {
        id: "u_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6),
        username: userData.username,
        password: userData.password,
        role: userData.role || ROLE_STUDENT,
        fullName: userData.fullName || userData.username,
        email: userData.email || "",
        status: STATUS_ACTIVE,
        createdAt: new Date().toISOString(),
        className: userData.className || "",
        avatar: null
    };
    users.push(newUser);
    saveUsers(users);
    const { password: _, ...safeUser } = newUser;
    return safeUser;
}

/**
 * Update user
 * @param {string} id
 * @param {Object} updates
 * @returns {Object|null}
 */
function updateUser(id, updates) {
    const users = getUsers();
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    // Prevent changing username to existing one
    if (updates.username && updates.username !== users[index].username) {
        if (findUserByUsername(updates.username)) {
            throw new Error("Username already exists");
        }
    }
    users[index] = { ...users[index], ...updates, id: users[index].id };
    saveUsers(users);
    const { password: _, ...safeUser } = users[index];
    return safeUser;
}

/**
 * Delete user
 * @param {string} id
 * @returns {boolean}
 */
function deleteUser(id) {
    const users = getUsers();
    const filtered = users.filter(u => u.id !== id);
    if (filtered.length === users.length) return false;
    saveUsers(filtered);
    return true;
}

/**
 * Get all students
 * @returns {Array}
 */
function getStudents() {
    return getUsers().filter(u => u.role === ROLE_STUDENT);
}

/**
 * Get all teachers
 * @returns {Array}
 */
function getTeachers() {
    return getUsers().filter(u => u.role === ROLE_TEACHER);
}
