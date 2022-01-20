const growingInField = []

export const addPlant = (seed) => {
    growingInField.push(seed)
    return growingInField
}

export const usePlants = () => {
    const growingInFieldCopy = growingInField.map(seed => ({...seed}))
    return growingInFieldCopy
}