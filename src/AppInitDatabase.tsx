
import React, {ChangeEvent, useEffect, useRef, useState} from "react";

import {
    function_AT_CRUD_EXEC,
    function_AT_DISPLAY_ACTION,
    function_AT_SQLITE_DB_OPEN_START
} from "./state_redux/actions_functions";
import {connect, useSelector, useStore} from "react-redux";
import global_names from "./state_reducers/global_names";
import {SQLiteHook, useSQLite} from "react-sqlite-hook";
import {AT_CRUD_EXEC, IS_LOADING} from "./state_redux/actions_types";
// import {f_read_from_states} from "./code_global/global_functions";

import {initialStateType} from "./state_redux/initial_state";
import store from "./state_redux/store";
import {f_read_from_states} from "./code_global/GlobalFunctions";
import {crud_exec_function} from "./state_saga/crud_exec_function";
import GridMemoPage from "./GridMemo/GridMemoPage";
import {GlobalsContext} from "./context_globals/globals_context";


interface JsonListenerInterface {
    jsonListeners: boolean,
    setJsonListeners: React.Dispatch<React.SetStateAction<boolean>>,
}
interface existingConnInterface {
    existConn: boolean,
    setExistConn: React.Dispatch<React.SetStateAction<boolean>>,
}

// Singleton SQLite Hook
export let sqlite_api: SQLiteHook;
export let sqlite_api_global: SQLiteHook;
// Existing Connections Store
export let existingConn: existingConnInterface;
// Is Json Listeners used
export let isJsonListeners: JsonListenerInterface;
// mysettigs -

const AppInitDatabase: React.FC = (props:any) => {

    const { global_props, global_dispatch } = React.useContext(GlobalsContext);

    //mysettigs +
    const message = useRef("");
    const [isModal,setIsModal] = useState(false);

    const onProgressImport = async (progress: string) => {
        if(isJsonListeners.jsonListeners) {
            if(!isModal) setIsModal(true);
            message.current = message.current.concat(`${progress}\n`);
        }
    }
    const onProgressExport = async (progress: string) => {
        if(isJsonListeners.jsonListeners) {
            if(!isModal) setIsModal(true);
            message.current = message.current.concat(`${progress}\n`);
        }
    }

    sqlite_api_global = useSQLite({
        onProgressImport,
        onProgressExport
    })

    useEffect(() => {

        // function fLoad1() {

        // console.log("=== uuid1 ", uuid_v1(null,null,null))
        console.log("=== step_ db function_AT_SQLITE_DB_OPEN_START ")

        props.function_AT_SQLITE_DB_OPEN_START({

            sqlite_api_global:sqlite_api_global,
            database_name:global_names.db_work

        })

        console.log("=== AppInitDatabase work_sqlile_database START ")

    },[])



    useEffect(() => {

        console.log("=== step_ db useEffect props.work_sqlile_database ")
        console.log("=== step_ db props.work_list_content_posts_data ",props.work_list_content_posts_data)


        if(
            null != props.work_sqlile_database
            &&
            IS_LOADING != props.work_sqlile_database
        ) {

            console.log("=== store AppInitDatabase work_sqlile_database FINISH OK! ",props.work_sqlile_database)
            // props.function_AT_CRUD_EXEC({
            //     database_to_exec: props.work_sqlile_database,
            //     sqlite_api_global_to_exec: props.work_sqlite_api_global,
            //     entity: "content_types",
            //     crud_type:'read',
            //     state_data_name: "work_list_content_types_data",
            //     state_ready_name: "work_list_content_types_ready"
            // })
            //
            // props.function_AT_CRUD_EXEC({
            //     database_to_exec: props.work_sqlile_database,
            //     sqlite_api_global_to_exec: props.work_sqlite_api_global,
            //     entity: "content_posts",
            //     crud_type:'read',
            //     state_data_name: "work_list_content_posts_data",
            //     state_ready_name: "work_list_content_posts_data_ready"
            // })
            //
        }


        return () => {

        };
    },[props.work_sqlile_database])

    // useEffect(() => {
    //
    //     // console.log("=== store work_list_content_posts_data_ready ",props.work_list_content_posts_data_ready)
    //
    //     return () => {
    //
    //     };
    // }, [props.work_list_content_posts_data_ready]);

    const crud_operation = (params:any)=>{

        console.log("=== store crud_operation ",params)

        props.function_AT_CRUD_EXEC({
            database_to_exec: props.work_sqlile_database,
            sqlite_api_global_to_exec: props.work_sqlite_api_global,
            entity: params.entity, // "content_posts",
            crud_type: params.crud_type, // 'create',
            operation_data:params.operation_data,
            //TODO - NEW VARs + return 1eL IN THEM
            state_data_name: "work_list_content_posts_data",
            state_ready_name: "work_list_content_posts_data_ready"
            // state_data_name: "new_post_created",
            // state_ready_name: "new_post_created_ready"
        })

    }

    const crud_posts_create = (params:any)=>{
        console.log("=== store crud_posts_read ",Date.now())

        props.function_AT_CRUD_EXEC({
            database_to_exec: props.work_sqlile_database,
            sqlite_api_global_to_exec: props.work_sqlite_api_global,
            entity: "content_posts",
            crud_type:'create',
            operation_data:params.operation_data,
            //TODO - NEW VARs + return 1eL IN THEM
            state_data_name: "work_list_content_posts_data",
            state_ready_name: "work_list_content_posts_data_ready"
            // state_data_name: "new_post_created",
            // state_ready_name: "new_post_created_ready"
        })

    }

    const refresh_user_work_data = (params:any)=>{
        console.log("=== state1 refresh_user_work_data")
        crud_posts_read (params)
    }

    const crud_posts_update = (params:any)=> {

        console.log("=== step_ CRUD params", params)

        console.log("=== step_ CRUD action START crud_posts_update ", Date.now())
        console.log("=== step_ CRUD params.crud.update_and_display_mode", params.crud.update_and_display_mode)

        // if(crud.update_mode = update_modes.direct)
        //      focus of input will be stay in  - becouse NO re-render of window
        // if(crud.update_mode = update_modes.via_redux)
        //      focus of input will be lost - becouse re-render of  all window
        if ('minimalistic'==params.crud.update_and_display_mode){
            const tparams = {
                        action: {
                            type: AT_CRUD_EXEC,
                            params_to_exec:
                                {
                                    database_to_exec: props.work_sqlile_database,
                                    sqlite_api_global_to_exec: props.work_sqlite_api_global,
                                    entity: "content_posts",
                                    crud_type: 'update',
                                    operation_data: params.operation_data,
                                    state_data_name: "work_list_content_posts_data",
                                    state_ready_name: "work_list_content_posts_data_ready"
                                }
                        }
                    }

                const ret_crud_exec_function = crud_exec_function(tparams)
                console.log("=== ret_crud_exec_function ", ret_crud_exec_function)
            }

        if ('maximalistic'==params.crud.update_and_display_mode) {
            props.function_AT_CRUD_EXEC({
                database_to_exec: props.work_sqlile_database,
                sqlite_api_global_to_exec: props.work_sqlite_api_global,
                entity: "content_posts",
                crud_type: 'update',
                operation_data: params.operation_data,
                state_data_name: "work_list_content_posts_data",
                state_ready_name: "work_list_content_posts_data_ready"
            })
        }

    }

    const crud_posts_delete = (params:any)=>{

        console.log("=== step_ CRUD action START crud_posts_delete ",Date.now())

        props.function_AT_CRUD_EXEC({
            database_to_exec: props.work_sqlile_database,
            sqlite_api_global_to_exec: props.work_sqlite_api_global,
            entity: "content_posts",
            crud_type:'delete',
            operation_data:params.operation_data,
            state_data_name: "work_list_content_posts_data",
            state_ready_name: "work_list_content_posts_data_ready"
        })

    }

    const crud_posts_delete_all = (params:any)=>{

        console.log("=== step_ CRUD action START crud_posts_delete_all ",Date.now())

        props.function_AT_CRUD_EXEC({
            database_to_exec: props.work_sqlile_database,
            sqlite_api_global_to_exec: props.work_sqlite_api_global,
            entity: "content_posts",
            crud_type:'delete_all',
            operation_data:params.operation_data,
            state_data_name: "work_list_content_posts_data",
            state_ready_name: "work_list_content_posts_data_ready"
        })

    }
    const crud_posts_read = (params:any)=>{

        console.log("=== step_ CRUD action START crud_posts_read ",Date.now())

        props.function_AT_CRUD_EXEC({
            database_to_exec: props.work_sqlile_database,
            sqlite_api_global_to_exec: props.work_sqlite_api_global,
            entity: "content_posts",
            crud_type:'read',
            operation_data:params.operation_data,
            state_data_name: "work_list_content_posts_data",
            state_ready_name: "work_list_content_posts_data_ready"
        })

    }

    // const [redux_data, set_redux_data] = useState({} as initialStateType);


    // const ret_useSelector = useSelector((state) => {
    //     console.log("=== redux_data useSelector state",state)
    //     set_redux_data(state as initialStateType)
    // })


    console.log("=== props.work_list_content_posts_data AppInitDatabase ",props.work_list_content_posts_data)

    const [input_value, set_input_value] = useState('');
    const [state, set_state] = useState({
        test1_field:'text1'
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 👇 Store the input value to local state
        if(input_value!==e.target.value) {

            set_state(
                {
                    ...state,
                    [e.target.name]: e.target.value,
                }
            );

            const toperation_data = {

                content_post_description: 'Description +++' + Date.now(),

                    content_post_title: e.target.value,
                    // 'Post +++ '+Date.now(),
                    content_post_content: 'Content ' + Date.now(),

                    content_post_owner_guid: '',
                    content_post_guid: '1682929320723',

            }

            props.function_AT_CRUD_EXEC({
                database_to_exec: props.work_sqlile_database,
                sqlite_api_global_to_exec: props.work_sqlite_api_global,
                entity: "content_posts",
                crud_type: 'update',
                operation_data: toperation_data,
                state_data_name: "work_list_content_posts_data",
                state_ready_name: "work_list_content_posts_data_ready"
            })

        }
    }

    return(
        <>

            <p>global_props.current_application.title  {global_props.current_application.title.text}</p>
            <p>InputTest Redux level 1692000318188 {Date.now()}</p>

            <input id={'edit_id_'+'title_'}
                   type="text"
                   name={'test1_field'}
                   onChange={(e)=> {
                       handleChange(e)
                   }} value={state.test1_field}
            />

            <GridMemoPage/>

        </>
    )

}

//mysettigs +

const ReadFromState_mapStateToProps = (state:any) =>
{

    console.log("=== ReadFromState_mapStateToProps")
    console.log(state)

    console.log("=== Tab3Container")
    console.log(state)

    var ret1 = f_read_from_states({state:state})
    console.log("=== Tab3Container ret1 ",ret1)

    let ret2 = {...ret1,

        //new main data -> STEP 4
        work_list_content_posts_data:   state.sqlite.work_list_content_posts_data,
        work_list_content_posts_data_ready:  state.sqlite.work_list_content_posts_data_ready,

        work_sqlile_database:   state.sqlite.work_sqlile_database,
        work_sqlite_api_global: state.sqlite.work_sqlite_api_global,
    }
    console.log("=== Tab3Container ret2 ",ret2)
    return ret2
}

const WriteToState_mapDispatchToProps = {
    function_AT_SQLITE_DB_OPEN_START:function_AT_SQLITE_DB_OPEN_START,
    function_AT_DISPLAY_ACTION:function_AT_DISPLAY_ACTION,

    function_AT_CRUD_EXEC:function_AT_CRUD_EXEC,

}

export default connect(ReadFromState_mapStateToProps, WriteToState_mapDispatchToProps)(AppInitDatabase);

//mysettigs -
