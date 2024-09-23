import React from 'react'
import { Text, Title } from '@mantine/core'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex flex-row gap-20 p-4 items-center justify-center bg-primary text-secondary'>
      <Link href="/">
        <Title className="text-xl font-semibold">
          Recipes 2024 with spoonacular API
        </Title>
      </Link>

    </div>
  )
}

export default Header