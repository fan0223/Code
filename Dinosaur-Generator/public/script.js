console.log("script.js loaded");
document.querySelector("#btnLoad").addEventListener('click', () => {
    getDinoName();
    getDinoImage();
})


async function getDinoName() {
    const response = await fetch("/dinoname")
    const data = await response.json()
    const dinoName = data[0].join(" ")
    console.log(dinoName);

    if (document.querySelector("#dinoName") != null) {
        document.querySelector("#dinoName").remove();
    }
    if (document.querySelector("#dinoImage") != null) {
        document.querySelector("#dinoImage").remove();
    }
    let dinoNameDiv = document.createElement("div")
    dinoNameDiv.id = "dinoName"
    dinoNameDiv.textContent = dinoName;
    document.querySelector('#wrapper').appendChild(dinoNameDiv);
}

async function getDinoImage() {
    const response = await fetch("/dinoimage")
    const data = await response.json()
    const dinoimage = await data.value[Math.floor(Math.random() * data.value.length)];
    const dinoimageUrl = await dinoimage.thumbnailUrl;
    const dionAlt = dinoimage.name;


    let img = document.createElement('img');
    img.id = "dinoImage"
    img.src = dinoimageUrl;
    img.alt = dionAlt;
    document.querySelector('#wrapper').appendChild(img);
}