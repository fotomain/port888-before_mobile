

import React from "react";

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './state_redux/store';

import AppInitDatabase from "./AppInitDatabase";
const store = configureStore({  });

const AppInitReduxData=()=>{

    return(

        <ReduxProvider store={store}>

            <AppInitDatabase />

        </ReduxProvider>

        )

}

export default AppInitReduxData
