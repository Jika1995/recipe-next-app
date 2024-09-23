import { baseAxios } from "@/utils/baseAxios";
import { RecipeGeneral } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export type FetchRecipesResponse = {
  offset: number,
  number: number,
  results: RecipeGeneral[],
  totalResults: number
}

export type FetchRecipesArg = {
  query: string,
  offset: number,
  number: number,
  cuisine: string
}

export const fetchRecipes = async (arg: FetchRecipesArg) => {

  const { data } = await baseAxios.get<FetchRecipesResponse>(`/recipes/complexSearch?apiKey=${ process.env.API_KEY }`, { params: arg });

  return data;
};

export const useFetchRecipes = (arg: FetchRecipesArg) => {
  const query = useQuery({
    queryFn: () => fetchRecipes(arg),
    queryKey: ["recipes", arg],
    initialData: null,
  }); //usequery вызовет функцию, получит данные и вернет

  return [query.data, query] as const;
};