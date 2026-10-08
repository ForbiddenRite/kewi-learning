/**
 * Kewi Learning - Results / Submissions Data Store
 * Tracks student attempts, scores, and answers.
 * One attempt per exercise enforced.
 */

const DEFAULT_RESULTS = [
    {
        id: "res_001",
        studentId: "u_student_001",
        exerciseId: "ex_001",
        submittedAt: "2026-09-21T10:30:00Z",
        answers: {
            q1: "China",
            q2: "After their national bird which is also brown and fuzzy",
            q3: "true",
            q4: "vines",
            q5: "Vitamin D"
        },
        score: 50,
        maxScore: 50,
        percentage: 100,
        correctCount: 5,
        totalQuestions: 5,
        status: "completed"
    },
    {
        id: "res_002",
        studentId: "u_student_002",
        exerciseId: "ex_001",
        submittedAt: "2026-09-21T11:00:00Z",
        answers: {
            q1: "China",
            q2: "Because it tastes like the kiwi bird",
            q3: "true",
            q4: "vines",
            q5: "Vitamin C"
        },
        score: 30,
        maxScore: 50,
        percentage: 60,
        correctCount: 3,
        totalQuestions: 5,
        status: "completed"
    },
    {
        id: "res_003",
        studentId: "u_student_001",
        exerciseId: "ex_003",
        submittedAt: "2026-09-22T09:15:00Z",
        answers: {
            q1: "Evaporation",
            q2: "precipitation",
            q3: "true",
            q4: "The Sun"
        },
        score: 40,
        maxScore: 40,
        percentage: 100,
        correctCount: 4,
        totalQuestions: 4,
        status: "completed"
    },
    {
        id: "res_004",
        studentId: "u_student_003",
        exerciseId: "ex_002",
        submittedAt: "2026-09-22T14:00:00Z",
        answers: {
            q1: "5",
            q2: "a + 12",
            q3: "10",
            q4: "false",
            q5: "24"
        },
        score: 50,
        maxScore: 50,
        percentage: 100,
        correctCount: 5,
        totalQuestions: 5,
        status: "completed"
    }
];

/**
 * Initialize results
 */
function initResults() {
    if (!localStorage.getItem(STORAGE_KEY_RESULTS)) {
        localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(DEFAULT_RESULTS));
    }
}

/**
 * Get all results
 * @returns {Array}
 */
function getResults() {
    initResults();
    return JSON.parse(localStorage.getItem(STORAGE_KEY_RESULTS) || "[]");
}

/**
 * Save results
 * @param {Array} results
 */
function saveResults(results) {
    localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(results));
}

/**
 * Find result by student + exercise (enforces one attempt)
 * @param {string} studentId
 * @param {string} exerciseId
 * @returns {Object|null}
 */
function findResult(studentId, exerciseId) {
    return getResults().find(r => r.studentId === studentId && r.exerciseId === exerciseId) || null;
}

/**
 * Check if student has already attempted an exercise
 * @param {string} studentId
 * @param {string} exerciseId
 * @returns {boolean}
 */
function hasAttempted(studentId, exerciseId) {
    return findResult(studentId, exerciseId) !== null;
}

/**
 * Get all results for a student
 * @param {string} studentId
 * @returns {Array}
 */
function getResultsByStudent(studentId) {
    return getResults().filter(r => r.studentId === studentId);
}

/**
 * Get all results for an exercise
 * @param {string} exerciseId
 * @returns {Array}
 */
function getResultsByExercise(exerciseId) {
    return getResults().filter(r => r.exerciseId === exerciseId);
}

/**
 * Grade answers against an exercise
 * @param {Object} exercise
 * @param {Object} answers - map of questionId -> answer
 * @returns {Object} grading result
 */
function gradeAnswers(exercise, answers) {
    const questions = exercise.questions || [];
    const pointsPerQ = exercise.pointsPerQuestion || DEFAULT_POINTS_PER_QUESTION;
    let correctCount = 0;
    const details = [];

    questions.forEach(q => {
        const studentAnswer = (answers[q.id] || "").toString().trim().toLowerCase();
        const correctAnswer = (q.correctAnswer || "").toString().trim().toLowerCase();
        // For fill-blank allow minor flexibility
        let isCorrect = false;
        if (q.type === "fill_blank") {
            isCorrect = studentAnswer === correctAnswer ||
                        studentAnswer === correctAnswer.replace(/s$/, "") || // singular/plural
                        correctAnswer.includes(studentAnswer);
        } else {
            isCorrect = studentAnswer === correctAnswer;
        }
        if (isCorrect) correctCount++;
        details.push({
            questionId: q.id,
            studentAnswer: answers[q.id] || "",
            correctAnswer: q.correctAnswer,
            isCorrect
        });
    });

    const totalQuestions = questions.length;
    const score = correctCount * pointsPerQ;
    const maxScore = totalQuestions * pointsPerQ;
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    return {
        score,
        maxScore,
        percentage,
        correctCount,
        totalQuestions,
        details
    };
}

/**
 * Submit a result (one attempt only)
 * @param {string} studentId
 * @param {string} exerciseId
 * @param {Object} answers
 * @returns {Object} the created result
 */
function submitResult(studentId, exerciseId, answers) {
    if (hasAttempted(studentId, exerciseId)) {
        throw new Error("You have already submitted this exercise. Only one attempt is allowed.");
    }
    const exercise = findExerciseById(exerciseId);
    if (!exercise) {
        throw new Error("Exercise not found.");
    }
    const grading = gradeAnswers(exercise, answers);
    const result = {
        id: "res_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        studentId,
        exerciseId,
        submittedAt: new Date().toISOString(),
        answers,
        score: grading.score,
        maxScore: grading.maxScore,
        percentage: grading.percentage,
        correctCount: grading.correctCount,
        totalQuestions: grading.totalQuestions,
        details: grading.details,
        status: STATUS_COMPLETED
    };
    const results = getResults();
    results.push(result);
    saveResults(results);
    return result;
}

/**
 * Get leaderboard for an exercise (sorted by score desc, then time asc)
 * @param {string} exerciseId
 * @returns {Array}
 */
function getExerciseLeaderboard(exerciseId) {
    const results = getResultsByExercise(exerciseId);
    return results
        .sort((a, b) => {
            if (b.percentage !== a.percentage) return b.percentage - a.percentage;
            return new Date(a.submittedAt) - new Date(b.submittedAt);
        })
        .map((r, index) => ({
            rank: index + 1,
            ...r
        }));
}

/**
 * Get overall student rankings (average percentage across completed exercises)
 * @returns {Array}
 */
function getOverallLeaderboard() {
    const results = getResults();
    const studentMap = {};
    results.forEach(r => {
        if (!studentMap[r.studentId]) {
            studentMap[r.studentId] = { totalPercentage: 0, count: 0, totalScore: 0 };
        }
        studentMap[r.studentId].totalPercentage += r.percentage;
        studentMap[r.studentId].totalScore += r.score;
        studentMap[r.studentId].count += 1;
    });
    return Object.entries(studentMap)
        .map(([studentId, data]) => ({
            studentId,
            avgPercentage: Math.round(data.totalPercentage / data.count),
            totalScore: data.totalScore,
            completedCount: data.count
        }))
        .sort((a, b) => b.avgPercentage - a.avgPercentage || b.totalScore - a.totalScore)
        .map((item, index) => ({ rank: index + 1, ...item }));
}
