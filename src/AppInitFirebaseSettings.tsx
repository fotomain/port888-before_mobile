
import {GlobalsContext} from "./context_globals/globals_context";
import React, {useEffect} from "react";
import AppInitReduxData from "./AppInitReduxData";

import firebase from "firebase/compat";

import {auth, db} from "./firebase_stack/firebase-config";
import {onAuthStateChanged} from "firebase/auth";

interface Props  {
    user_work_data?:any,
    children?:JSX.Element
}

const AppInitFirebaseSettings: React.FC<Props> = (props:Props) => {

    const { global_props, global_dispatch } = React.useContext(GlobalsContext);

    useEffect(() => {

        const call_auth = onAuthStateChanged(auth, (user_result) => {

            console.log("=== onAuthStateChanged START")

            console.log("=== onAuthStateChanged user_result 111 ", +Date.now(), user_result)

            console.log("=== onAuthStateChanged user_result.email " + Date.now(), user_result?.email)


            if (!user_result) {

                console.log("=== onAuthStateChanged user_result  !!!!!! sign signOut", auth)

                    const udata = global_props.current_user
                    udata.logged_in_auth_info = null
                    udata.user_guid = ''
                    udata.user_work_data = {}
                    udata.email =''
                    udata.first_name =''
                    udata.last_name =''
                    udata.step_logged_in = false
                    udata.step_can_after_logged_in = false
                    global_dispatch({type: "SETTER_USER", global_new_data: {user: udata}})

            } else {

                console.log("=== onAuthStateChanged user_result  !!!!!! sign signIn", user_result)
                    //=== !!!!! firebase assigned uid
                    const udata = global_props.current_user
                    udata.user_guid = user_result.uid
                    udata.logged_in_auth_info = auth
                    //CHANGE STEPS 2 signIn onAuthStateChanged goolge
                    udata.step_logged_in = true
                    udata.step_can_after_logged_in = true

                    console.log("=== udata.user_work_data ",udata.user_work_data)
                    console.log("=== udata.step_logged_in = true",Date.now())
                    console.log("=== udata.step_can_after_logged_in = true")

                    global_dispatch({type: "SETTER_USER", global_new_data: {user: udata}})

            }

        })

        return () => {
            call_auth()
        };
    }, []);


    useEffect(() => {

        if(!global_props.is_ready){

            console.log('=== global_props.is_ready FALSE' )

            var tdata = global_props
            tdata = {...tdata,...{is_ready : true}}
            console.log("=== SETTER_GLOBALPROPS start ",tdata)
            global_dispatch({
                type: 'SETTER_GLOBALPROPS',
                global_new_data:{global_props:tdata},
            })

        }
        else {
            console.log('=== global_props.is_ready TRUE' )
        }

        return () => {

        };
    }, [global_props.is_ready]);



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
