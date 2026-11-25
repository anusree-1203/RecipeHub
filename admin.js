// ===============================
// RECIPEHUB ADMIN FUNCTIONS
// ===============================


// Get all recipes for Admin
function getAllAdminRecipes() {

    let allRecipes = [];

    // Get the 24 built-in recipes from script.js
    if (typeof recipes !== "undefined") {
        allRecipes = recipes.map(recipe => ({
            ...recipe,
            isCustom: false
        }));
    }


    // Get custom recipes created by all users
    for (let i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);

        if (key && key.startsWith("customRecipes_")) {

            try {

                const customRecipes =
                    JSON.parse(localStorage.getItem(key)) || [];

                customRecipes.forEach(recipe => {

                    allRecipes.push({
                        ...recipe,
                        isCustom: true,
                        ownerEmail: key.replace("customRecipes_", "")
                    });

                });

            } catch (error) {

                console.log("Could not read custom recipes.");

            }
        }
    }

    return allRecipes;
}



// ===============================
// MANAGE USERS
// ===============================

function manageUsers() {

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    let html = "<h2>👥 Manage Users</h2>";

    html += `<p><strong>Total Users:</strong> ${users.length}</p>`;


    if (users.length === 0) {

        html += "<p>No registered users found.</p>";

    } else {

        html += "<ul>";

        users.forEach((user, index) => {

            html += `
                <li>
                    ${user.name || "User"} - ${user.email}

                    <button onclick="deleteUser(${index})">
                        Delete
                    </button>
                </li>
            `;

        });

        html += "</ul>";
    }


    document.getElementById("adminContent").innerHTML = html;
}



// Delete User
function deleteUser(index) {

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    users.splice(index, 1);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    manageUsers();
}



// ===============================
// MANAGE RECIPES
// ===============================

function manageRecipes() {

    const allRecipes = getAllAdminRecipes();

    let html = "<h2>🍽️ Manage Recipes</h2>";

    html += `
        <p>
            <strong>Total Recipes:</strong>
            ${allRecipes.length}
        </p>
    `;


    if (allRecipes.length === 0) {

        html += "<p>No recipes found.</p>";

    } else {

        html += "<ul>";

        allRecipes.forEach(recipe => {

            const recipeName =
                recipe.name ||
                recipe.title ||
                "Recipe";


            if (recipe.isCustom) {

                html += `
                    <li>

                        <strong>${recipeName}</strong>

                        <span>
                            - Added by ${recipe.ownerEmail}
                        </span>

                        <button
                            onclick='deleteCustomRecipe(
                                ${recipe.id},
                                ${JSON.stringify(recipe.ownerEmail)}
                            )'
                        >
                            Delete
                        </button>

                    </li>
                `;

            } else {

                html += `
                    <li>

                        <strong>${recipeName}</strong>

                        <span>
                            - Built-in Recipe
                        </span>

                    </li>
                `;
            }

        });

        html += "</ul>";
    }


    document.getElementById("adminContent").innerHTML = html;
}



// Delete a custom recipe
function deleteCustomRecipe(id, ownerEmail) {

    const key =
        "customRecipes_" + ownerEmail;

    const customRecipes =
        JSON.parse(localStorage.getItem(key)) || [];


    const updatedRecipes =
        customRecipes.filter(
            recipe => Number(recipe.id) !== Number(id)
        );


    localStorage.setItem(
        key,
        JSON.stringify(updatedRecipes)
    );


    manageRecipes();
}



// ===============================
// ADMIN DASHBOARD
// ===============================

function showDashboard() {

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const allRecipes =
        getAllAdminRecipes();


    document.getElementById("adminContent").innerHTML = `

        <h2>📊 Dashboard</h2>

        <p>
            <strong>Total Users:</strong>
            ${users.length}
        </p>

        <p>
            <strong>Total Recipes:</strong>
            ${allRecipes.length}
        </p>

    `;
}



// ===============================
// ADMIN LOGOUT
// ===============================

function adminLogout() {

    localStorage.removeItem("isAdmin");

    window.location.href = "admin-login.html";
}



// ===============================
// ADMIN LOGIN
// ===============================

const adminLoginForm =
    document.getElementById("adminLoginForm");


if (adminLoginForm) {

    adminLoginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById("adminEmail").value;

            const password =
                document.getElementById("adminPassword").value;

            const message =
                document.getElementById("adminLoginMessage");


            const adminEmail =
                "admin@gmail.com";

            const adminPassword =
                "admin123";


            if (
                email === adminEmail &&
                password === adminPassword
            ) {

                localStorage.setItem(
                    "isAdmin",
                    "true"
                );

                window.location.href =
                    "admin.html";

            } else {

                message.textContent =
                    "Invalid admin email or password.";

            }

        }
    );
}