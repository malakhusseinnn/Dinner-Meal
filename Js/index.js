const recipe = [
    {
        id: 1,
        name: "Thai Green Curry",
        description: "Vibrant and aromatic curry with vegetables and coconut milk.",
        cuisine: "Asian",
        difficulty: "Intermediate",
        rating: 4.7,
        reviews: 312,
        prepTime: 15,
        cookTime: 25,
        servings: "4 people",
        image: "../Media/photo-1455619452474-d2be8b1e70cd.avif",
        ingredients: [
            "2 tablespoons green curry paste", "400ml coconut milk", "300g chicken breast, sliced",
            "1 red bell pepper, sliced", "100g green beans", "1 eggplant, cubed",
            "2 tablespoons fish sauce", "1 tablespoon palm sugar", "Fresh Thai basil leaves"
        ],
        instructions: [
            "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
            "Add half the coconut milk and stir to combine with the curry paste.",
            "Add sliced chicken and cook until no longer pink, about 5 minutes.",
            "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
            "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
            "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."
        ],
        nutrition:
        {
            Calories: "420 kcal",
            Protein: "26g",
            Carbohydrates: "22g",
            Fat: "26g",
            Fiber: "5g",
            Sodium: "890mg"
        },
        tips: [
            "Adjust spice level by using more or less curry paste.",
            "Add vegetables in stages based on cooking time.",
            "Fresh Thai basil is essential for authentic flavor.",
            "Use full-fat coconut milk for a richer, creamier sauce."
        ]
    },
    {
        id: 2,
        name: "Classic Beef Burger",
        description: "Juicy homemade burger with all the fixings",
        cuisine: "American",
        difficulty: "Easy",
        rating: 4.6,
        reviews: 421,
        prepTime: 15,
        cookTime: 20,
        servings: "4 people",
        image: "../Media/photo-1568901346375-23c9450c58cd.avif",
        ingredients: [
            "500g ground beef (80/20)", "4 burger buns", "4 slices cheddar cheese",
            "Lettuce leaves", "Tomato slices", "Red onion, sliced",
            "Pickles", "Burger sauce or condiments"
        ],
        instructions: [
            "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
            "Season patties generously with salt and pepper on both sides.",
            "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
            "Add cheese slices in the last minute of cooking and cover to melt.",
            "Toast burger buns lightly on the grill or in a pan.",
            "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."
        ],
        nutrition:
        {
            Calories: "650 kcal",
            Protein: "38g",
            Carbohydrates: "42g",
            Fat: "35g",
            Fiber: "2g",
            Sodium: "920mg"
        },
        tips: [
            "Don't press down on burgers while cooking - keeps them juicy",
            "Make indent in center to prevent burger from puffing up",
            "Let patties rest for 2-3 minutes before serving",
            "Toast buns for better texture and flavor"
        ]
    },
    {
        id: 3,
        name: "Caesar Salad",
        description: "Classic salad with crispy romaine and creamy dressing",
        cuisine: "Mediterranean",
        difficulty: "Easy",
        rating: 4.4,
        reviews: 198,
        prepTime: 15,
        cookTime: 0,
        servings: "2 people",
        image: "../Media/photo-1546793665-c74683f339c1.avif",
        ingredients: [
            "1 large romaine lettuce", "1/2 cup Caesar dressing", "1/2 cup parmesan cheese, shaved",
            "1 cup croutons", "2 anchovy fillets (optional)", "Lemon wedges",
            "Black pepper"
        ],
        instructions: [
            "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
            "Place lettuce in a large salad bowl.",
            "Add Caesar dressing and toss until evenly coated.",
            "Add croutons and half the parmesan cheese. Toss gently.",
            "Top with remaining parmesan shavings and anchovies if using.",
            "Serve immediately with lemon wedges and fresh black pepper."
        ],
        nutrition:
        {
            Calories: "320 kcal",
            Protein: "12g",
            Carbohydrates: "18g",
            Fat: "22g",
            Fiber: "3g",
            Sodium: "680mg"
        },
        tips: [
            "Use cold, crisp lettuce for best texture",
            "Make homemade croutons for better flavor",
            "Add grilled chicken for a complete meal",
            "Don't dress salad until ready to serve"
        ]
    },
    {
        id: 4,
        name: "Shrimp Scampi",
        description: "Garlicky shrimp in white wine butter sauce",
        cuisine: "Seafood",
        difficulty: "Easy",
        rating: 4.8,
        reviews: 356,
        prepTime: 10,
        cookTime: 15,
        servings: "2 people",
        image: "../Media/photo-1559314809-0d155014e29e.avif",
        ingredients: [
            "400g large shrimp, peeled", "300g linguine pasta", "6 cloves garlic, minced",
            "1/2 cup white wine", "4 tablespoons butter", "2 tablespoons olive oil",
            "Fresh parsley, chopped", "Lemon juice and zest",
            "Red pepper flakes"
        ],
        instructions: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
            "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
            "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
            "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
            "Garnish with parsley, lemon zest, and serve immediately."
        ],
        nutrition:
        {
            Calories: "520 kcal",
            Protein: "36g",
            Carbohydrates: "54g",
            Fat: "15g",
            Fiber: "3g",
            Sodium: "620mg"
        },
        tips: [
            "Don't overcook shrimp - they cook very quickly",
            "Use good quality white wine for best flavor",
            "Toss pasta in sauce for maximum flavor absorption",
            "Add extra lemon for bright, fresh taste"
        ]
    },
    {
        id: 5,
        name: "Greek Moussaka",
        description: "Traditional layered eggplant casserole with lamb",
        cuisine: "Mediterranean",
        difficulty: "Intermediate",
        rating: 4.8,
        reviews: 234,
        prepTime: 30,
        cookTime: 60,
        servings: "4 people",
        image: "../Media/photo-1601050690597-df0568f70950.avif",
        ingredients: [
            "3 large eggplants, sliced", "500g ground lamb", "400g canned tomatoes",
            "1 onion, diced", "3 cloves garlic, minced", "500ml béchamel sauce",
            "100g parmesan cheese", "Cinnamon and oregano", "Olive oil"
        ],
        instructions: [
            "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
            "Brush eggplant slices with olive oil, grill or bake until softened.",
            "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
            "Preheat oven to 180°C (350°F).",
            "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
            "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
        ],
        nutrition:
        {
            Calories: "580 kcal",
            Protein: "36g",
            Carbohydrates: "32g",
            Fat: "32g",
            Fiber: "8g",
            Sodium: "820mg"
        },
        tips: [
            "Salt eggplant to remove bitterness",
            "Don't skip the resting time - it helps set the layers",
            "Use ground beef if lamb is unavailable",
            "Make ahead and reheat for easier serving"
        ]
    },
    {
        id: 6,
        name: "Chicken Tikka Masala",
        description: "Rich and creamy Indian curry with tender chicken pieces",
        cuisine: "Asian",
        difficulty: "Intermediate",
        rating: 4.7,
        reviews: 389,
        prepTime: 20,
        cookTime: 30,
        servings: "4 people",
        image: "../Media/photo-1565557623262-b51c2513a641.avif",
        ingredients: [
            "600g chicken breast, cubed", "1 cup plain yogurt", "2 tablespoons tikka masala paste",
            "400ml coconut cream", "1 onion, diced", "4 cloves garlic, minced",
            "2 tablespoons ginger, grated", "400g canned tomatoes", "Fresh cilantro for garnish"
        ],
        instructions: [
            "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
            "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
            "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
            "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
            "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
            "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
        ],
        nutrition:
        {
            Calories: "450 kcal",
            Protein: "38g",
            Carbohydrates: "24g",
            Fat: "22g",
            Fiber: "4g",
            Sodium: "760mg"
        },
        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for richest sauce",
            "Adjust spice level by varying the tikka paste amount",
            "Serve with naan bread and basmati rice"
        ]
    },
    {
        id: 7,
        name: "Caprese Sandwich",
        description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        cuisine: "Italian",
        difficulty: "Easy",
        rating: 4.5,
        reviews: 189,
        prepTime: 10,
        cookTime: 5,
        servings: "2 people",
        image: "../Media/photo-1509722747041-616f39b57569.avif",
        ingredients: [
            "1 ciabatta bread", "200g fresh mozzarella, sliced", "2 large tomatoes, sliced",
            "Fresh basil leaves", "3 tablespoons pesto", "2 tablespoons balsamic glaze",
            "Olive oil", "Salt and pepper"
        ],
        instructions: [
            "Slice ciabatta bread in half horizontally.",
            "Toast bread lightly until just crispy.",
            "Spread pesto on both sides of bread.",
            "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
            "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
            "Close sandwich, cut in half, and serve immediately.",
        ],
        nutrition:
        {
            Calories: "480 kcal",
            Protein: "22g",
            Carbohydrates: "48g",
            Fat: "22g",
            Fiber: "2g",
            Sodium: "680mg"
        },
        tips: [
            "Use ripe, in-season tomatoes for best flavor",
            "Buffalo mozzarella is traditional but harder to slice",
            "Toast bread lightly - not too crispy",
            "Add prosciutto or salami for a heartier sandwich"
        ]
    },
    {
        id: 8,
        name: "Margherita Pizza",
        description: "Classic Italian pizza with fresh mozzarella and basil",
        cuisine: "Italian",
        difficulty: "Intermediate",
        rating: 4.9,
        reviews: 512,
        prepTime: 90,
        cookTime: 12,
        servings: "2 people",
        image: "../Media/photo-1574071318508-1cdbab80d002.avif",
        ingredients: [
            "300g pizza dough", "200g crushed tomatoes", "250g fresh mozzarella",
            "Fresh basil leaves", "2 tablespoons olive oil", "2 cloves garlic, minced",
            "Salt and pepper to taste", "Parmesan cheese for topping"
        ],
        instructions: [
            "Let pizza dough come to room temperature and rest for 1 hour.",
            "Preheat oven to maximum temperature (usually 250°C/480°F).",
            "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
            "Roll out dough on a floured surface to desired thickness.",
            "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
            "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."
        ],
        nutrition:
        {
            Calories: "580 kcal",
            Protein: "24g",
            Carbohydrates: "68g",
            Fat: "22g",
            Fiber: "4g",
            Sodium: "920mg"
        },
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload with toppings - less is more",
            "Add basil after baking to keep it fresh",
            "Let dough rest properly for best texture"
        ]
    },
    {
        id: 9,
        name: "Creamy Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        cuisine: "Italian",
        difficulty: "Easy",
        rating: 4.8,
        reviews: 234,
        prepTime: 15,
        cookTime: 20,
        servings: "4 people",
        image: "../Media/photo-1612874742237-6526221588e3.avif",
        ingredients: [
            "400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs",
            "100g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper",
            "Salt for pasta water"
        ],
        instructions: [
            "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
            "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
            "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese.Add plenty of freshly ground black pepper.",
            "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
            "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
            "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
        ],
        nutrition:
        {
            Calories: "520 kcal",
            Protein: "28g",
            Carbohydrates: "62g",
            Fat: "18g",
            Fiber: "3g",
            Sodium: "680mg"
        },
        tips: [
            "Use room temperature eggs for a smoother sauce consistency",
            "Work quickly when mixing eggs with hot pasta to avoid scrambling",
            "Reserve extra pasta water - it's the secret to perfect creaminess",
            "Freshly grated cheese makes all the difference in flavor",
            "Never add cream - authentic carbonara is made with eggs only"
        ]
    },
    {
        id: 10,
        name: "Pad Thai",
        description: "Popular Thai stir-fried noodles with shrimp and peanuts",
        cuisine: "Asian",
        difficulty: "Intermediate",
        rating: 4.8,
        reviews: 445,
        prepTime: 20,
        cookTime: 15,
        servings: "2 people",
        image: "../Media/photo-1559314809-0d155014e29e.avif",
        ingredients: [
            "200g rice noodles", "200g shrimp, peeled", "2 eggs",
            "3 tablespoons tamarind paste", "2 tablespoons fish sauce", "1 tablespoon palm sugar",
            "Bean sprouts", "Crushed peanuts", "Lime wedges and cilantro"
        ],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
            "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
            "Heat wok over high heat. Scramble eggs and set aside.",
            "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
            "Add scrambled eggs and bean sprouts. Toss everything together.",
            "Serve topped with crushed peanuts, lime wedges, and cilantro."
        ],
        nutrition:
        {
            Calories: "540 kcal",
            Protein: "32g",
            Carbohydrates: "62g",
            Fat: "16g",
            Fiber: "4g",
            Sodium: "1120mg"
        },
        tips: [
            "Don't oversoak noodles or they'll be mushy",
            "Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors",
            "Prepare all ingredients before starting to cook"
        ]
    },
]

var card = document.querySelector(".card")

function printRecipe(id) {
    var index;
    for (var i = 0; i < recipe.length; ++i) {
        if (recipe[i].id == id) {
            index = i;
            break;
        }
    }

    card.innerHTML = `
    <div class="row">
          <div class="col-xl-5 col-12 p-0">
            <div class="left position-relative w-100 h-100">
              <img src=${recipe[index].image} class="w-100 h-100 object-fit-cover"
                alt="Recipe Image">
              <div class="rate w-fit-content rounded-5 d-flex gap-2 align-items-center bg-white position-absolute p-2">
                <i class="fa-solid fa-star text-warning"></i>
                <p class="mb-0 fw-bold">${recipe[index].rating}</p>
                <p class="mb-0 text-gray">(${recipe[index].reviews} reviews)</p>
              </div>
              <div
                class="stat d-flex justify-content-center gap-5 align-items-center bg-white rounded-4 py-3 px-4 position-absolute">
                <div class="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-clock text-primary fs-5"></i>
                  <p class="mb-0 text-gray">Prep Time</p>
                  <p class="mb-0 fw-bold">${recipe[index].prepTime} min</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-fire-burner text-danger fs-4"></i>

                  <p class="mb-0 text-gray">Cook Time</p>
                  <p class="mb-0 fw-bold">${recipe[index].cookTime} min</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-users text-blue fs-5"></i>
                  <p class="mb-0 text-gray">Servings</p>
                  <p class="mb-0 fw-bold">${recipe[index].servings}</p>
                </div>
              </div>

            </div>
          </div>
          <div class="col-xl-7 col-12 px-0">
            <div class="right p-4 bg-white rounded-4">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column gap-1">
                  <div class="d-flex gap-3 align-items-center">
                    <p class="mb-0 w-fit-content px-3 py-1 fs-small text-green bg-light-green rounded-4 fw-medium">
                      ${recipe[index].difficulty}</p>
                    <p class="mb-0 w-fit-content px-3 py-1 fs-small text-blue bg-light-blue rounded-4 fw-medium">${recipe[index].cuisine}
                    </p>
                  </div>
                  <p class="mb-0 fs-1 fw-bold thai">${recipe[index].name}</p>
                  <p class="mb-0 text-gray fs-5 des">${recipe[index].description}</p>
                </div>
                <div class="d-flex gap-2 align-items-center">
                  <div class="icon d-flex justify-content-center align-items-center rounded-4 bg-light-primary"><i
                      class="fa-solid fa-bookmark text-primary"></i></div>
                  <div class="icon d-flex justify-content-center align-items-center rounded-4 bg-light-primary"><i
                      class="fa-solid fa-share-nodes text-primary"></i></div>
                </div>
              </div>

              <div class="warn d-flex gap-3 align-items-center rounded-4 p-3 mt-3 d-none">
                <div class="iconn">
                  <i class="fa-solid fa-triangle-exclamation fs-5"></i>
                </div>
                <div>
                  <p class="mb-0 ext fw-bold">Extended Preparation Time</p>
                  <p class="mb-0 warning">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                </div>
              </div>

              <ul class="nav nav-pills mx-auto mb-3 d-flex justify-content-center align-items-center mt-5"
                id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link d-flex align-items-center gap-2 active" id="pills-ingredients-tab"
                    data-bs-toggle="pill" data-bs-target="#pills-ingredients" type="button" role="tab"
                    aria-controls="pills-ingredients" aria-selected="true">
                    <i class="fa-solid fa-list-check"></i>
                    <p class="mb-0">Ingredients</p>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link d-flex align-items-center gap-2" id="pills-instructions-tab"
                    data-bs-toggle="pill" data-bs-target="#pills-instructions" type="button" role="tab"
                    aria-controls="pills-instructions" aria-selected="false">
                    <i class="fa-solid fa-book-open"></i>
                    <p class="mb-0">Instructions</p>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link d-flex align-items-center gap-2" id="pills-nutrition-tab"
                    data-bs-toggle="pill" data-bs-target="#pills-nutrition" type="button" role="tab"
                    aria-controls="pills-nutrition" aria-selected="false">
                    <i class="fa-solid fa-chart-pie"></i>
                    <p class="mb-0">Nutrition</p>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link d-flex align-items-center gap-2" id="pills-tips-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-tips" type="button" role="tab" aria-controls="pills-tips"
                    aria-selected="false">
                    <i class="fa-solid fa-lightbulb"></i>
                    <p class="mb-0">Chef's Tips</p>
                  </button>
                </li>
              </ul>
              <div class="tab-content border-top border-bottom border-secondary border-opacity-25"
                id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-ingredients" role="tabpanel"
                  aria-labelledby="pills-ingredients-tab" tabindex="0">
                  <div class="ing bg-light my-4 rounded-4 p-4 d-flex flex-column gap-3">
                   ${ingredients}
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-instructions" role="tabpanel" aria-labelledby="pills-instructions"
                  tabindex="0">
                  <div class="inst my-4 p-4 d-flex flex-column gap-4">
                   ${instructions}
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-nutrition" role="tabpanel" aria-labelledby="pills-nutrition"
                  tabindex="0">
                  <div class="nut row mt-4">
                    ${nutritions}
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"
                  tabindex="0">
                  <div class="tip mt-4 d-flex flex-column gap-3">
                    ${tips}
                  </div>
                </div>
              </div>

              <button class="btn text-white fw-bold bg-gradiant rounded-3 py-2 px-3 mt-5"><i
                  class="fa-solid fa-rotate"></i>
                Try Another Recipe</button>
            </div>
          </div>
        </div>
    
    `;

    var ingredients = document.querySelector(".ing");
    var instructions = document.querySelector(".inst");
    var nutritions = document.querySelector(".nut");
    var tips = document.querySelector(".tip");

    ingredients.innerHTML = "";
    for (var i = 0; i < recipe[index].ingredients.length; ++i) {
        
        ingredients.innerHTML += ` <div class="d-flex align-items-center gap-2">
                      <p
                        class="mb-0 w-fit-content bg-primary text-white fw-bold rounded-circle num fs-small d-flex justify-content-center align-items-center">
                        ${i + 1}</p>
                      <p class="mb-0 text-dark-gray">${recipe[index].ingredients[i]}</p>
                    </div>`
    };

    instructions.innerHTML = "";
    for (var i = 0; i < recipe[index].instructions.length; ++i) {
        instructions.innerHTML += ` <div class="d-flex align-items-center gap-2">
                      <p
                        class="mb-0 w-fit-content bg-primary text-white fw-bold rounded-4 num d-flex justify-content-center align-items-center">
                        ${i + 1}</p>
                      <p class="mb-0 text-dark-gray">
                        ${recipe[index].instructions[i]}</p>
                    </div>`
    };

    tips.innerHTML = "";
    for (var i = 0; i < recipe[index].tips.length; ++i) {
        tips.innerHTML += `<div class="d-flex align-items-center gap-2 tipp py-4 px-3 rounded-4">
                      <i class="fa-solid fa-circle-check text-orange fs-5"></i>
                      <p class="mb-0 text-dark-gray">${recipe[index].tips[i]}</p>
                    </div>`
    };

    nutritions.innerHTML = `
    <div class="col-12 col-lg-6 mt-3">
                      <div class="d-flex align-items-center justify-content-between rounded-3 bg-gray p-4">
                        <div class="d-flex align-items-center gap-2">
                          <div class="icon rounded-3 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-fire text-danger"></i>
                          </div>
                          <p class="mb-0 text-dark-gray">Calories</p>
                        </div>
                        <p class="mb-0 fw-bold fs-5">${recipe[index].nutrition["Calories"]}</p>
                      </div>

                    </div>
                    <div class="col-12 col-lg-6 mt-3">
                      <div class="d-flex align-items-center justify-content-between rounded-3 bg-gray p-4">
                        <div class="d-flex align-items-center gap-2">
                          <div class="icon rounded-3 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-dumbbell"></i>
                          </div>
                          <p class="mb-0 text-dark-gray">Protein</p>
                        </div>
                        <p class="mb-0 fw-bold fs-5">${recipe[index].nutrition["Protein"]}</p>
                      </div>

                    </div>
                    <div class="col-12 col-lg-6 mt-3">
                      <div class="d-flex align-items-center justify-content-between rounded-3 bg-gray p-4">
                        <div class="d-flex align-items-center gap-2">
                          <div class="icon rounded-3 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-wheat-awn"></i>
                          </div>
                          <p class="mb-0 text-dark-gray">Carbohydrates</p>
                        </div>
                        <p class="mb-0 fw-bold fs-5">${recipe[index].nutrition["Carbohydrates"]}</p>
                      </div>

                    </div>

                    <div class="col-12 col-lg-6 mt-3">
                      <div class="d-flex align-items-center justify-content-between rounded-3 bg-gray p-4">
                        <div class="d-flex align-items-center gap-2">
                          <div class="icon rounded-3 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-droplet"></i>
                          </div>
                          <p class="mb-0 text-dark-gray">Fat</p>
                        </div>
                        <p class="mb-0 fw-bold fs-5">${recipe[index].nutrition["Fat"]}</p>
                      </div>

                    </div>
                    <div class="col-12 col-lg-6 mt-3">
                      <div class="d-flex align-items-center justify-content-between rounded-3 bg-gray p-4">
                        <div class="d-flex align-items-center gap-2">
                          <div class="icon rounded-3 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-seedling"></i>
                          </div>
                          <p class="mb-0 text-dark-gray">Fiber</p>
                        </div>
                        <p class="mb-0 fw-bold fs-5">${recipe[index].nutrition["Fiber"]}</p>
                      </div>
                    </div>

                    <div class="col-12 col-lg-6 mt-3">
                      <div class="d-flex align-items-center justify-content-between rounded-3 bg-gray p-4">
                        <div class="d-flex align-items-center gap-2">
                          <div class="icon rounded-3 d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-cube"></i>
                          </div>
                          <p class="mb-0 text-dark-gray">Sodium</p>
                        </div>
                        <p class="mb-0 fw-bold fs-5">${recipe[index].nutrition["Sodium"]}
                        </p>
                      </div>
                    </div>`;


            var warningMessage = document.querySelector(".warn");
            if(recipe[index].cookTime + recipe[index].prepTime > 45){
                warningMessage.classList.remove("d-none")
            }
            else{
                warningMessage.classList.add("d-none")
            }

            var btn = document.querySelector(".btn");

            btn.addEventListener("click", function(){
            var randomRecipe = Math.floor(Math.random()*10 + 1);
            printRecipe(randomRecipe);
})

   

}

var randomRecipe = Math.floor(Math.random() * 10 + 1);
printRecipe(randomRecipe);





