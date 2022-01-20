

import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';
import { addPlant, usePlants } from './field.js';
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js';

const importedPlan = createPlan()
const importedPlantSeeds = plantSeeds(importedPlan)
const importedAddPlant = addPlant()
const importedUsePlants = usePlants()
const importedHarvestPlants = harvestPlants(importedUsePlants)
catalog(importedHarvestPlants)
console.log(importedHarvestPlants)



