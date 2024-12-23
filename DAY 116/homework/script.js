document.getElementById('search-button').addEventListener('click', async () => {
    const ingredient = document.getElementById('ingredient-input').value.trim();
    const recipesContainer = document.getElementById('recipes-container');
    const errorMessage = document.getElementById('error-message');

    if (!ingredient) {
        errorMessage.textContent = 'Please enter an ingredient.';
        errorMessage.classList.remove('hidden');
        return;
    }

    errorMessage.classList.add('hidden');
    recipesContainer.innerHTML = ''; // Clear previous results

    try {
        const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
            params: {
                type: 'public',
                q: ingredient,
                app_id: 'YOUR_APP_ID',
                app_key: 'YOUR_APP_KEY'
            }
        });

        const recipes = response.data.hits;
        if (recipes.length === 0) {
            errorMessage.textContent = 'No recipes found.';
            errorMessage.classList.remove('hidden');
            return;
        }

        recipes.forEach(({ recipe }) => {
            const recipeCard = `
                <div class="recipe-card">
                    <img src="${recipe.image}" alt="${recipe.label}">
                    <h3>${recipe.label}</h3>
                    <p>Ingredients: ${recipe.ingredientLines.join(', ')}</p>
                    <a href="${recipe.url}" target="_blank">View Recipe</a>
                </div>
            `;
            recipesContainer.innerHTML += recipeCard;
        });
    } catch (error) {
        errorMessage.textContent = 'Error fetching recipes. Please try again later.';
        errorMessage.classList.remove('hidden');
    }
});
