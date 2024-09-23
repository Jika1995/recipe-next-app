import { RecipeGeneral } from '@/utils/types'
import React from 'react'
import RecipeItem from './RecipeItem';

export type RecipesListProps = {
  recipes: RecipeGeneral[];
};

const RecipesList = ({ recipes }: RecipesListProps) => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {
        recipes.map((recipe: any) => (
          <RecipeItem item={recipe} key={recipe.id} />
        ))
      }
    </div>
  )
}

export default RecipesList