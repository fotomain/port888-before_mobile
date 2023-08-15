import {GlobalsContext} from "./context_globals/globals_context";
import React from "react";
import AppInitReduxData from "./AppInitReduxData";

interface Props  {
    user_work_data?:any,
    children?:JSX.Element
}


const AppInitFirebaseSettings: React.FC<Props> = (props:Props) => {

    const { global_props, global_dispatch } = React.useContext(GlobalsContext);

    return(
        <>
            {(!global_props.is_ready)
                ?
                <div>Loading settings...</div>
                :
                <AppInitReduxData />

            }
        </>)

}

export default AppInitFirebaseSettings
