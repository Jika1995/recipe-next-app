import { useFetchRecipeById } from '@/services/fetchRecipeById'
import { Container, Title, Text, Box, Image, List, Checkbox } from '@mantine/core'
import React, { useState } from 'react'
import { Tabs } from '@mantine/core';

type RecipeDetailsProps = {
  id: string
}

const RecipeDetails = ({ id }: RecipeDetailsProps) => {
  const [recipe] = useFetchRecipeById({ id })

  const [activeTab, setActiveTab] = useState<string | null>('instructions');

  return (
    <Container>
      <Box className="flex flex-col bg-primary rounded-lg p-4 text-secondary gap-6">
        <Box className="flex flex-col md:flex-row gap-2">
          <Box className="flex flex-col gap-4 w-1/2">
            <Title order={1} size="h2">{recipe?.title}</Title>
            <Text className="font-bold">Health information:</Text>
            <List className="text-secondary">
              <List.Item>
                <Checkbox color="green" checked={recipe?.dairyFree} label="Dairy-free" indeterminate={!recipe?.dairyFree}
                />
              </List.Item>
              <List.Item>
                <Checkbox color="green" checked={recipe?.glutenFree} label="Gluten-free" indeterminate={!recipe?.glutenFree} />
              </List.Item>
              <List.Item>
                <Checkbox color="green" checked={recipe?.ketogenic} label="Ketogenic" indeterminate={!recipe?.ketogenic} />
              </List.Item>
              <List.Item>
                <Checkbox color="green" checked={recipe?.vegan} label="Vegan" indeterminate={!recipe?.vegan} />
              </List.Item>
              <List.Item>
                <Checkbox color="green" checked={recipe?.vegetarian} label="Vegetarian" indeterminate={!recipe?.vegetarian} />
              </List.Item>
            </List>
          </Box>
          <Box className="w-1/2">
            <Image
              src={recipe?.image}
              alt={recipe?.title}
              radius="md"
              fit="contain"
            />
          </Box>
        </Box>
        <Box className="flex flex-col gap-2 text-secondary">
          <Tabs value={activeTab} onTabChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Tab value="ingredients" >
                Ingredients
              </Tabs.Tab>
              <Tabs.Tab value="instructions" >
                Instructions
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="ingredients">
              <List className="text-secondary pt-4">
                {
                  recipe?.extendedIngredients.map((ingredient) => (
                    <List.Item >
                      <div className="flex flex-row gap-2">
                        <Text>
                          {ingredient.measures.metric.amount}{ingredient.measures.metric.unitLong}
                        </Text>
                        <Text>
                          {ingredient.name}
                        </Text>
                      </div>
                    </List.Item>
                  ))
                }
              </List>
            </Tabs.Panel>

            <Tabs.Panel value="instructions">
              <Text className="text-secondary pt-4" dangerouslySetInnerHTML={{ __html: recipe?.instructions ?? "" }} />

            </Tabs.Panel>

          </Tabs>


        </Box>
      </Box>
    </Container>
  )
}

export default RecipeDetails