function dishes(recipe, available_ingredients) {
    let max_dishes = Infinity; 

    
    for (let ingredient in recipe) {
        if (recipe.hasOwnProperty(ingredient)) {
            
            let available_amount = available_ingredients[ingredient] || 0;

            
            let max_dishes_with_ingredient = Math.floor(available_amount / recipe[ingredient]);

            
            max_dishes = Math.min(max_dishes, max_dishes_with_ingredient);
        }
    }

    
    return isFinite(max_dishes) ? max_dishes : 0;

}
const recipe1 = {flour: 500, sugar: 200, eggs: 1};
const available_ingredients1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(dishes(recipe1, available_ingredients1)); 

// Örnek 2
const recipe2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
const available_ingredients2 = {sugar: 500, flour: 2000, milk: 2000};
console.log(dishes(recipe2, available_ingredients2))
