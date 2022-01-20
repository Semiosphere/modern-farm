export const catalog = (harvestedFood) => {
    for (const food of harvestedFood) {
        document.querySelector(".container").innerHTML += `<div class="food">${food.type}</div>`
    }
}