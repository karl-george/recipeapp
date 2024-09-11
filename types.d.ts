export interface Recipes {
  results: Result[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface Recipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: null;
  cookingMinutes: null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  nutrition: Nutrition;
  summary: string;
  cuisines: any[];
  dishTypes: string[];
  diets: string[];
  occasions: any[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId: null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

interface Result {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: null | number;
  cookingMinutes: null | number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  analyzedInstructions: AnalyzedInstruction[];
  spoonacularScore: number;
  spoonacularSourceUrl: string;
  license?: string;
}

interface Ingredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

interface Step {
  number: number;
  step: string;
  ingredients: Ingredient2[];
  equipment: Ingredient2[];
  length?: Length;
}

interface Length {
  number: number;
  unit: string;
}

interface Ingredient2 {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface Nutrition {
  nutrients: Nutrient[];
  properties: Property[];
  flavonoids: Property[];
  ingredients: Ingredient[];
  caloricBreakdown: CaloricBreakdown;
  weightPerServing: WeightPerServing;
}

interface WeightPerServing {
  amount: number;
  unit: string;
}

interface CaloricBreakdown {
  percentProtein: number;
  percentFat: number;
  percentCarbs: number;
}

interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  nutrients: Nutrient[];
}

interface Property {
  name: string;
  amount: number;
  unit: string;
}

interface Nutrient {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
}

interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Measures;
}

interface Measures {
  us: Us;
  metric: Us;
}

interface Us {
  amount: number;
  unitShort: string;
  unitLong: string;
}
