// ==========================================
// RECIPE DATA
// ==========================================

function makeRecipe(id, name, cuisine, diet, rating, time, image, ingredients, instructions) {
    return { id, name, cuisine, diet, rating, time, image, ingredients, instructions };
}

const recipes = [
    makeRecipe(1, "Butter Chicken", "Indian", "Non-Vegetarian", 4.8, "45 mins",
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
        ["500g chicken", "2 tomatoes", "1 onion", "2 tbsp butter", "1/2 cup cream", "1 tsp garam masala", "1 tsp chilli powder", "Salt to taste"],
        ["Heat butter in a pan.", "Add onion and cook until golden.", "Add tomatoes and spices.", "Add chicken and cook thoroughly.", "Add cream and simmer for 5 minutes.", "Serve hot with naan or rice."]),

    makeRecipe(2, "Chole Masala", "Indian", "Vegan", 4.7, "40 mins",
        "images/masala.jpg",
        ["2 cups chickpeas", "1 onion", "2 tomatoes", "1 tsp cumin", "1 tsp chilli powder", "1 tsp garam masala", "Salt to taste"],
        ["Soak chickpeas overnight and boil them.", "Heat oil and fry onions.", "Add tomatoes and spices.", "Add boiled chickpeas.", "Cook for 15 minutes.", "Serve with rice, roti or bhatura."]),

    makeRecipe(3, "Masala Dosa", "South Indian", "Vegetarian", 4.9, "35 mins",
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
        ["2 cups dosa batter", "3 potatoes", "1 onion", "1 tsp mustard seeds", "Curry leaves", "2 green chillies", "Salt to taste"],
        ["Prepare potato masala with onions and spices.", "Heat a dosa pan.", "Spread dosa batter into a thin circle.", "Add potato masala in the center.", "Fold and serve hot with chutney and sambar."]),

    makeRecipe(4, "Pongal", "South Indian", "Vegetarian", 4.7, "30 mins",
        "images/pongal.jpg",
        ["1 cup rice", "1/2 cup moong dal", "1 tsp cumin", "1 tsp black pepper", "Cashews", "Ghee", "Salt to taste"],
        ["Wash rice and moong dal.", "Cook them together until soft.", "Heat ghee and fry cumin, pepper and cashews.", "Mix the tempering with cooked rice and dal.", "Serve hot."]),

    makeRecipe(5, "Vada", "South Indian", "Vegetarian", 4.6, "30 mins",
        "images/vada.jpg",
        ["2 cups urad dal", "1 onion", "Green chillies", "Curry leaves", "Salt", "Oil for frying"],
        ["Soak urad dal for several hours.", "Grind into a thick batter.", "Add onions, chillies and curry leaves.", "Shape the batter into vadas.", "Deep fry until golden brown.", "Serve with sambar and chutney."]),

    makeRecipe(6, "Lemon Rice", "South Indian", "Vegetarian", 4.5, "20 mins",
        "images/lemon.jpg",
        ["2 cups cooked rice", "2 tbsp lemon juice", "1 tsp mustard seeds", "Peanuts", "Green chillies", "Curry leaves", "Turmeric", "Salt"],
        ["Heat oil in a pan.", "Add mustard seeds and peanuts.", "Add green chillies and curry leaves.", "Add turmeric.", "Mix in cooked rice.", "Add lemon juice and salt.", "Mix well and serve."]),

    makeRecipe(7, "Biryani", "South Indian", "Non-Vegetarian", 4.8, "60 mins",
        "images/biryani.jpg",
        ["500g chicken", "2 cups basmati rice", "2 onions", "2 tomatoes", "Biryani spices", "Mint leaves", "Coriander leaves", "Salt"],
        ["Marinate chicken with spices.", "Fry onions until golden.", "Cook chicken with tomatoes and spices.", "Add partially cooked rice.", "Layer rice with mint and coriander.", "Cover and cook on low heat.", "Serve hot."]),

    makeRecipe(8, "Fish Curry", "South Indian", "Non-Vegetarian", 4.7, "40 mins",
        "images/fish.jpg",
        ["500g fish", "1 onion", "2 tomatoes", "Tamarind", "Chilli powder", "Turmeric", "Coconut milk", "Salt"],
        ["Clean and marinate the fish.", "Prepare onion and tomato masala.", "Add spices and tamarind.", "Add coconut milk.", "Add fish pieces.", "Cook gently until fish is done.", "Serve with rice."]),

    makeRecipe(9, "Chicken Curry", "South Indian", "Non-Vegetarian", 4.8, "45 mins",
        "images/chickencurry.jpg",
        ["500g chicken", "2 onions", "2 tomatoes", "Ginger garlic paste", "Chilli powder", "Turmeric", "Coriander powder", "Salt"],
        ["Heat oil and fry onions.", "Add ginger garlic paste.", "Add tomatoes and spices.", "Add chicken pieces.", "Add water and cook until tender.", "Serve with rice or roti."]),

    makeRecipe(10, "Mirchi Bajji", "South Indian", "Vegetarian", 4.5, "25 mins",
        "images/mirchi.jpg",
        ["10 green chillies", "1 cup gram flour", "Rice flour", "Chilli powder", "Salt", "Water", "Oil for frying"],
        ["Wash and slit the green chillies.", "Prepare gram flour batter.", "Dip chillies in the batter.", "Deep fry until golden.", "Serve hot with chutney."]),

    makeRecipe(11, "Banana Chips", "South Indian", "Vegan", 4.6, "20 mins",
        "https://images.unsplash.com/photo-1599490659213-e2b9527bd087",
        ["Raw bananas", "Turmeric", "Salt", "Oil for frying"],
        ["Peel the raw bananas.", "Slice them very thinly.", "Soak briefly in salted water.", "Drain and dry.", "Deep fry until crispy.", "Add salt and serve."]),

    makeRecipe(12, "Payasam", "South Indian", "Vegetarian", 4.8, "30 mins",
        "images/payasam.jpg",
        ["1 litre milk", "1/2 cup rice", "1/2 cup sugar", "Cardamom", "Cashews", "Raisins"],
        ["Boil the milk.", "Add washed rice.", "Cook until rice becomes soft.", "Add sugar and cardamom.", "Fry cashews and raisins in ghee.", "Add them to the payasam.", "Serve warm or chilled."]),

    makeRecipe(13, "Bibimbap", "Korean", "Vegetarian", 4.8, "35 mins",
        "https://images.unsplash.com/photo-1553163147-622ab57be1c7",
        ["Cooked rice", "Carrot", "Spinach", "Mushrooms", "Bean sprouts", "Egg", "Gochujang"],
        ["Cook rice.", "Prepare vegetables separately.", "Place rice in a bowl.", "Arrange vegetables on top.", "Add fried egg.", "Add gochujang.", "Mix before eating."]),

    makeRecipe(14, "Kimchi Fried Rice", "Korean", "Vegetarian", 4.7, "20 mins",
        "images/kimchi.jpg",
        ["Cooked rice", "Kimchi", "Spring onions", "Soy sauce", "Sesame oil", "Egg"],
        ["Heat oil in a pan.", "Add kimchi and stir fry.", "Add cooked rice.", "Add soy sauce.", "Mix well.", "Top with a fried egg and spring onions."]),

    makeRecipe(15, "Korean Fried Chicken", "Korean", "Non-Vegetarian", 4.9, "45 mins",
        "images/koreanfriedchicken.jpg",
        ["500g chicken", "Corn flour", "Soy sauce", "Gochujang", "Honey", "Garlic", "Oil"],
        ["Coat chicken with corn flour.", "Deep fry until crispy.", "Prepare sauce using gochujang, soy sauce and honey.", "Toss fried chicken in the sauce.", "Serve hot."]),

    makeRecipe(16, "Sushi", "Japanese", "Non-Vegetarian", 4.8, "50 mins",
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
        ["Sushi rice", "Nori sheets", "Cucumber", "Avocado", "Fresh fish", "Rice vinegar"],
        ["Cook and season sushi rice.", "Place nori on a sushi mat.", "Spread rice over the nori.", "Add vegetables and fish.", "Roll tightly.", "Cut into pieces and serve."]),

    makeRecipe(17, "Ramen", "Japanese", "Non-Vegetarian", 4.8, "40 mins",
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
        ["Ramen noodles", "Chicken broth", "Soy sauce", "Egg", "Spring onions", "Mushrooms"],
        ["Prepare the broth.", "Add soy sauce.", "Cook ramen noodles.", "Place noodles in a bowl.", "Pour hot broth over noodles.", "Add egg, mushrooms and spring onions."]),

    makeRecipe(18, "Japanese Curry Rice", "Japanese", "Vegetarian", 4.7, "45 mins",
        "images/curry.jpg",
        ["Rice", "Potatoes", "Carrots", "Onion", "Japanese curry roux", "Water"],
        ["Cook onions until soft.", "Add potatoes and carrots.", "Add water and cook vegetables.", "Add curry roux.", "Simmer until thick.", "Serve over steamed rice."]),

    makeRecipe(19, "Margherita Pizza", "Italian", "Vegetarian", 4.7, "30 mins",
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
        ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Basil", "Olive oil"],
        ["Roll out the pizza dough.", "Spread tomato sauce.", "Add mozzarella.", "Bake until the crust is golden.", "Add fresh basil and serve."]),

    makeRecipe(20, "Pasta Alfredo", "Italian", "Vegetarian", 4.6, "25 mins",
        "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
        ["Pasta", "Butter", "Cream", "Parmesan cheese", "Garlic", "Black pepper"],
        ["Cook pasta.", "Melt butter and sauté garlic.", "Add cream.", "Add Parmesan cheese.", "Mix in cooked pasta.", "Season with black pepper."]),

    makeRecipe(21, "Vegetable Tacos", "Mexican", "Vegetarian", 4.6, "20 mins",
        "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
        ["Taco shells", "Bell peppers", "Onion", "Corn", "Beans", "Cheese", "Salsa"],
        ["Cook vegetables and beans.", "Warm taco shells.", "Fill shells with vegetables.", "Add cheese and salsa.", "Serve immediately."]),

    makeRecipe(22, "Vegetable Fried Rice", "Chinese", "Vegan", 4.5, "25 mins",
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
        ["Cooked rice", "Carrot", "Beans", "Capsicum", "Spring onions", "Soy sauce", "Garlic"],
        ["Heat oil in a wok.", "Add garlic and vegetables.", "Stir fry on high heat.", "Add cooked rice.", "Add soy sauce.", "Mix well and serve."]),

    makeRecipe(23, "Pancakes", "American", "Vegetarian", 4.4, "20 mins",
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
        ["1 cup flour", "1 cup milk", "1 egg", "2 tbsp sugar", "1 tsp baking powder", "Butter"],
        ["Mix flour, sugar and baking powder.", "Add milk and egg.", "Mix into a smooth batter.", "Cook pancakes on a hot pan.", "Serve with butter and syrup."]),

    makeRecipe(24, "Greek Salad", "American", "Vegetarian", 4.3, "15 mins",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
        ["Lettuce", "Cucumber", "Tomatoes", "Olives", "Feta cheese", "Olive oil"],
        ["Chop vegetables.", "Add olives and feta cheese.", "Drizzle with olive oil.", "Mix well and serve fresh."])
];
// ==========================================
// NUTRITION DATA FOR ALL RECIPES
// Approximate values per serving
// ==========================================

const nutritionData = {
    1:  { calories: 490, protein: 32, carbs: 18, fat: 34, fiber: 3 },
    2:  { calories: 280, protein: 14, carbs: 42, fat: 7, fiber: 12 },
    3:  { calories: 320, protein: 8, carbs: 48, fat: 11, fiber: 4 },
    4:  { calories: 290, protein: 9, carbs: 42, fat: 10, fiber: 3 },
    5:  { calories: 180, protein: 6, carbs: 24, fat: 8, fiber: 3 },
    6:  { calories: 310, protein: 7, carbs: 48, fat: 11, fiber: 4 },
    7:  { calories: 520, protein: 28, carbs: 65, fat: 18, fiber: 3 },
    8:  { calories: 260, protein: 24, carbs: 12, fat: 14, fiber: 3 },
    9:  { calories: 350, protein: 30, carbs: 14, fat: 20, fiber: 4 },
    10: { calories: 220, protein: 5, carbs: 28, fat: 11, fiber: 3 },
    11: { calories: 160, protein: 2, carbs: 25, fat: 8, fiber: 2 },
    12: { calories: 240, protein: 7, carbs: 42, fat: 6, fiber: 1 },
    13: { calories: 450, protein: 15, carbs: 65, fat: 14, fiber: 6 },
    14: { calories: 380, protein: 9, carbs: 58, fat: 13, fiber: 4 },
    15: { calories: 480, protein: 30, carbs: 35, fat: 24, fiber: 2 },
    16: { calories: 350, protein: 18, carbs: 48, fat: 10, fiber: 4 },
    17: { calories: 420, protein: 22, carbs: 52, fat: 14, fiber: 3 },
    18: { calories: 340, protein: 7, carbs: 58, fat: 10, fiber: 6 },
    19: { calories: 285, protein: 13, carbs: 35, fat: 10, fiber: 2 },
    20: { calories: 520, protein: 16, carbs: 62, fat: 24, fiber: 3 },
    21: { calories: 310, protein: 12, carbs: 40, fat: 12, fiber: 8 },
    22: { calories: 300, protein: 7, carbs: 50, fat: 9, fiber: 5 },
    23: { calories: 260, protein: 7, carbs: 38, fat: 9, fiber: 2 },
    24: { calories: 180, protein: 5, carbs: 10, fat: 14, fiber: 4 }
};

// Attach nutrition values to every built-in recipe
recipes.forEach(recipe => {
    recipe.nutrition = nutritionData[recipe.id] || {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        fiber: 0
    };
});

// ==========================================
// LOGIN / SESSION
// ==========================================

const currentUser = sessionStorage.getItem("currentUser");
const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

function getUserStorageKey(key) {
    if (!currentUser) return key;

    try {
        const user = JSON.parse(currentUser);
        if (!user || !user.email) return key;
        return key + "_" + user.email.toLowerCase();
    } catch (error) {
        return key;
    }
}


// ==========================================
// LOAD CUSTOM RECIPES
// ==========================================

function loadCustomRecipes() {
    const savedRecipes = JSON.parse(
        localStorage.getItem(getUserStorageKey("customRecipes")) || "[]"
    );

    savedRecipes.forEach(recipe => {
        if (!recipes.some(item => item.id === recipe.id)) {
            recipes.push(recipe);
        }
    });
}


// ==========================================
// PAGE ACCESS PROTECTION
// ==========================================

const currentPath = window.location.pathname;
const onLoginPage = currentPath.endsWith("login.html");
const onSignupPage = currentPath.endsWith("signup.html");

const onIndexPage =
    currentPath.endsWith("index.html") ||
    currentPath.endsWith("/") ||
    currentPath.endsWith("\\") ||
    currentPath === "";

if (onLoginPage && isLoggedIn && currentUser) {
    window.location.replace("index.html");
}

if (onIndexPage) {
    if (!isLoggedIn || !currentUser) {
        window.location.replace("login.html");
    } else {
        try {
            const user = JSON.parse(currentUser);
            const welcomeUser = document.getElementById("welcomeUser");

            if (welcomeUser) {
                welcomeUser.textContent = "Hi, " + user.name + " 👋";
            }

            loadCustomRecipes();
            displayRecipes();
        } catch (error) {
            sessionStorage.removeItem("isLoggedIn");
            sessionStorage.removeItem("currentUser");
            window.location.replace("login.html");
        }
    }
}


// ==========================================
// BACK BUTTON / CACHE PROTECTION
// ==========================================

window.addEventListener("pageshow", function () {
    const loggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    const activeUser = sessionStorage.getItem("currentUser");
    const loginPage = window.location.pathname.endsWith("login.html");

    const indexPage =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/");

    if (loginPage && loggedIn && activeUser) {
        window.location.replace("index.html");
        return;
    }

    if (indexPage && (!loggedIn || !activeUser)) {
        window.location.replace("login.html");
    }
});


// ==========================================
// SIGNUP
// ==========================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim().toLowerCase();
        const password = document.getElementById("signupPassword").value;
        const message = document.getElementById("signupMessage");
        const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (name.length < 6) {
            message.textContent = "Name must contain at least 6 characters.";
            message.style.color = "#b76e79";
            return;
        }

        if (!gmailPattern.test(email)) {
            message.textContent = "Please enter a valid Gmail address ending with @gmail.com.";
            message.style.color = "#b76e79";
            return;
        }

        if (password.length < 6) {
            message.textContent = "Password must contain at least 6 characters.";
            message.style.color = "#b76e79";
            return;
        }

        let users = JSON.parse(localStorage.getItem("users") || "[]");

        const existingUser = users.find(user =>
            user.email && user.email.toLowerCase() === email
        );

        if (existingUser) {
            message.textContent = "This email is already registered.";
            message.style.color = "#b76e79";
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        message.textContent = "Account created successfully! ✨";
        message.style.color = "#6f9278";

        setTimeout(() => window.location.replace("login.html"), 1000);
    });
}


// ==========================================
// LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const password = document.getElementById("loginPassword").value;
        const message = document.getElementById("loginMessage");
        const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!gmailPattern.test(email)) {
            message.textContent = "Please enter a valid Gmail address ending with @gmail.com.";
            message.style.color = "#b76e79";
            return;
        }

        if (password.length < 6) {
            message.textContent = "Password must contain at least 6 characters.";
            message.style.color = "#b76e79";
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const user = users.find(user =>
            user.email &&
            user.email.toLowerCase() === email &&
            user.password === password
        );

        if (user) {
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("currentUser", JSON.stringify(user));
            localStorage.removeItem("currentUser");

            message.textContent = "Login successful! Welcome back ✨";
            message.style.color = "#6f9278";

            setTimeout(() => window.location.replace("index.html"), 700);
        } else {
            message.textContent = "Invalid Gmail address or password.";
            message.style.color = "#b76e79";
        }
    });
}


// ==========================================
// DISPLAY RECIPES
// ==========================================

function displayRecipes() {
    const container = document.getElementById("recipeContainer");
    if (!container) return;

    const searchInput = document.getElementById("searchInput");
    const cuisineFilter = document.getElementById("cuisineFilter");
    const dietFilter = document.getElementById("dietFilter");

    const search = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const selectedCuisine = cuisineFilter ? cuisineFilter.value : "all";
    const selectedDiet = dietFilter ? dietFilter.value : "all";

    const filteredRecipes = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(search);

        const ingredientMatch = (recipe.ingredients || []).some(ingredient =>
            ingredient.toLowerCase().includes(search)
        );

        const cuisineMatch = selectedCuisine === "all" || recipe.cuisine === selectedCuisine;
        const dietMatch = selectedDiet === "all" || recipe.diet === selectedDiet;

        return (nameMatch || ingredientMatch) && cuisineMatch && dietMatch;
    });

    container.innerHTML = "";

    if (filteredRecipes.length === 0) {
        container.innerHTML = `
            <div class="empty-message">
                <h3>😔 No recipes found</h3>
                <p>Try another recipe, ingredient or filter.</p>
            </div>
        `;
        return;
    }

    filteredRecipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";

        card.innerHTML = `
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.name}">
                <span class="recipe-tag">${recipe.cuisine}</span>
            </div>

            <div class="recipe-info">
                <h3>${recipe.name}</h3>
                <p class="recipe-description">
                    A delicious ${recipe.diet.toLowerCase()} recipe that's perfect for your next meal.
                </p>

                <div class="recipe-meta">
                    <span class="meta-item">⭐ ${recipe.rating}</span>
                    <span class="meta-item">⏱️ ${recipe.time}</span>
                    <span class="meta-item">🌱 ${recipe.diet}</span>
                </div>

                <div class="recipe-buttons">
                    <button class="view-btn" onclick="viewRecipe(${recipe.id})">View Recipe</button>
                    <button class="favorite-btn" onclick="saveRecipe(${recipe.id})">❤️</button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}


// ==========================================
// VIEW RECIPE (WITH NUTRITION)
// ==========================================

let currentRecipeId = null;

function viewRecipe(id) {
    const recipe = recipes.find(item => Number(item.id) === Number(id));
    if (!recipe) return;

    const modal = document.getElementById("recipeModal");
    const modalContent = document.getElementById("modalContent");
    currentRecipeId = id;

    // Normalize ingredients (handles arrays and old string data)
    let ingredients = recipe.ingredients || [];
    if (typeof ingredients === "string") {
        ingredients = ingredients.split(/\r?\n|,/);
    }

    const ingredientsHTML = ingredients
        .map(ingredient => `<li>${ingredient.trim()}</li>`)
        .join("");

    // Normalize instructions
    let instructions = recipe.instructions || [];
    if (typeof instructions === "string") {
        instructions = instructions.split(/\r?\n/);
    }

    const instructionsHTML = instructions
        .map(step => step.trim())
        .filter(Boolean)
        .map(step => `<li>${step}</li>`)
        .join("");

    const nutrition = recipe.nutrition || {};

    function nutritionValue(value, unit) {
        return value !== undefined && value !== null && value !== ""
            ? `${value} ${unit}`
            : "Not provided";
    }

    modalContent.innerHTML = `
        <h2>${recipe.name}</h2>

        <img src="${recipe.image}" alt="${recipe.name}">

        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        <p><strong>Diet:</strong> ${recipe.diet}</p>
        <p><strong>Cooking Time:</strong> ${recipe.time}</p>
        <p><strong>Rating:</strong> ⭐ ${recipe.rating}</p>

        <h3>🛒 Ingredients</h3>
        <ul class="recipe-ingredients-list">${ingredientsHTML}</ul>

        <h3>👩‍🍳 Cooking Instructions</h3>
        <ol class="recipe-instructions-list">${instructionsHTML}</ol>

        <section class="nutrition-section" style="
            margin-top:25px;
            padding:20px;
            border-radius:15px;
            background:#fff8ed;
            border:1px solid #ead9c5;
        ">
            <h3 style="margin-top:0;">🥗 Nutrition Facts</h3>
            <p style="font-size:13px;color:#777;">Per serving (estimated)</p>

            <div style="
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(120px,1fr));
                gap:12px;
            ">
                <div style="background:#fce8d5;padding:15px;border-radius:12px;text-align:center;">
                    <strong style="font-size:22px;">${nutritionValue(nutrition.calories, "kcal")}</strong>
                    <p>Calories</p>
                </div>

                <div style="background:#e1f0df;padding:15px;border-radius:12px;text-align:center;">
                    <strong style="font-size:22px;">${nutritionValue(nutrition.protein, "g")}</strong>
                    <p>Protein</p>
                </div>

                <div style="background:#e1ebf8;padding:15px;border-radius:12px;text-align:center;">
                    <strong style="font-size:22px;">${nutritionValue(nutrition.carbs, "g")}</strong>
                    <p>Carbohydrates</p>
                </div>

                <div style="background:#f5e1ed;padding:15px;border-radius:12px;text-align:center;">
                    <strong style="font-size:22px;">${nutritionValue(nutrition.fat, "g")}</strong>
                    <p>Fat</p>
                </div>

                <div style="background:#eae5d6;padding:15px;border-radius:12px;text-align:center;">
                    <strong style="font-size:22px;">${nutritionValue(nutrition.fiber, "g")}</strong>
                    <p>Fiber</p>
                </div>
            </div>
        </section>

        <div class="rating">
            <h3>⭐ Rate this Recipe</h3>
            <button onclick="rateRecipe(${recipe.id}, 1)">⭐</button>
            <button onclick="rateRecipe(${recipe.id}, 2)">⭐</button>
            <button onclick="rateRecipe(${recipe.id}, 3)">⭐</button>
            <button onclick="rateRecipe(${recipe.id}, 4)">⭐</button>
            <button onclick="rateRecipe(${recipe.id}, 5)">⭐</button>
        </div>

        <button class="share-btn" onclick="shareRecipe(${recipe.id})">📤 Share Recipe</button>

        <hr>

        <section class="comments-section">
            <h3>💬 Comments</h3>
            <div id="commentsContainer"></div>
            <textarea id="commentInput" placeholder="Write a comment..." rows="3"></textarea>
            <button onclick="addComment()">Post Comment</button>
        </section>
    `;

    displayComments(id);
    modal.style.display = "block";
}


// ==========================================
// CLOSE RECIPE MODAL
// ==========================================

function closeModal() {
    const modal = document.getElementById("recipeModal");
    if (modal) modal.style.display = "none";
}


// ==========================================
// COMMENTS
// ==========================================

function getComments() {
    return JSON.parse(localStorage.getItem("recipeComments") || "{}");
}

function addComment() {
    const commentInput = document.getElementById("commentInput");
    if (!commentInput) return;

    const comment = commentInput.value.trim();

    if (!comment) {
        alert("Please write a comment first.");
        return;
    }

    if (!currentUser) {
        alert("Please login to comment.");
        return;
    }

    if (!currentRecipeId) {
        alert("Please open a recipe first.");
        return;
    }

    const user = JSON.parse(currentUser);
    const comments = getComments();

    if (!comments[currentRecipeId]) {
        comments[currentRecipeId] = [];
    }

    comments[currentRecipeId].push({
        name: user.name,
        email: user.email,
        text: comment,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("recipeComments", JSON.stringify(comments));
    commentInput.value = "";
    displayComments(currentRecipeId);
}

function displayComments(recipeId) {
    const commentsContainer = document.getElementById("commentsContainer");
    if (!commentsContainer) return;

    const comments = getComments();
    const recipeComments = comments[recipeId] || [];

    if (recipeComments.length === 0) {
        commentsContainer.innerHTML = `
            <p class="no-comments">No comments yet. Be the first to comment! 💬</p>
        `;
        return;
    }

    commentsContainer.innerHTML = recipeComments.map(comment => `
        <div class="comment-card">
            <strong>👤 ${comment.name}</strong>
            <p>${comment.text}</p>
            <small>${comment.date}</small>
        </div>
    `).join("");
}


// ==========================================
// FORGOT PASSWORD
// ==========================================

const forgotPasswordForm = document.getElementById("forgotPasswordForm");

if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("resetEmail").value.trim().toLowerCase();
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const message = document.getElementById("resetMessage");
        const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!gmailPattern.test(email)) {
            message.textContent = "Please enter a valid Gmail address ending with @gmail.com.";
            message.style.color = "#b76e79";
            return;
        }

        let users = JSON.parse(localStorage.getItem("users") || "[]");

        const userIndex = users.findIndex(user =>
            user.email && user.email.toLowerCase() === email
        );

        if (userIndex === -1) {
            message.textContent = "No account was found for this email.";
            message.style.color = "#b76e79";
            return;
        }

        if (newPassword.length < 6) {
            message.textContent = "Use at least 6 characters for your password.";
            message.style.color = "#b76e79";
            return;
        }

        if (newPassword !== confirmPassword) {
            message.textContent = "The passwords do not match.";
            message.style.color = "#b76e79";
            return;
        }

        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));

        message.textContent = "Password reset successfully! Redirecting to login...";
        message.style.color = "#6f9278";

        setTimeout(() => window.location.replace("login.html"), 1200);
    });
}


// ==========================================
// ADD RECIPE
// ==========================================

function openAddRecipe() {
    const modal = document.getElementById("recipeModal");
    const modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = `
        <h2>Share Your Recipe 🍳</h2>
        <p>Submit a recipe to add it to your personal RecipeHub collection.</p>

        <form class="add-recipe-form" onsubmit="submitRecipe(event)">

            <input id="recipeName" type="text" placeholder="Recipe name" required>

            <select id="recipeCuisine" required>
                <option value="Indian">Indian</option>
                <option value="South Indian">South Indian</option>
                <option value="Korean">Korean</option>
                <option value="Japanese">Japanese</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Chinese">Chinese</option>
                <option value="American">American</option>
            </select>

            <select id="recipeDiet" required>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>

            <input id="recipeTime" type="text" placeholder="Cooking time, e.g. 35 mins" required>

            <label for="recipeIngredients"><strong>Ingredients (one per line)</strong></label>
            <textarea id="recipeIngredients" placeholder="2 tomatoes&#10;1 onion&#10;1 tsp salt&#10;2 tbsp oil" rows="6" required></textarea>

            <input id="recipeImage" type="url" placeholder="Image URL (optional)">

            <label for="recipeInstructions"><strong>Cooking Instructions (one step per line)</strong></label>
            <textarea id="recipeInstructions" placeholder="Step 1&#10;Step 2&#10;Step 3" rows="6" required></textarea>

            <hr>

            <h3>🥗 Nutrition Information (per serving)</h3>
            <p>Enter approximate nutrition values. Leave blank if unknown.</p>

            <input id="recipeCalories" type="number" min="0" step="any" placeholder="Calories (kcal)">
            <input id="recipeProtein" type="number" min="0" step="any" placeholder="Protein (g)">
            <input id="recipeCarbs" type="number" min="0" step="any" placeholder="Carbohydrates (g)">
            <input id="recipeFat" type="number" min="0" step="any" placeholder="Fat (g)">
            <input id="recipeFiber" type="number" min="0" step="any" placeholder="Fiber (g)">

            <button type="submit">Add Recipe</button>
        </form>
    `;

    modal.style.display = "block";
}


// ==========================================
// SUBMIT RECIPE
// ==========================================

function submitRecipe(event) {
    event.preventDefault();

    // Split ingredients by line (and comma, to support old style)
    const ingredients = document.getElementById("recipeIngredients").value
        .split(/\r?\n|,/)
        .map(item => item.trim())
        .filter(Boolean);

    const instructions = document.getElementById("recipeInstructions").value
        .split(/\r?\n/)
        .map(step => step.trim())
        .filter(Boolean);

    const nutrition = {
        calories: document.getElementById("recipeCalories").value || "",
        protein: document.getElementById("recipeProtein").value || "",
        carbs: document.getElementById("recipeCarbs").value || "",
        fat: document.getElementById("recipeFat").value || "",
        fiber: document.getElementById("recipeFiber").value || ""
    };

    const recipe = {
        id: Date.now(),
        name: document.getElementById("recipeName").value.trim(),
        cuisine: document.getElementById("recipeCuisine").value,
        diet: document.getElementById("recipeDiet").value,
        rating: 0,
        time: document.getElementById("recipeTime").value.trim(),
        image: document.getElementById("recipeImage").value.trim() ||
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
        ingredients,
        instructions,
        nutrition
    };

    let customRecipes = JSON.parse(
        localStorage.getItem(getUserStorageKey("customRecipes")) || "[]"
    );

    customRecipes.push(recipe);

    localStorage.setItem(
        getUserStorageKey("customRecipes"),
        JSON.stringify(customRecipes)
    );

    recipes.push(recipe);

    closeModal();
    displayRecipes();

    alert("Your recipe has been added to RecipeHub! 🍳");
}


// ==========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ==========================================

window.addEventListener("click", function (event) {
    const modal = document.getElementById("recipeModal");

    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
});


// ==========================================
// SAVE RECIPE
// ==========================================

function saveRecipe(id) {
    let favorites = JSON.parse(
        localStorage.getItem(getUserStorageKey("favorites")) || "[]"
    );

    id = Number(id);

    if (favorites.includes(id)) {
        alert("This recipe is already in your favorites ❤️");
        return;
    }

    favorites.push(id);

    localStorage.setItem(
        getUserStorageKey("favorites"),
        JSON.stringify(favorites)
    );

    alert("Recipe saved to Favorites! ❤️");
}


// ==========================================
// SHOW FAVORITES
// ==========================================

function showFavorites() {
    const container = document.getElementById("recipeContainer");
    if (!container) return;

    const favorites = JSON.parse(
        localStorage.getItem(getUserStorageKey("favorites")) || "[]"
    );

    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="empty-message">
                <h3>❤️ No Favorites Yet</h3>
                <p>Save your favorite recipes and they will appear here.</p>
            </div>
        `;
        return;
    }

    const favoriteRecipes = recipes.filter(recipe =>
        favorites.includes(recipe.id)
    );

    container.innerHTML = "";

    favoriteRecipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";

        card.innerHTML = `
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.name}">
                <span class="recipe-tag">❤️ Favorite</span>
            </div>

            <div class="recipe-info">
                <h3>${recipe.name}</h3>
                <p class="recipe-description">${recipe.cuisine} • ${recipe.diet}</p>

                <div class="recipe-meta">
                    <span class="meta-item">⭐ ${recipe.rating}</span>
                    <span class="meta-item">⏱️ ${recipe.time}</span>
                </div>

                <div class="recipe-buttons">
                    <button class="view-btn" onclick="viewRecipe(${recipe.id})">View Recipe</button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}


// ==========================================
// RATE RECIPE
// ==========================================

function rateRecipe(id, rating) {
    let ratings = JSON.parse(
        localStorage.getItem(getUserStorageKey("ratings")) || "{}"
    );

    ratings[id] = Number(rating);

    localStorage.setItem(
        getUserStorageKey("ratings"),
        JSON.stringify(ratings)
    );

    alert("Thank you for rating this recipe " + rating + " stars! ⭐");
}


// ==========================================
// SHARE RECIPE
// ==========================================

function shareRecipe(id) {
    const recipe = recipes.find(item => Number(item.id) === Number(id));
    if (!recipe) return;

    if (navigator.share) {
        navigator.share({
            title: recipe.name,
            text: "Check out this delicious recipe: " + recipe.name,
            url: window.location.href
        }).catch(() => console.log("Sharing cancelled."));
    } else {
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert("Recipe link copied! 📋"))
            .catch(() => alert("Unable to copy link."));
    }
}


// ==========================================
// LOGOUT
// ==========================================

function logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currentUser");
    localStorage.removeItem("currentUser");
    window.location.replace("login.html");
}