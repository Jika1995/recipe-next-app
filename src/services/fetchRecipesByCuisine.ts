import { baseAxios } from "@/utils/baseAxios";
import { RecipeGeneral } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export type FetchRecipesByCuisineResponse = {
  offset: number,
  number: number,
  results: RecipeGeneral[],
  totalResults: number
}


export const fetchRecipesByCuisine = async (arg: string) => {

  const { data } = await baseAxios.get(`/recipes/complexSearch?apiKey=${ process.env.NEXT_PUBLIC_API_KEY }&cuisine=${ arg }`);
  console.log(data, 'recipes by cuisine');

  return data;
};

export const useFetchRecipesByCuisine = (arg: string) => {
  const query = useQuery({
    queryFn: () => fetchRecipesByCuisine(arg),
    queryKey: ["recipes", arg],
    initialData: null,
  }); //usequery вызовет функцию, получит данные и вернет

  return [query.data, query] as const;
};