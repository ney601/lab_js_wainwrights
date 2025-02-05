let wainwrightsData;
const list = document.querySelector("#wainwrights-list");

const getAllWainwrights = async () => {
    const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json')
    wainwrightsData = await response.json();

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

getAllWainwrights();

const wainwrightsForm = document.querySelector("#wainwrights-form");

wainwrightsForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    // console.log(evt.target["wainwrights-input"].value);

   const filterValue = evt.target["wainwrights-input"].value;
   const filtered = wainwrightsData.filter(wainwright => {
    return wainwright.name.toLowerCase().includes(filterValue.toLowerCase());
   })
    console.log(filtered)
});




// const getAllButton = document.querySelector("#get-all");
// getAllButton.addEventListener("click", () => {
//     getAllWainwrights();
// });
