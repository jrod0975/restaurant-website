export function aboutContent(){
    const contentContainer = document.getElementById("content")
    contentContainer.textContent = ""


    const introduction = document.createElement("h1")
    introduction.textContent = "About Us"
    contentContainer.appendChild(introduction)

    const textArea = document.createElement("div")
    textArea.classList.add("text-area")
    contentContainer.appendChild(textArea)

    const paragraph1 = document.createElement("h3")
    const paragraph2 = document.createElement("h3")

    paragraph1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales turpis at sem mattis posuere. Maecenas pharetra erat nec tellus consequat commodo. Nullam non nulla ut tellus ornare rutrum in non est. Morbi condimentum consectetur nunc"
    paragraph2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales turpis at sem mattis posuere. Maecenas pharetra erat nec tellus consequat commodo. Nullam non nulla ut tellus ornare rutrum in non est. Morbi condimentum consectetur nunc"
    textArea.appendChild(paragraph1)
    textArea.appendChild(paragraph2)

}