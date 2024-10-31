export const weaterApi = {
    getWeather:(lat,lon)=>{
        return request.get(`weather?lat=${lat}&lon=${lon}`)
    }
}