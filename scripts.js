const calculator = document.querySelector(".calculator")
const keys = document.querySelector(".calculator__keys")
const display = document.querySelector(".calculator__display")

keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        //Remove 'is-depressed' class from all operator keys after number key is pressed
        Array.from(key.parentNode.children).forEach((k) =>
            k.classList.remove("is-depressed")
        )

        if (!action) {
            //replace default 0 in calc with number pressed
            if (displayedNum === 0 || previousKeyType === "operator") {
                display.textContent === keyContent
                //add key pressed to number already in display
            } else {
                display.textContent = displayedNum + keyContent
            }

            console.log("number key")
        }

        if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ) {
            //to know which operator is active
            key.classList.add("is-depressed")
            //add custom attribute
            calculator.dataset.previousKeyType = "operator"
            console.log("operator key")
        }

        if (action === "decimal") {
            display.textContent = displayedNum + "."

            console.log("decimal key")
        }

        if (action === "clear") {
            console.log("clear key")
        }

        if (action === "calculate") {
            console.log("calculate key")
        }
    }
})
