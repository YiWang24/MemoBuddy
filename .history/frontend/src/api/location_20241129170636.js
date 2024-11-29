export const locationApi = {
  getLocation: () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coordinates = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            };
            resolve(coordinates);
          },
          (error) => reject(error)
        );
      } else {
        reject(new Error("Geolocation not supported"));
      }
    });
  },
};
