import React from 'react';
import styles from './Description.module.css';


let recipeTitle = "Chipotle Lime Salmon Tacos with Corn Avocado Peach Salsa & Cilantro Yogurt Sauce";
let recipeShortDescription = "Incredible chipotle salmon tacos with fresh corn avocado peach salsa and a creamy, spicy cilantro yogurt sauce. These baked chipotle lime salmon tacos are packed with flavor and protein for the perfect dinner to make all summer long! Truly the BEST salmon tacos you’ll ever make.";

function RecipeAuthor(){
    let authorLink = "https://www.allrecipes.com/recipe/7048/zucchini-pineapple-bread-i/";
    let authorPhoto = "https://www.ambitiouskitchen.com/wp-content/uploads/2020/12/ak-mini-bio-2a-1-708x515.jpg";
    let authorName = "Monique Volz";

    return(
        <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Monique Volz" className={styles.imageUpdates} width="40%" />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Ambitious Kitchen</a> 
      </div>
   </div>
    );
}

class RecipeDescription extends React.Component {
    render(){
        return (
            <div>
            <div> 
            <h1>{recipeTitle}</h1>
            <p>{recipeShortDescription}</p>
            </div>
            <RecipeAuthor/>
            </div>
        )
    }
}

export default RecipeDescription;