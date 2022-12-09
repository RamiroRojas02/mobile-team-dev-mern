import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import apiUrl from "../../../url";


const getCity = createAsyncThunk('getCity',async()=>{
    try{
        const response = await axios.get(`${apiUrl}/cities`)
        return response.data.response//esto seria el payload

    }catch(error){

        return{
            payload:"Error"
        }
    }
})
/*  */
const getCityFilter = createAsyncThunk("getCitiesFilter",async ({value,continente}) => {
    let url = `${apiUrl}/cities/?${continente}${value}`;
      try {
        const res = await axios.get(url);

        return {
          city: res.data.response,
        };
      } catch (error) {

        return {
          payload: "Error",
        };
      }
    }
  );
  const getMyCities = createAsyncThunk('myCities', async(id)=>{
    try {
      let res = await axios.get(`${apiUrl}/cities/?userId=${id}`)

      return {
        city : res.data.response
      }
    } catch (error) {
  
    }
  })
  const deleteCity = createAsyncThunk("citiesEliminate", async(data)=>{
    let {token,id}= data
    let header = { headers : { 'Authorization': `Bearer ${token}` }}

    let res = await axios.delete(`${apiUrl}/cities/${id}`,header)
    return {
      eliminate : res.data
    }
  
  })
  const editCity = createAsyncThunk("CityEdit",async(cityToChange)=>{
    let {id, city,token} = cityToChange
    let header = { headers : { 'Authorization': `Bearer ${token}` }}

    try {
      let res= await axios.put(`${apiUrl}/cities/${id}`,city,header)

      return {
        messagge : res.data.message,
        cityUpdate : res.data.citySync,
        success: res.data.success
      }
    } catch (error) {
      return error
    }
  
  } )

const cityActions={
    getCity,
    getCityFilter,
    deleteCity,
    editCity,
    getMyCities,
};
export default cityActions