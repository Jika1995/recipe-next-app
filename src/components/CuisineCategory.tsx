import React, { useEffect, useState } from 'react'
import { Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const cuisineCategories = [{ id: 1, title: "African" },
{ id: 2, title: "Asian" },
{ id: 3, title: "American" },
{ id: 4, title: "British" },
{ id: 5, title: "Cajun" },
{ id: 6, title: "Caribbean" },
{ id: 7, title: "Chinese" },
{ id: 8, title: "Eastern European" },
{ id: 9, title: "European" },
{ id: 10, title: "French" },
{ id: 11, title: "German" },
{ id: 12, title: "Greek" },
{ id: 13, title: "Indian" },
{ id: 14, title: "Irish" },
{ id: 15, title: "Italian" },
{ id: 16, title: "Japanese" },
{ id: 17, title: "Jewish" },
{ id: 18, title: "Korean" },
{ id: 19, title: "Latin American" },
{ id: 20, title: "Mediterranean" },
{ id: 21, title: "Mexican" },
{ id: 22, title: "Middle Eastern" },
{ id: 23, title: "Nordic" },
{ id: 24, title: "Southern" },
{ id: 25, title: "Spanish" },
{ id: 26, title: "Thai" },
{ id: 27, title: "Vietnamese" }
]
const CuisineCategory = () => {
  const [categoryName, setCategoryName] = useState('')
  const router = useRouter();
  const category = router.query.slug?.toString() ?? '';

  useEffect(() => {
    setCategoryName(category);
    console.log(categoryName, 'cagtego')
  }, [router.query]);

  return (
    <div className="flex flex-wrap gap-4 p-4 items-center justify-center">
      {
        cuisineCategories.map((category) => (
          <Link href={`/cuisine/${ category.title }`} key={category.id}
          >
            <div className={categoryName === category.title ? "bg-yellow-400 p-2 rounded-xl hover:bg-yellow-600" : 'bg-cyan-400 p-2 rounded-xl hover:bg-sky-700'}>
              <Text color="white" weight={500}>{category.title}</Text>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default CuisineCategory