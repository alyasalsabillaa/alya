import {createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"; 
import axios from "axios"; 

export const getPegawai = createAsyncThunk("pegawai/getPegawai", async() => { 
    const response = await axios.get('http://localhost:5000/pegawai'); 
    return response.data; 
}); 


export const savePegawai = createAsyncThunk("pegawai/savePegawai", async({nama, provinsi, kabupaten, kecamatan, kelurahan, id}) => { 
    const response = await axios.post('http://localhost:5000/pegawai',{
        nama, 
        provinsi, 
        kabupaten, 
        kecamatan, 
        kelurahan, 
        id
    }); 
    return response.data; 
}); 
const pegawaiEntity = createEntityAdapter ({ 
    selectId: (pegawai) => pegawai.id 
}); 

const pegawaiSlice = createSlice ({ 
    name: "pegawai", 
    initialState: pegawaiEntity.getInitialState(), 
    extraReducers : { 
        [getPegawai.fulfilled] : (state, action) => { 
            pegawaiEntity.setAll(state, action.payload); 
        }, 
        [savePegawai.fulfilled] : (state, action) => { 
            pegawaiEntity.addOne(state, action.payload); 
        }
    }
}); 

export const pegawaiSelectors = pegawaiEntity.getSelectors (state => state.pegawai); 
export default pegawaiSlice.reducer; 