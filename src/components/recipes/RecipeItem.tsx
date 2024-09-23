import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { RecipeGeneral } from '@/utils/types';
import Link from 'next/link';

export type RecipeItemProps = {
  item: RecipeGeneral
}
const RecipeItem = ({ item }: RecipeItemProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className='max-w-[300px] w-full'>
      <Card.Section>
        <Image
          src={item.image}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Text fw={500}>{item.title}</Text>
      <Link href={`/recipes/${ item.id }`}>
        <Button color="blue" fullWidth mt="md" radius="md">
          View details
        </Button>
      </Link>
    </Card>
  )
}

export default RecipeItem