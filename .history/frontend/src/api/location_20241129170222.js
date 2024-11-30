export const locationApi = {
  getLocation: async () => {
    console.log("clicked location");

    if (navigator.geolocation) {
      console.log("test");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("test");
        const userCoordinates = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        console.log(userCoordinates);
        sessionStorage.setItem(
          "user-coordinate",
          JSON.stringify(userCoordinates)
        );
        const check = sessionStorage.getItem("user-coordinate");
        console.log(check);
        return userCoordinates;
      });
    } else {
      console.log("No support available");
    }
  },
};
