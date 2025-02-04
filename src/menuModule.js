export function menuContent(){
    const contentContainer = document.getElementById("content")
    contentContainer.textContent = ""

    const text = document.createElement("h1")
    text.textContent = "Take a look at our delicious menu options"
    contentContainer.appendChild(text)

    const labels = document.createElement("div")
    labels.classList.add("labels")
    const label1 = document.createElement("h1")
    const label2 = document.createElement("h1")

    label1.textContent = "ENTREES"
    label2.textContent = "SIDES"

    labels.appendChild(label1)
    labels.appendChild(label2)

    contentContainer.appendChild(labels)


    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")
    contentContainer.appendChild(menuContainer)

    const menuColumn1 = document.createElement("div")
    const menuColumn2 = document.createElement("div")
    menuColumn1.classList.add("menu-column")
    menuColumn2.classList.add("menu-column")
    menuContainer.appendChild(menuColumn1)
    menuContainer.appendChild(menuColumn2)


    const menuItem1 = document.createElement("div")
    const menuItem2 = document.createElement("div")
    const menuItem3 = document.createElement("div")
    const menuItem4 = document.createElement("div")
    const menuItem5 = document.createElement("div")
    const menuItem6 = document.createElement("div")

    menuItem1.classList.add("menu-item")
    menuItem2.classList.add("menu-item")
    menuItem3.classList.add("menu-item")
    menuItem4.classList.add("menu-item")
    menuItem5.classList.add("menu-item")
    menuItem6.classList.add("menu-item")

    menuItem1.textContent = "ALFREDO PASTA"
    menuItem2.textContent = "CHEESEBURGER"
    menuItem3.textContent = "BUFFALO CHICKEN WINGS"

    menuItem4.textContent = "CAESAR SALAD"
    menuItem5.textContent = "SEASONED FRIES"
    menuItem6.textContent = "CHILI SOUP"

    menuColumn1.appendChild(menuItem1)
    menuColumn1.appendChild(menuItem2)
    menuColumn1.appendChild(menuItem3)

    menuColumn2.appendChild(menuItem4)
    menuColumn2.appendChild(menuItem5)
    menuColumn2.appendChild(menuItem6)
    







    //contentContainer
    //      |
    //      |
    //      |
    //  -> text --------- menuContainer
    //                      |
    //                      |
    //             col1---------------col2
    //               |                  |
    //               |                  |
    //              3 cards            3 cards

    
}