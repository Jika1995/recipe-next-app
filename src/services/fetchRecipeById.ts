import { useQuery } from '@tanstack/react-query';
import { baseAxios } from '@/utils/baseAxios';
import { Recipe } from '@/utils/types';

export type FetchRecipeByIdArg = {
  id: string
}

export const fetchRecipeById = async (arg: FetchRecipeByIdArg) => {
  const { data } = await baseAxios.get<Recipe>(`/recipes/${ arg.id }/information?apiKey=${ process.env.API_KEY }`);
  return data;
}

export const useFetchRecipeById = (arg: FetchRecipeByIdArg, options: { enabled?: boolean } = {}) => {
  const query = useQuery({
    queryFn: () => fetchRecipeById(arg),
    queryKey: ['recipes', arg],
    ...options,
  });

  return [query.data, query] as const
}