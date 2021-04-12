const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < bakeryA.length; j++) {
      for (let k = 0; k < bakeryB.length; k++) {
        // if comparing the recipe and ingredients is true, return the name of the recipe.
        if (ingredientCheck(bakeryA[j], bakeryB[k], recipes[i].ingredients)) {
          return recipes[i].name;
        }
      }
    }
  }
};

// helper function to compare the recipe and ingredients.
const ingredientCheck = function (ingredientA, ingredientB, recipeIngredients) {
  for (let i = 0; i < recipeIngredients.length; i++) {
    // check whether the recipe includes ingredients or not.
    if (recipeIngredients[i] === ingredientA || recipeIngredients[i] === ingredientB) {
      // if it does, delete the ingredient from the recipe array.
      recipeIngredients.splice(i, 1);
    }
  }
  // if the recipe array is empty return true.
  if (recipeIngredients.length === 0) {
    return true;
  }
  return false;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base'],
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese'],
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate'],
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey'],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
