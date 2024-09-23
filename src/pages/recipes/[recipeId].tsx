
import RecipeDetails from '@/components/recipes/RecipeDetails';
import { Container } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react'

const RecipePage = () => {

    const router = useRouter();
    const id = router.query.recipeId?.toString() ?? '';

    return (
        <Container p='md'>
            <RecipeDetails id={id} />
        </Container>
    )
}

export default RecipePage
