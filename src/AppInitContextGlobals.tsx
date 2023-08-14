
import React, {useEffect, useState} from "react";

import {GlobalsContext, GlobalsProvider} from "./context_globals/globals_context";
import AppInitFirebaseSettings from "./AppInitFirebaseSettings";


interface Props  {
    user_work_data?:any,
    children?:JSX.Element
}

const AppInitContextGlobals: React.FC<Props> = (props:Props) => {

    console.log("=== store AppInitContextGlobals props",props)
    console.log("=== step_ AppInitContextGlobals props",props)

    const [state_globals_provider, set_state_globals_provider] = useState(Date.now());
    useEffect(() => {

        console.log('=== state_globals_provider')

        return () => {

        };
    }, [state_globals_provider]);


    return(

                <GlobalsProvider>

                    <AppInitFirebaseSettings user_work_data={props.user_work_data}/>

                </GlobalsProvider>

    )

}

export default AppInitContextGlobals
