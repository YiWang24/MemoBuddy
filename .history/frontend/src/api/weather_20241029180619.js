import request from "@/lib/axios"
import API
export const weaterApi = {
    getWeather:(lat,lon)=>{
        return request.get(`weather?lat=${lat}&lon=${lon}`)
    }
}