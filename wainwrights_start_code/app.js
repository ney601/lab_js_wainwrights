let wainwrightsData;
const list = document.querySelector("#wainwrights-list");

const getAllWainwrights = async () => {
    const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json')
    const wainwrightsData = await response.json();

    
}














// const allWainWrights = getAllWainwrights();
// console.log(allWainWrights);