export const harvestPlants = (growingArray) => {
    //returns an array of seed objects
    let seedObjects = []
    for (const plant of growingArray) {
        let i = 0
        if(plant.type === "Corn") {
            let cornOutput = plant.output / 2
            for (i; cornOutput > i; i++) {
                seedObjects.push(plant)
            }
        } else {
            for (i; plant.output > i; i++) {
                seedObjects.push(plant)
            }
        }
    }
    //for each plant object's *output* value, add that many of the plant objects to the array. EX: output:2, add 2 of that plant obj
        //corn is the exception. Only add half of the *output* value 
    return seedObjects
}