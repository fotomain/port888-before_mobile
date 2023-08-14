import {initial_setings} from "./globals_initial_setings";

export const drawer_left_width = {
    wide : '256px',
    fold : '68px',
}
export interface ILogrecsActions {
    type:     "SETTER_USER"
            | "SETTER_PAGES_NAVIGATION"
            | "SETTER_ENTRANCE"
            | "SETTER_GLOBALPROPS"
            | "SETTER_NAVIGATION"
            | "SETTER_APPLICATION"
            | "SETTER_DEVICE"

            | "TOGGLE_TODO"
            | "DELETE_TODO"
            | "ADD_TODO";
    global_new_data: T1_logrec | any;
}

export interface TGloabal_context {
    global_props: TGloabal_props;
    global_dispatch: React.Dispatch<ILogrecsActions>;
}

// export class C1_current_user {
//
//     email:string='';
//     is_signed_in:boolean=false;
//
// }

export interface TGloabal_props {

    //global_props STEP 2
    logrecs: Array<T1_logrec>;
    is_ready:any;
    info_for_login:any;
    theme:any;
    entrance:any;
    pages_navigation:any;
    navigation:any;
    current_user: any; //C1_current_user;
    current_application: any;
    current_device: any;
    show_timestamp: ()=>void;
}

export interface T1_logrec {
    id?: string;
    text?: string;
    completed?: boolean;
    is_active: boolean;
}
