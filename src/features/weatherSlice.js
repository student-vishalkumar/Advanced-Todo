import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const Api_Key = "55fba01411044191b8441040250104";
console.log('ak', Api_Key)
const Base_Url = "http://api.weatherapi.com/v1/current.json"

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async(city = "New Delhi", {rejectValue}) => {

        try {
            const response = await fetch(`${Base_Url}?key=${Api_Key}&q=${city}`);

            if(!response.ok) {
                throw new Error('city not found');
                
            }

            return await response.json();
        } catch (error) {
            return rejectValue(error);
        }
        
    }
)
const initialState = {
    data: null,
    loading: false,
    error: null
}
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(fetchWeather.pending, (state) => {
            state.loading = true,
            state.error = null;
         })
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
         })
    }
})

export default weatherSlice.reducer;