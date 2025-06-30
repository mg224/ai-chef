import React from "react"
import IngredientsList from "./IngredientsList"
import AIRecipe from "./AIRecipe"
import { getRecipeFromMistral } from "../ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    console.log(recipeSection)

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    return (
        <main>
            <div className="home-instructions">
                <h3>Welcome! Enter some ingredients to generate a recipe.</h3>
            </div>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            <div>
                {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} ref={recipeSection} />}
            </div>
            
            {recipe && <AIRecipe recipe={recipe} />}
        </main>
    )
}