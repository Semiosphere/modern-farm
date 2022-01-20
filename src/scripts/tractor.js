import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';
import { addPlant, usePlants } from './field.js';


export const plantSeeds = (parentPlan) => {
    for (const childPlan of parentPlan) {
        for(const plan of childPlan) {
            if (plan === 'Asparagus') {
                const importedAsparagus = createAsparagus()
                addPlant(importedAsparagus)
            } else if (plan === 'Corn') {
                const importedCorn = createCorn()
                addPlant(importedCorn[0])
                addPlant(importedCorn[1])
            } else if (plan === 'Potato') {
                const importedPotato = createPotato()
                addPlant(importedPotato)
            }  else if (plan === 'Soybean') {
                const importedSoybean = createSoybean()
                addPlant(importedSoybean)
            } else if (plan === 'Sunflower') {
                const importedSunflower = createSunflower()
                addPlant(importedSunflower)
            } else if (plan === 'Wheat') {
                const importedWheat = createWheat()
                addPlant(importedWheat)
            }
        }
    } return usePlants()
}