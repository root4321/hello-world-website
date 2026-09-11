const recipes = {
    "vada-pav": {
        title: "Mumbai-Style",
        name: "Vada Pav",
        query: "vada pav potato besan chutney",
        description: "A golden, crispy potato vada tucked into soft pav with bright green chutney and spicy dry garlic chutney.",
        image: "assets/vada-pav-guide.png",
        alt: "Mumbai-style vada pav with chutneys and step-by-step recipe guide",
        meta: [["6", "vada pav"], ["50 min", "total time"], ["Easy", "difficulty"], ["Indian", "cuisine"]],
        intro: "Mumbai's iconic snack is simple, inexpensive and wonderfully satisfying. Make the spiced potato filling, dip it in thick besan batter, and serve it hot in toasted pav.",
        ingredients: [
            ["Potato filling", ["4 medium potatoes, boiled and mashed", "1–2 green chillies, finely chopped", "1 tsp grated ginger", "1 tsp mustard seeds", "½ tsp cumin seeds", "8–10 curry leaves", "¼ tsp turmeric powder", "2 tbsp coriander, chopped", "1 tbsp lemon juice", "Salt and 1 tbsp oil"]],
            ["Besan batter", ["1½ cups gram flour (besan)", "¼ tsp turmeric powder", "¼ tsp red chilli powder", "A pinch of baking soda", "Salt to taste", "Approx. ¾ cup water", "Oil, for deep frying"]],
            ["To serve", ["6 soft pav buns", "Green chutney and dry garlic chutney", "Fried green chillies, optional", "Butter or oil for toasting"]]
        ],
        steps: [
            ["Make the filling.", "Heat oil, crackle mustard seeds, then add cumin, curry leaves, ginger and chilli. Stir in turmeric, mashed potatoes and salt. Cook for 2–3 minutes, then finish with coriander and lemon juice. Cool completely."],
            ["Shape the vadas.", "Divide the potato mixture into six portions and roll each into a smooth ball."],
            ["Mix the batter.", "Whisk besan, turmeric, chilli powder, salt and baking soda. Gradually add water until smooth and thick. Rest for 5–10 minutes."],
            ["Fry until golden.", "Heat oil over medium heat. Dip each ball in batter, coat well and fry until crisp and golden. Drain on paper."],
            ["Toast and assemble.", "Toast the pav with butter, spread both chutneys and place a hot vada inside. Add extra garlic chutney and serve immediately."]
        ],
        tips: ["Keep the potato mixture relatively dry so the vadas hold their shape.", "A thick batter creates the crispiest coating.", "Maintain medium heat so the inside warms before the outside browns.", "Don't skip the dry garlic chutney — it is the signature flavour."],
        serve: "with chutney, fried chillies and masala chai."
    },
    "pav-bhaji": {
        title: "Mumbai-Style",
        name: "Pav Bhaji",
        query: "pav bhaji vegetables tomato butter masala",
        description: "Buttery mashed vegetables cooked in a spicy tomato masala, served with crisp toasted pav, onion, coriander and lemon.",
        image: "assets/pav-bhaji-guide.png",
        alt: "Mumbai-style pav bhaji with toasted buns and step-by-step recipe guide",
        meta: [["4", "serves"], ["50 min", "total time"], ["Easy", "difficulty"], ["Indian", "cuisine"]],
        intro: "Mumbai's much-loved street-food classic is all about slowly cooked vegetables, aromatic spices, buttery richness and fresh toppings. Mash it smooth, toast the pav, and serve piping hot.",
        ingredients: [
            ["Bhaji", ["3 potatoes, peeled and chopped", "1 cup cauliflower, chopped", "1 carrot, chopped", "½ cup green peas", "1 capsicum, finely chopped", "2 onions, finely chopped", "3 tomatoes, finely chopped", "1 tbsp ginger-garlic paste", "1–2 green chillies", "2 tbsp Pav Bhaji masala", "½ tsp turmeric and 1 tsp red chilli powder", "2 tbsp butter, 1 tbsp oil and salt", "½–1 cup water, as required", "2 tbsp fresh coriander"]],
            ["Pav", ["8 pav buns", "2–3 tbsp butter", "A pinch of Pav Bhaji masala", "Chopped coriander, optional"]],
            ["To serve", ["Finely chopped onion", "Lemon wedges", "Fresh coriander", "Extra butter", "Fried green chillies, optional"]]
        ],
        steps: [
            ["Cook the vegetables.", "Cook potatoes, cauliflower, carrot and peas with enough water until completely tender. Drain and roughly mash."],
            ["Build the masala base.", "Heat oil and butter in a wide pan. Cook onions until soft and lightly golden, then add ginger-garlic paste and green chillies."],
            ["Add tomatoes and spices.", "Cook tomatoes until soft and pulpy. Add Pav Bhaji masala, turmeric, chilli powder and salt. Let the spices blend into the base."],
            ["Mash and cook.", "Add the vegetables and water. Mash while cooking over medium heat for 8–10 minutes until thick, smooth and spreadable."],
            ["Finish and serve.", "Add capsicum and cook 3–4 minutes. Toast pav in butter and masala, then serve the hot bhaji with onion, coriander, lemon and extra butter."]
        ],
        tips: ["Mash the vegetables well for the characteristic smooth, slightly chunky texture.", "Use a wide pan so there is room to mash and cook the bhaji.", "Adjust consistency with water — bhaji should be thick and spoonable.", "Finish with fresh lemon to brighten the rich, spicy masala."],
        serve: "with toasted pav, chopped onion, coriander and plenty of lemon."
    }
};

const cards = document.querySelector("#recipe-cards");
const detail = document.querySelector("#recipe-detail");
const search = document.querySelector("#recipe-search");

function renderCards(filter = "") {
    const needle = filter.trim().toLowerCase();
    const matches = Object.entries(recipes).filter(([, recipe]) => `${recipe.title} ${recipe.name} ${recipe.query}`.toLowerCase().includes(needle));
    cards.innerHTML = matches.length ? matches.map(([id, recipe]) => `
        <button class="recipe-card ${detail.dataset.recipe === id ? "selected" : ""}" data-recipe="${id}">
            <img src="${recipe.image}" alt="${recipe.alt}">
            <span><small>Recipe</small><strong>${recipe.title}<br><em>${recipe.name}</em></strong><b>View recipe →</b></span>
        </button>`).join("") : `<p class="no-results">No recipes found. Try “pav”, “potato” or “masala”.</p>`;
    cards.querySelectorAll("[data-recipe]").forEach(card => card.addEventListener("click", () => renderDetail(card.dataset.recipe)));
}

function renderDetail(id) {
    const recipe = recipes[id];
    detail.dataset.recipe = id;
    detail.innerHTML = `
        <section class="hero">
            <div class="hero-copy">
                <p class="eyebrow">Mumbai street food · Vegetarian</p>
                <h2>${recipe.title}<br><em>${recipe.name}</em></h2>
                <p class="intro">${recipe.description}</p>
                <a class="primary-button" href="#recipe">Start cooking <span aria-hidden="true">↓</span></a>
            </div>
            <div class="hero-image-wrap"><img src="${recipe.image}" alt="${recipe.alt}"></div>
        </section>
        <section class="recipe-meta" aria-label="Recipe details">${recipe.meta.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}</section>
        <section class="content-grid" id="recipe">
            <article class="recipe-content">
                <p class="eyebrow">The recipe</p><h2>Crispy, comforting and full of flavour.</h2><p class="lead">${recipe.intro}</p>
                <div class="recipe-section"><h3>Ingredients</h3><div class="ingredient-columns">${recipe.ingredients.map(([heading, items]) => `<div><h4>${heading}</h4><ul>${items.map(item => `<li>${item}</li>`).join("")}</ul></div>`).join("")}</div></div>
                <div class="recipe-section method"><h3>Method</h3><ol>${recipe.steps.map(([heading, text]) => `<li><strong>${heading}</strong> ${text}</li>`).join("")}</ol></div>
            </article>
            <aside class="tips-card"><p class="eyebrow">Kitchen notes</p><h2>Make it memorable</h2><ul>${recipe.tips.map(tip => `<li>${tip}</li>`).join("")}</ul><div class="serve-note"><span aria-hidden="true">☕</span><p><strong>Serve hot</strong><br>${recipe.serve}</p></div></aside>
        </section>`;
    renderCards(search.value);
}

search.addEventListener("input", event => renderCards(event.target.value));
renderDetail("vada-pav");
