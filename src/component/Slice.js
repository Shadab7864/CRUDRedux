import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../Data";

export const Slice=createSlice({
    name:"add",
    initialState:{
        value:
            Data
        
        
        
    },
    reducers:{
        addEmployee(state,action){
            state.value.push(action.payload);
        },
        getInfo(state,action){
            state.value.map((s,i)=>{

            })
        },
        dltData(state,action){
            state.value.splice(action.payload,1)
        },
        updtEmployee(state,action){
            state.value.map((s,i)=>{
                if(s.Id===action.payload.Id){
                    s.Name=action.payload.Name;
                    s.Email=action.payload.Email;
                    s.RegdNo=action.payload.RegdNo;
                }
            })

        },

    }
    

})
export const {addEmployee,getInfo,dltData,updtEmployee}=Slice.actions
export default Slice.reducer;