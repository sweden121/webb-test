let landList = ["Afghanistan", "Albania", "	Algeria", "	Andorra", "Angola", "Armenia", "Cabo Verde", "Cuba", "Dominica", "Egypt", "Germany", "Ghana", "Guatemala"];
let placeList = ["Beaumont Road", "Belgrave Road", "Bentinck Street", "Bromley Street", "Brown Street", "Caroline Street", "Sveavägen 71", "Castle Court"];

const land = document.querySelector("[data-land]");
const place = document.querySelector("[data-place]");

const newPlaceButton = document.querySelector("[button-new-place]");
newPlaceButton.addEventListener("click", newPlace);

newPlace();

function newPlace(){
    let ran = Math.floor((Math.random() * landList.length));
    land.innerHTML = landList[ran];
    place.innerHTML = placeList[ran];
}