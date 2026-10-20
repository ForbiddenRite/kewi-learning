/**
 * Kewi Learning - Exercises Data Store
 * Sample exercises covering multiple subjects and types.
 * Designed to be easily extensible.
 */

const DEFAULT_EXERCISES = [
    {
        id: "ex_001",
        title: "The Amazing Kiwi Fruit",
        description:
            "Read a short passage about kiwi fruit and answer comprehension questions.",
        type: "reading_comprehension",
        subject: "english",
        difficulty: "easy",
        pointsPerQuestion: 10,
        createdBy: "u_teacher_001",
        createdAt: "2026-03-01T10:00:00Z",
        status: "active",
        tags: ["reading", "nature", "food"],
        passage: `The kiwi fruit, also known simply as kiwi, is a small fruit with a fuzzy brown skin and bright green flesh. Despite its name, the kiwi is not originally from New Zealand. It was first grown in China, where it was called the "Chinese gooseberry." In the early 20th century, seeds were brought to New Zealand, and the fruit became extremely popular there. New Zealanders renamed it "kiwi" after their national bird, which is also brown and fuzzy.

Kiwi fruits are packed with nutrients. They contain more vitamin C than oranges, and they are also rich in vitamin K, vitamin E, and dietary fiber. The tiny black seeds inside the kiwi are edible and provide additional fiber and healthy fats. Many people enjoy eating kiwis by scooping out the flesh with a spoon, while others prefer to eat the skin as well after giving it a good wash.

Farmers grow kiwis on vines, similar to grapes. The plants need a mild climate and plenty of water to thrive. Today, kiwi fruits are grown in many countries including Italy, Chile, Greece, and of course New Zealand. They have become a global favorite because of their unique sweet-tart flavor and impressive nutritional profile.`,
        questions: [
            {
                id: "q1",
                text: "Where was the kiwi fruit originally grown?",
                type: "multiple_choice",
                options: ["New Zealand", "China", "Italy", "Chile"],
                correctAnswer: "China",
                explanation: `The first paragraph states, 'Despite its name, the kiwi is not originally from New Zealand. It was first grown in China, where it was called the "Chinese gooseberry."'`,
            },
            {
                id: "q2",
                text: "Why did New Zealanders rename the fruit 'kiwi'?",
                type: "multiple_choice",
                options: [
                    "Because it tastes like the kiwi bird",
                    "After their national bird which is also brown and fuzzy",
                    "Because it was discovered by a person named Kiwi",
                    "It is an abbreviation of a Chinese word",
                ],
                correctAnswer:
                    "After their national bird which is also brown and fuzzy",
                explanation: `The passage explains that 'New Zealanders renamed it "kiwi" after their national bird, which is also brown and fuzzy.' This matches the appearance of the fruit.`,
            },
            {
                id: "q3",
                text: "Kiwi fruits contain more vitamin C than oranges.",
                type: "true_false",
                correctAnswer: "true",
                explanation:
                    "The second paragraph explicitly states, 'They contain more vitamin C than oranges,' making this statement true.",
            },
            {
                id: "q4",
                text: "According to the passage, farmers grow kiwis on ______, similar to grapes.",
                type: "fill_blank",
                correctAnswer: "vines",
                explanation:
                    "The third paragraph says, 'Farmers grow kiwis on vines, similar to grapes.'",
            },
            {
                id: "q5",
                text: "Which of the following is NOT mentioned as a nutrient found in kiwi fruits?",
                type: "multiple_choice",
                options: ["Vitamin C", "Vitamin K", "Vitamin D", "Vitamin E"],
                correctAnswer: "Vitamin D",
                explanation:
                    "The second paragraph lists the nutrients found in kiwi fruits, which include vitamin C, vitamin K, vitamin E, and dietary fiber. Vitamin D is NOT mentioned in the passage.",
            },
        ],
    },
    {
        id: "ex_002",
        title: "Basic Algebra Challenge",
        description:
            "Test your understanding of simple algebraic equations and expressions.",
        type: "multiple_choice",
        subject: "math",
        difficulty: "medium",
        pointsPerQuestion: 10,
        createdBy: "u_teacher_001",
        createdAt: "2026-03-05T14:00:00Z",
        status: "active",
        tags: ["algebra", "equations"],
        questions: [
            {
                id: "q1",
                text: "What is the value of x if 2x + 5 = 15?",
                type: "multiple_choice",
                options: ["3", "5", "7", "10"],
                correctAnswer: "5",
            },
            {
                id: "q2",
                text: "Simplify: 3(a + 4) - 2a",
                type: "multiple_choice",
                options: ["a + 12", "5a + 12", "a + 4", "3a + 12"],
                correctAnswer: "a + 12",
            },
            {
                id: "q3",
                text: "If y = 3x - 2 and x = 4, what is y?",
                type: "multiple_choice",
                options: ["8", "10", "12", "14"],
                correctAnswer: "10",
            },
            {
                id: "q4",
                text: "The expression 5x² means 5 times x, then squared.",
                type: "true_false",
                correctAnswer: "false",
            },
            {
                id: "q5",
                text: "Solve for x: x/4 = 6",
                type: "fill_blank",
                correctAnswer: "24",
            },
        ],
    },
    {
        id: "ex_003",
        title: "Water Cycle Basics",
        description:
            "Learn about the stages of the water cycle through interactive questions.",
        type: "multiple_choice",
        subject: "science",
        difficulty: "easy",
        pointsPerQuestion: 10,
        createdBy: "u_teacher_001",
        createdAt: "2026-03-08T09:30:00Z",
        status: "active",
        tags: ["water cycle", "earth science"],
        questions: [
            {
                id: "q1",
                text: "Which process turns liquid water into water vapor?",
                type: "multiple_choice",
                options: [
                    "Condensation",
                    "Evaporation",
                    "Precipitation",
                    "Collection",
                ],
                correctAnswer: "Evaporation",
                explanation:
                    "Evaporation is the process where liquid water absorbs heat energy and changes into a gas (water vapor). Burning is a chemical reaction involving fire and oxygen, not a phase change of water.",
            },
            {
                id: "q2",
                text: "Rain, snow, and hail are all forms of ______.",
                type: "fill_blank",
                correctAnswer: "precipitation",
                explanation:
                    "Precipitation is the general term for any water that falls from the atmosphere to the ground. This includes rain, snow, sleet, and hail.",
            },
            {
                id: "q3",
                text: "Clouds are formed by condensation of water vapor.",
                type: "true_false",
                correctAnswer: "true",
                explanation:
                    "Condensation occurs when water vapor (gas) in the air cools down and changes back into tiny liquid water droplets. These droplets gather together to form clouds.",
            },
            {
                id: "q4",
                text: "What is the main source of energy that drives the water cycle?",
                type: "multiple_choice",
                options: ["The Moon", "The Sun", "Wind", "Ocean currents"],
                correctAnswer: "The Sun",
                explanation:
                    "The Sun provides the heat energy necessary to evaporate water from oceans, lakes, and rivers, powering the entire cycle. While the Moon affects tides, it does not drive the water cycle.",
            },
        ],
    },
    {
        id: "ex_004",
        title: "Ancient Civilizations Quiz",
        description:
            "Test your knowledge of early human civilizations around the world.",
        type: "multiple_choice",
        subject: "history",
        difficulty: "medium",
        pointsPerQuestion: 10,
        createdBy: "u_teacher_001",
        createdAt: "2026-03-10T11:00:00Z",
        status: "active",
        tags: ["ancient history", "civilizations"],
        questions: [
            {
                id: "q1",
                text: "Which ancient civilization built the pyramids of Giza?",
                type: "multiple_choice",
                options: [
                    "Mesopotamia",
                    "Ancient Egypt",
                    "Indus Valley",
                    "Ancient Greece",
                ],
                correctAnswer: "Ancient Egypt",
            },
            {
                id: "q2",
                text: "The Code of Hammurabi is associated with which civilization?",
                type: "multiple_choice",
                options: ["Egypt", "China", "Mesopotamia", "Rome"],
                correctAnswer: "Mesopotamia",
                explanation:
                    "The Code of Hammurabi is one of the oldest deciphered writings of significant length in the world. It was created by the Babylonian King Hammurabi, who ruled in the ancient region of Mesopotamia.",
            },
            {
                id: "q3",
                text: "The Great Wall was primarily built by the Ancient Romans.",
                type: "true_false",
                correctAnswer: "false",
                explanation:
                    "This statement is false. The Great Wall of China was built by various Chinese dynasties over centuries to protect against northern invasions. The Ancient Romans built structures like Hadrian's Wall in Britain, not the Great Wall.",
            },
            {
                id: "q4",
                text: "Which river was central to the development of Ancient Egyptian civilization?",
                type: "fill_blank",
                correctAnswer: "Nile",
                explanation:
                    "The Nile River was central to Ancient Egyptian civilization. Its predictable annual flooding provided fertile soil for agriculture and was essential for transportation, making it the lifeline of the society.",
            },
        ],
    },
    {
        id: "ex_005",
        title: "Vocabulary Builder: Environment",
        description:
            "Expand your English vocabulary related to the environment and nature.",
        type: "multiple_choice",
        subject: "english",
        difficulty: "medium",
        pointsPerQuestion: 10,
        createdBy: "u_teacher_001",
        createdAt: "2026-03-12T15:00:00Z",
        status: "active",
        tags: ["vocabulary", "environment"],
        questions: [
            {
                id: "q1",
                text: "What does 'biodegradable' mean?",
                type: "multiple_choice",
                options: [
                    "Able to be broken down by natural processes",
                    "Made of plastic",
                    "Harmful to the environment",
                    "Unable to be recycled",
                ],
                correctAnswer: "Able to be broken down by natural processes",
                explanation:
                    "If a material is biodegradable, it means that living organisms, such as bacteria or fungi, can break it down naturally into simpler, harmless substances over time, unlike materials like plastic that persist for centuries.",
            },
            {
                id: "q2",
                text: "A species that is at risk of extinction is called ______.",
                type: "fill_blank",
                correctAnswer: "endangered",
            },
            {
                id: "q3",
                text: "'Sustainable' means using resources in a way that preserves them for the future.",
                type: "true_false",
                correctAnswer: "true",
                explanation:
                    "Sustainability is the practice of using natural resources responsibly today so that they will still be available for future generations. Therefore, the statement is true.",
            },
            {
                id: "q4",
                text: "Which word means 'the variety of life in a particular habitat'?",
                type: "multiple_choice",
                options: ["Biodiversity", "Pollution", "Erosion", "Habitat"],
                correctAnswer: "Biodiversity",
                explanation:
                    "Biodiversity refers to the variety and variability of life on Earth. It encompasses the different species of plants, animals, and microorganisms living in a specific habitat or ecosystem.",
            },
            {
                id: "q5",
                text: "The opposite of 'renewable' energy is ______ energy.",
                type: "fill_blank",
                correctAnswer: "non-renewable",
                explanation:
                    "Renewable energy comes from sources that naturally replenish themselves, like sunlight or wind. The opposite, 'non-renewable' energy, comes from finite sources that will eventually run out, such as fossil fuels like coal, oil, and natural gas.",
            },
        ],
    },
    {
        id: "ex_006",
        title: "Fractions & Decimals",
        description:
            "Practice converting and comparing fractions and decimals.",
        type: "multiple_choice",
        subject: "math",
        difficulty: "easy",
        pointsPerQuestion: 10,
        createdBy: "u_teacher_001",
        createdAt: "2026-03-15T10:00:00Z",
        status: "active",
        tags: ["fractions", "decimals"],
        questions: [
            {
                id: "q1",
                text: "What is 3/4 as a decimal?",
                type: "multiple_choice",
                options: ["0.25", "0.5", "0.75", "0.34"],
                correctAnswer: "0.75",
            },
            {
                id: "q2",
                text: "Which fraction is equivalent to 0.5?",
                type: "multiple_choice",
                options: ["1/3", "1/2", "2/5", "3/4"],
                correctAnswer: "1/2",
            },
            {
                id: "q3",
                text: "0.25 is greater than 1/5.",
                type: "true_false",
                correctAnswer: "true",
            },
            {
                id: "q4",
                text: "Convert 2/5 to a decimal.",
                type: "fill_blank",
                correctAnswer: "0.4",
            },
        ],
    },
    {
        id: "ex_007",
        title: "Photosynthesis Explained",
        description:
            "Reading comprehension about how plants make their own food.",
        type: "reading_comprehension",
        subject: "science",
        difficulty: "medium",
        pointsPerQuestion: 10,
        createdBy: "u_teacher_001",
        createdAt: "2026-03-18T13:00:00Z",
        status: "active",
        tags: ["biology", "plants"],
        passage: `Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. This remarkable process is the foundation of almost all life on Earth because it produces the oxygen we breathe and the food that sustains the food chain.

The process takes place mainly in the leaves of plants, inside specialized structures called chloroplasts. Chloroplasts contain a green pigment called chlorophyll, which absorbs sunlight. Using this light energy, plants take in carbon dioxide from the air through tiny pores called stomata, and water from the soil through their roots. These ingredients are then transformed into glucose (a type of sugar) and oxygen.

The overall chemical equation for photosynthesis can be summarized as:
Carbon dioxide + Water + Light energy → Glucose + Oxygen

The glucose produced is used by the plant for energy and growth, or stored as starch. The oxygen is released into the atmosphere as a byproduct — and that is the very oxygen that animals and humans depend on to survive. Without photosynthesis, life as we know it would not exist.`,
        questions: [
            {
                id: "q1",
                text: "Where does photosynthesis mainly take place in plants?",
                type: "multiple_choice",
                options: ["Roots", "Stems", "Leaves", "Flowers"],
                correctAnswer: "Leaves",
                explanation:
                    "The second paragraph states, 'The process takes place mainly in the leaves of plants, inside specialized structures called chloroplasts.'",
            },
            {
                id: "q2",
                text: "What is the green pigment that absorbs sunlight called?",
                type: "fill_blank",
                correctAnswer: "chlorophyll",
                explanation:
                    "According to the passage, 'Chloroplasts contain a green pigment called chlorophyll, which absorbs sunlight.'",
            },
            {
                id: "q3",
                text: "Photosynthesis produces oxygen as a byproduct.",
                type: "true_false",
                correctAnswer: "true",
                explanation:
                    "The final paragraph explains that 'The oxygen is released into the atmosphere as a byproduct,' making this statement true.",
            },
            {
                id: "q4",
                text: "What are the two main products of photosynthesis?",
                type: "multiple_choice",
                options: [
                    "Carbon dioxide and water",
                    "Glucose and oxygen",
                    "Nitrogen and oxygen",
                    "Starch and carbon dioxide",
                ],
                correctAnswer: "Glucose and oxygen",
                explanation:
                    "The chemical equation in the passage shows that the inputs (Carbon dioxide + Water + Light energy) are transformed into 'Glucose + Oxygen,' which are the two main products.",
            },
            {
                id: "q5",
                text: "Tiny pores on leaves that take in carbon dioxide are called ______.",
                type: "fill_blank",
                correctAnswer: "stomata",
                explanation:
                    "The second paragraph states that plants 'take in carbon dioxide from the air through tiny pores called stomata.'",
            },
        ],
    },
    {
        id: "ex_008",
        title: "General Knowledge Round",
        description: "A mixed bag of questions to test your general knowledge.",
        type: "multiple_choice",
        subject: "general",
        difficulty: "easy",
        pointsPerQuestion: 10,
        createdBy: "u_teacher_001",
        createdAt: "2026-03-20T16:00:00Z",
        status: "active",
        tags: ["general knowledge", "trivia"],
        questions: [
            {
                id: "q1",
                text: "What is the largest planet in our solar system?",
                type: "multiple_choice",
                options: ["Earth", "Saturn", "Jupiter", "Neptune"],
                correctAnswer: "Jupiter",
            },
            {
                id: "q2",
                text: "How many continents are there on Earth?",
                type: "fill_blank",
                correctAnswer: "7",
            },
            {
                id: "q3",
                text: "The Great Barrier Reef is located in Australia.",
                type: "true_false",
                correctAnswer: "true",
            },
            {
                id: "q4",
                text: "What is the chemical symbol for gold?",
                type: "multiple_choice",
                options: ["Go", "Gd", "Au", "Ag"],
                correctAnswer: "Au",
            },
        ],
    },
    {
        id: "ex_009",
        title: "12 days of Christmas",
        description:
            "Listen to a short song and answer comprehension questions.",
        type: "video_comprehension",
        subject: "english",
        difficulty: "easy",
        pointsPerQuestion: 10,
        createdBy: "u_teacher_001",
        createdAt: "2026-10-14T12:00:00Z",
        status: "active",
        tags: ["video", "song", "funny"],
        video: `https://youtu.be/m4OD9jCVxAs?si=DQA4qFxBDEFbJ7Ag`,
        questions: [
            {
                id: "q1",
                text: "On the first day of chirstmas, please Santa give to me... ___________.",
                type: "fill_blank",
                correctAnswer: "A jet-powered rocket ski",
                explanation:
                    "For more details, you can watch the cartoon of Phineas and Ferb, Christmas special.",
            },
            {
                id: "q2",
                text: "Which date didn't have a legit wish stated?",
                type: "multiple_choice",
                options: ["2nd", "5th", "9th", "12th"],
                correctAnswer: "9th",
                explanation: `Perry just do his "Grrr" which it doesn't mean anything.`,
            },
            {
                id: "q3",
                text: 'On the 11th day, what does "my own set of wheels" means?',
                type: "multiple_choice",
                options: [
                    "A bicycle",
                    "A tricycle",
                    "A car",
                    "A set of spare tires",
                ],
                correctAnswer: "A car",
                explanation: `My own set of wheels means a car.`,
            },
            {
                id: "q4",
                text: "On the third day of Chistmas, please Santa give to me, a _________.",
                type: "fill_blank",
                correctAnswer: "sash full of patches",
            },
            {
                id: "q5",
                text: "For the 5th day guy, they rambled nonsense, interrupting the song's flow, and want to change his wish.",
                type: "true_false",
                correctAnswer: "true",
                explanation: `Doofenshimirtz normally keeps rambling, going like "the entire tri-state area", "The entire tri-state area... at least a large portion of it, I-I don't wanna get to greedy", "The entire tri-state... You know, how about just two of the three states, that's fair, right? Deal?", "One single state! I-I feel like I was overreaching before, just-just one state area will be fine. ... Go on with the song", "FIVE GOLDEN RINGS~... You know I had to sing at that way at least once, it's tradition, and I'm traditional", "You know, promotion to Colornal sounds pretty sweet, is it, is it too late to change mine?", "You know it's way too much pressure being put on the spot for one thing to ask for this all powerful gift-giving saint, I'm just saying", and "How about just some almond brittle, that's a realistic request, right?"... And yes, each time the music stops and want to change his wish...`,
            },
        ],
    },
];

/**
 * Initialize exercises in localStorage
 */
function initExercises() {
    if (!localStorage.getItem(STORAGE_KEY_EXERCISES)) {
        localStorage.setItem(
            STORAGE_KEY_EXERCISES,
            JSON.stringify(DEFAULT_EXERCISES),
        );
    }
}

/**
 * Get all exercises
 * @returns {Array}
 */
function getExercises() {
    initExercises();
    return JSON.parse(localStorage.getItem(STORAGE_KEY_EXERCISES) || "[]");
}

/**
 * Save exercises
 * @param {Array} exercises
 */
function saveExercises(exercises) {
    localStorage.setItem(STORAGE_KEY_EXERCISES, JSON.stringify(exercises));
}

/**
 * Find exercise by ID
 * @param {string} id
 * @returns {Object|null}
 */
function findExerciseById(id) {
    return getExercises().find((e) => e.id === id) || null;
}

/**
 * Get active exercises only
 * @returns {Array}
 */
function getActiveExercises() {
    return getExercises().filter((e) => e.status === STATUS_ACTIVE);
}

/**
 * Create a new exercise
 * @param {Object} data
 * @returns {Object}
 */
function createExercise(data) {
    const exercises = getExercises();
    const newExercise = {
        id: "ex_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        title: data.title,
        description: data.description || "",
        type: data.type || EXERCISE_TYPE_MCQ,
        subject: data.subject || SUBJECT_GENERAL,
        difficulty: data.difficulty || DIFFICULTY_MEDIUM,
        pointsPerQuestion:
            data.pointsPerQuestion || DEFAULT_POINTS_PER_QUESTION,
        createdBy: data.createdBy,
        createdAt: new Date().toISOString(),
        status: STATUS_ACTIVE,
        tags: data.tags || [],
        passage: data.passage || null,
        video: data.video || null, //Elton added
        questions: data.questions || [],
    };
    exercises.push(newExercise);
    saveExercises(exercises);
    return newExercise;
}

/**
 * Update exercise
 * @param {string} id
 * @param {Object} updates
 * @returns {Object|null}
 */
function updateExercise(id, updates) {
    const exercises = getExercises();
    const index = exercises.findIndex((e) => e.id === id);
    if (index === -1) return null;
    exercises[index] = {
        ...exercises[index],
        ...updates,
        id: exercises[index].id,
    };
    saveExercises(exercises);
    return exercises[index];
}

/**
 * Permanently delete an exercise from storage.
 * Different from setExerciseEnabled(..., false) which only hides it from students.
 * @param {string} id
 * @returns {boolean}
 */
function deleteExercise(id) {
    const exercises = getExercises();
    const filtered = exercises.filter((e) => e.id !== id);
    if (filtered.length === exercises.length) return false;
    saveExercises(filtered);
    return true;
}

/**
 * Enable or disable an exercise (for in-class tests / controlled release).
 * Disabled (inactive) exercises are hidden from students via getActiveExercises().
 * @param {string} id
 * @param {boolean} enabled - true = active (students can see/attempt), false = inactive
 * @returns {Object|null} updated exercise or null
 */
function setExerciseEnabled(id, enabled) {
    return updateExercise(id, {
        status: enabled ? STATUS_ACTIVE : STATUS_INACTIVE,
    });
}

/**
 * Toggle exercise enabled/disabled state
 * @param {string} id
 * @returns {Object|null}
 */
function toggleExerciseEnabled(id) {
    const ex = findExerciseById(id);
    if (!ex) return null;
    const nextEnabled = ex.status !== STATUS_ACTIVE;
    return setExerciseEnabled(id, nextEnabled);
}

/**
 * Calculate total possible score for an exercise
 * @param {Object} exercise
 * @returns {number}
 */
function getExerciseMaxScore(exercise) {
    const points = exercise.pointsPerQuestion || DEFAULT_POINTS_PER_QUESTION;
    return (exercise.questions || []).length * points;
}
