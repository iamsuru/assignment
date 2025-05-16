const counters = [
    { counter1: [] },
    { counter2: [] },
    { counter3: [] }
]

const countersContainer = document.getElementById("counters")
const inputItemCount = document.getElementById("inputItemCount")
const checkoutBtn = document.getElementById("checkoutBtn")

const getTotalItems = counterCustomersItemsCount =>
    counterCustomersItemsCount.reduce((sum, val) => sum + val, 0)

const getBestCounterIndex = () => {
    const totals = counters.map(counter => {
        const key = Object.keys(counter)[0]
        return getTotalItems(counter[key])
    })
    const min = Math.min(...totals)
    return totals.indexOf(min)
}

const renderCounters = () => {
    countersContainer.innerHTML = ""
    const bestIndex = getBestCounterIndex()

    counters.forEach((counter, i) => {
        const key = Object.keys(counter)[0]
        const customerList = counter[key]
        const total = getTotalItems(customerList)

        const counterDiv = document.createElement("div")
        counterDiv.classList.add("counter-box")
        if (i === bestIndex) counterDiv.classList.add("best-counter")

        counterDiv.innerHTML = `
            <div class="counter-header">
                <h3>Counter ${i + 1}</h3>
                <div class="counter-info"><i class="fas fa-user"></i> ${customerList.length} customers</div>
            </div>
            <ul class="counter-list">
                ${customerList.length > 0
                ? customerList.map(items => `<li>🛒 ${items} items</li>`).join("")
                : `<li><em>No customers</em></li>`
            }
            </ul>
            <div class="total-items">Total Items: ${total}</div>
        `

        countersContainer.appendChild(counterDiv)
    })
}

const checkoutItem = () => {
    const val = parseInt(inputItemCount.value)
    if (!val || val <= 0) {
        alert("Please enter a valid number of items")
        return
    }

    const bestIndex = getBestCounterIndex()
    const key = Object.keys(counters[bestIndex])[0]
    counters[bestIndex][key].push(val)
    inputItemCount.value = ""
    renderCounters()
}

checkoutBtn.addEventListener("click", checkoutItem)

inputItemCount.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        checkoutItem()
    }
})

renderCounters()
