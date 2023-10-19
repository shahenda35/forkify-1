const containerRecipe = document.querySelector(".recipe");
const showRecipe = async function() {
    try {
        //1)loding recipe
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}${res.status}`);
        let { recipe } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.ImageUrl,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(recipe);
        //2) rendring recipe
        const html = `
        <figure class="recipe_fig">
            <img src="./src/img/logo.png" alt="Tomato" class="recipe__img" />
                <h1 class="recipe_title">
                <span>Pasta with tomato cream sauce</span>
            </h1>
        </figure>

    <div class="recipe_details">
        <div class="recipe_info">
        <svg class="recipe_info-icon">
            <use href="src/img/icons.svg#icon-clock"></use>
        </svg>
        <span class="recipe_info-data recipe_info-data--minutes"></span>
        <span class="recipe_info-text">minutes</span>
        </div>

        <div class="recipe_info">
        <svg class="recipe_info-icon">
            <use href="src/img/icons.svg#icon-users"></use>
        </svg>
        <span class="recipe_info-data recipe_info-data--people">4</span>
        <span class="recipe_info-text">servings</span>

        <div class="recipe_info-buttons">
            <button class="btn--tiny btn--increase-servings">
            <svg>
                <use href="src/img/icons.svg#icon-minus-circle"></use>
            </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
            <svg>
                <use href="src/img/icons.svg#icon-plus-circle"></use>
            </svg>
            </button>
        </div>
        </div>

        <div class="recipe_user-generated">
        <svg>
            <use href="src/img/icons.svg#icon-user"></use>
        </svg>
        </div>
        <button class="btn--round">
        <svg class="">
            <use href="src/img/icons.svg#icon-bookmark-fill"></use>
        </svg>
        </button>
    </div>

    <div class="recipe_ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe_ingredient-list">
        <li class="recipe_ingredient">
            <svg class="recipe_icon">
            <use href="src/img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe_quantity">1000</div>
            <div class="recipe_description">
            <span class="recipe_unit">g</span>
            pasta
            </div>
        </li>

        <li class="recipe_ingredient">
            <svg class="recipe_icon">
            <use href="src/img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe_quantity">0.5</div>
            <div class="recipe_description">
            <span class="recipe_unit">cup</span>
            ricotta cheese
            </div>
        </li>
        </ul>
    </div>

    <div class="recipe_directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe_directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe_publisher">The Pioneer Woman</span>. Please
        check out directions at their website.
        </p>
        <a
        class="btn--small recipe_btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
        >
        <span>Directions</span>
        <svg class="search_icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
        </a>
    </div>`;
        containerRecipe.innerHTML = "";
        containerRecipe.insertAdjacentHTML("afterbegin", html);
    } catch (err) {
        console.log(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
