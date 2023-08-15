
import React, {useEffect, useState} from "react";

import {GlobalsContext, GlobalsProvider} from "./context_globals/globals_context";
import AppInitFirebaseSettings from "./AppInitFirebaseSettings";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase_stack/firebase-config";


interface Props  {
    user_work_data?:any,
    children?:JSX.Element
}


const AppInitContextGlobals: React.FC<Props> = (props:Props) => {

    console.log("=== store AppInitContextGlobals props",props)
    console.log("=== step_ AppInitContextGlobals props",props)



    return(

                <GlobalsProvider>

                    <AppInitFirebaseSettings user_work_data={props.user_work_data}/>

                </GlobalsProvider>

    )

}

export default AppInitContextGlobals
