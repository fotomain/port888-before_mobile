

import React, {useEffect} from "react";

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './state_redux/store';

import AppInitDatabase from "./AppInitLocalDatabase";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase_stack/firebase-config";
const store = configureStore({  });

const AppInitReduxData=()=>{

    return(

        <ReduxProvider store={store}>

            <AppInitDatabase />

        </ReduxProvider>

        )

}

export default AppInitReduxData
