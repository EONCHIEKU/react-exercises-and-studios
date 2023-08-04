import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
    let ingredients = ["salmon", "avocado oil", "lime zest", "brown sugar", "chipotle chili powder"];
    return(
        <div className= {styles.IngredientList}>
            <h2>INGREDIENTS</h2>
            <ul>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
}