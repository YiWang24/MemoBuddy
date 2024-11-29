export const location = {
  getLocation: () => {
    console.log("clicked ");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const userCoordinates = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        sessionStorage.setItem(
          "user-coordinate",
          JSON.stringify(userCoordinates)
        );
      });
    } else {
      console.log("No support available");
    }
  },
};
