let wainwrightsData;
const list = document.querySelector("#wainwrights-list");

const getAllWainwrights = async () => {
    const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json')
    const wainwrightsData = await response.json();

    wainwrightsData.forEach((response) => {
        const wainwrightName = document.createElement("li");
        wainwrightName.innerText = response.name;
        list.appendChild(wainwrightName);

        const wainwrightHeight = document.createElement("p");
        wainwrightHeight.innerText = response.heightMetres;
        wainwrightName.appendChild(wainwrightHeight);

        const wainwrightLatitude = document.createElement("p");
        wainwrightLatitude.innerText = response.latitude;
        wainwrightName.appendChild(wainwrightLatitude);

        list.appendChild(wainwrightName);
    });
}



// const getAllButton = document.querySelector("#get-all");
// getAllButton.addEventListener("click", getAllWainwrights);

// getAllWainwrights();










// const allWainWrights = getAllWainwrights();
// console.log(allWainWrights);