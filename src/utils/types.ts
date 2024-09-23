export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  cookingMinutes: number;
  preparationMinutes: number;
  license: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  analyzedInstructions: any[]; // assuming this is an array
  cheap: boolean;
  creditsText: string;
  cuisines: string[];
  dairyFree: boolean;
  diets: string[];
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  occasions: string[];
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30: boolean;
  weightWatcherSmartPoints: number;
  dishTypes: string[];
  extendedIngredients: Ingredient[];
  summary: string;
  winePairing: WinePairing;
}

type Ingredient = {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  measures: Measures;
  meta: string[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
}

type Measures = {
  metric: UnitMeasure;
  us: UnitMeasure;
}

type UnitMeasure = {
  amount: number;
  unitLong: string;
  unitShort: string;
}

type WinePairing = {
  pairedWines: string[];
  pairingText: string;
  productMatches: ProductMatch[];
}

type ProductMatch = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
}


export type RecipeGeneral = {
  id: number,
  title: string,
  image: string,
  imageType: string,
}
