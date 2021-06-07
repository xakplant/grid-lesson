import { request } from '../config/request'

export const getEpisodes = () => 
    request.get('/episode').then(({ data })=>data)

export const getData = async () => {
   try {
       const responce = await getEpisodes()
       console.log({ responce })
   } catch {

   }
}