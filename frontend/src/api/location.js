// import { log } from "console";

export const location = {

    getLocation: () => {
        console.log("clicked");

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else {
            console.log("No support available");
        }
    },

    showPosition: (position) => {
        const userCoordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        }
        sessionStorage.setItem("user-coordinate", JSON.stringify(userCoordinates))
    }
}