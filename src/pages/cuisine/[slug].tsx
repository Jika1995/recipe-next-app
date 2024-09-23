import RecipesList from '@/components/recipes/RecipesList';
import { useFetchRecipes } from '@/services/fetchRecipes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCuisine, setPage, setSearchText } from '@/store/slices/cuisineFilters.slice';
import { Group, Pagination, Skeleton } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const CategoryPage = () => {
  const router = useRouter();
  const category = router.query.slug?.toString() ?? '';

  const dispatch = useAppDispatch();
  const recipesFilters = useAppSelector((state) => state.recipesFilters);
  const [recipes, { isLoading }] = useFetchRecipes(recipesFilters);
  const page = recipesFilters.offset === 0 ? 0 + 1 : recipesFilters.offset;

  useEffect(() => {
    dispatch(setPage(0))
  }, []);

  useEffect(() => {
    dispatch(setSearchText(""))
    dispatch(setCuisine(category));
  }, [router.query]);

  const handleChange = (offset: number) => {
    dispatch(setPage(offset));
  };

  if (isLoading) {
    return (
      <div className=" grid grid-cols-3 gap-10 w-3/4 mx-auto mt-4">
        <Skeleton h={300} />
        <Skeleton h={300} />
        <Skeleton h={300} />
        <Skeleton h={300} />
        <Skeleton h={300} />
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-10 items-center justify-center">
      <RecipesList recipes={recipes?.results ?? []} />
      <Group position="center">
        <Pagination
          value={page}
          onChange={handleChange}
          siblings={2}
          total={recipes?.totalResults || 0}
        />
      </Group>
    </div>
  )
}

export default CategoryPage