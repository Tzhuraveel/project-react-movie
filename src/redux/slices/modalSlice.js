import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    modal: false,
};


const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modal = action.payload
        }
    }
})

const {reducer: modalReducer, actions:{setModal}} = modalSlice

const modalAction = {
    setModal
}

export {
    modalAction,
    modalReducer
}