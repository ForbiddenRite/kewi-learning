/**
 * Kewi Learning - Global Constants
 * All static configuration values declared here.
 */

// ========== Application Info ==========
const APP_NAME = "Kewi Learning";
const APP_VERSION = "1.0.0";
const APP_TAGLINE = "Grow Your Knowledge Like a Kiwi";

// ========== Storage Keys ==========
const STORAGE_KEY_USERS = "kewi_users";
const STORAGE_KEY_EXERCISES = "kewi_exercises";
const STORAGE_KEY_RESULTS = "kewi_results";
const STORAGE_KEY_CURRENT_USER = "kewi_current_user";
const STORAGE_KEY_THEME = "kewi_theme";

// ========== User Roles ==========
const ROLE_TEACHER = "teacher";
const ROLE_STUDENT = "student";
const ROLE_ADMIN = "admin"; // reserved for future expansion

// ========== Exercise Types ==========
const EXERCISE_TYPE_MCQ = "multiple_choice";
const EXERCISE_TYPE_FILL_BLANK = "fill_blank";
const EXERCISE_TYPE_TRUE_FALSE = "true_false";
const EXERCISE_TYPE_READING = "reading_comprehension";
const EXERCISE_TYPE_VIDEO = "video_comprehension";
// const EXERCISE_TYPE_MATCHING = "matching"; // disabled: matching not implemented in exercise builder

const EXERCISE_TYPES = {
    [EXERCISE_TYPE_MCQ]: "Multiple Choice",
    [EXERCISE_TYPE_FILL_BLANK]: "Fill in the Blank",
    [EXERCISE_TYPE_TRUE_FALSE]: "True / False",
    [EXERCISE_TYPE_READING]: "Reading Comprehension",
    [EXERCISE_TYPE_VIDEO]: "Video Comprehension"

    // [EXERCISE_TYPE_MATCHING]: "Matching" // disabled: matching not implemented in exercise builder
};

// ========== Subjects ==========
const SUBJECT_ENGLISH = "english";
const SUBJECT_MATH = "math";
const SUBJECT_SCIENCE = "science";
const SUBJECT_HISTORY = "history";
const SUBJECT_GENERAL = "general";

const SUBJECTS = {
    [SUBJECT_ENGLISH]: "English",
    [SUBJECT_MATH]: "Mathematics",
    [SUBJECT_SCIENCE]: "Science",
    [SUBJECT_HISTORY]: "History",
    [SUBJECT_GENERAL]: "General Knowledge"
};

// ========== Difficulty Levels ==========
const DIFFICULTY_EASY = "easy";
const DIFFICULTY_MEDIUM = "medium";
const DIFFICULTY_HARD = "hard";

const DIFFICULTIES = {
    [DIFFICULTY_EASY]: "Easy",
    [DIFFICULTY_MEDIUM]: "Medium",
    [DIFFICULTY_HARD]: "Hard"
};

// ========== Status Codes ==========
const STATUS_ACTIVE = "active";
const STATUS_INACTIVE = "inactive";
const STATUS_COMPLETED = "completed";
const STATUS_IN_PROGRESS = "in_progress";
const STATUS_NOT_STARTED = "not_started";

// ========== Scoring ==========
const DEFAULT_POINTS_PER_QUESTION = 10;
const PASSING_SCORE_PERCENT = 60;
const MAX_ATTEMPTS_PER_EXERCISE = 1; // Students have only one attempt

// ========== UI / Pagination ==========
const ITEMS_PER_PAGE = 10;
const MAX_RECENT_ITEMS = 5;
const ANIMATION_DURATION_MS = 300;
const TOAST_DURATION_MS = 3000;
const DEBOUNCE_DELAY_MS = 300;

// ========== Validation ==========
const MIN_PASSWORD_LENGTH = 6;
const MAX_USERNAME_LENGTH = 30;
const MIN_USERNAME_LENGTH = 3;
const MAX_EXERCISE_TITLE_LENGTH = 100;
const MAX_QUESTION_LENGTH = 500;

// ========== Paths (relative from pages) ==========
const PATH_HOME = "../../index.html";
const PATH_LOGIN = "../login.html";
const PATH_TEACHER_DASH = "dashboard.html";
const PATH_STUDENT_DASH = "dashboard.html";

// ========== Demo Accounts (for initial load) ==========
const DEMO_TEACHER_USERNAME = "teacher";
const DEMO_TEACHER_PASSWORD = "teacher123";
const DEMO_STUDENT_USERNAME = "student1";
const DEMO_STUDENT_PASSWORD = "student123";

// ========== Feature Flags (for scalable expansion) ==========
const FEATURE_LEADERBOARD = true;
const FEATURE_BADGES = true;
const FEATURE_DARK_MODE = true;
const FEATURE_SEARCH = true;
const FEATURE_FILTER = true;

// Freeze to prevent accidental mutation
Object.freeze(EXERCISE_TYPES);
Object.freeze(SUBJECTS);
Object.freeze(DIFFICULTIES);
