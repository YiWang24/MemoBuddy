import request from "@/lib/axios"
import { API_ROUTES } from "@/constants"
export const weaterApi = {
    getWeather:(lat,lon)=>{
        return request.get(API_ROUTES.WEATCHER.GET({lat,lon}))
    }
}