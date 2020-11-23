export interface Plant {
  id: string;
  name: string;
  description?: string;
  lightRequired: number;
  wateringRequired: number;
  icon: string;
}

export interface PlantsData {
  plants: Plant[];
}

export interface PlantData {
  plant: Plant;
}

export interface PlantVars {
  id: string;
}

export interface OwnedPlant {
  id: string;
  name: string;
  location: string;
  lastWatered?: any;
  plant: Plant;
}

export interface OwnedPlantData {
  ownedPlants: OwnedPlant[];
}
