
import {drawer_left_width} from "./globals_types";
import {History, DisplaySettings, MessageOutlined, VerifiedUserOutlined} from "@mui/icons-material";

export var initial_setings = {}

const array_of_groups_initial= [
    {
        is_pressed:false,
        group_is_open:true,
        guid:'group111',
        key:'group111', //!!!
        icon:'storage',
        title:'Content',
    },
    {
        is_pressed:false,
        group_is_open:false,
        guid:'group222',
        key:'group222', //!!!
        icon:'storage',
        title:'Community',
    },
    {
        is_pressed:false,
        group_is_open:false,
        guid:'group333',
        key:'group333', //!!!
        icon:'storage',
        title:'Settings',
    },
]

const array_of_items_initial = [

    // ================ POSTS
    {
        route_path:'/posts',
        group_data: {group_item: array_of_groups_initial[0]},
        is_pressed:false,
        guid:'item111',
        icon:'group',
        title:'Posts',
    },
    {
        route_path:'/posttypes',
        group_data: {group_item: array_of_groups_initial[0]},
        is_pressed:false,
        guid:'item222',
        icon:VerifiedUserOutlined,
        title:'Post Types',
    },
    {
        route_path:'/history',
        group_data: {group_item: array_of_groups_initial[0]},
        is_pressed:false,
        guid:'item333',
        icon:History,
        title:'History',
    },

    // ================ COMMUNITY
    {
        route_path:'/users',
        group_data: {group_item: array_of_groups_initial[1]},
        is_pressed:false,
        guid:'item444',
        icon:VerifiedUserOutlined,
        title:'Users',
    },
    {
        route_path:'/messages',
        group_data: {group_item: array_of_groups_initial[1]},
        is_pressed:false,
        guid:'item555',
        icon:MessageOutlined,
        title:'Messages',
    },

    // ================ SETTINGS
    {
        route_path:'/storage',
        group_data: {group_item: array_of_groups_initial[2]},
        is_pressed:false,
        guid:'item666',
        icon:DisplaySettings,
        title:'Display',
    },
    {
        route_path:'/storage',
        group_data: {group_item: array_of_groups_initial[2]},
        is_pressed:false,
        guid:'item777',
        icon:'storage',
        title:'Storage',
    },
]

const array_of_dnd_initial = [
    {

        guid: array_of_items_initial[0].guid+"_dnd_id",
        data_to_use:array_of_items_initial[0],

    },
    {

        guid: array_of_items_initial[1].guid+"_dnd_id",
        data_to_use:array_of_items_initial[1],

    },
    {

        guid: array_of_items_initial[2].guid+"_dnd_id",
        data_to_use:array_of_items_initial[2],

    },

]

//global_props STEP 1
//=================== pages_navigation
initial_setings.show_timestamp=()=>{
    console.log('=== show_timestamp')
    return Date.now()
}


initial_setings.pages_navigation={}
initial_setings.pages_navigation.mode_name=''
initial_setings.pages_navigation.can_go_to_route=''

//=================== ENTRANCE
initial_setings.entrance={}
initial_setings.entrance.mode_name=''
initial_setings.entrance.can_go_to_route=''

//=================== colors
initial_setings.theme={}
initial_setings.theme.colors={}
initial_setings.theme.layout={}
initial_setings.theme.layout.all_applications={}
initial_setings.theme.layout.all_applications.container={}
initial_setings.theme.layout.all_applications.columns={}
initial_setings.theme.layout.all_applications.card={}
initial_setings.theme.layout.all_applications.card.part_up={}
//---
initial_setings.theme.colors.icon_color='white'
initial_setings.theme.colors.background_color='rgb(246, 247, 249)' //like Fire

initial_setings.theme.layout.innerWidth=0
initial_setings.theme.layout.all_applications.container.show_mode='table' // +'grid' +'flex' 'table' 'stack'
initial_setings.theme.layout.all_applications.container.width='960px'
initial_setings.theme.layout.all_applications.columns.number=3
initial_setings.theme.layout.all_applications.grid_width=960
initial_setings.theme.layout.all_applications.grid_height=800
initial_setings.theme.layout.all_applications.grid_cell_background_color='transparent'

initial_setings.theme.layout.all_applications.card.width = '296px'
initial_setings.theme.layout.all_applications.card.height = '240px'
initial_setings.theme.layout.all_applications.card.part_up.height = '124px'

//=================== navigation

initial_setings.is_ready=true

initial_setings.navigation={}
initial_setings.navigation.visibility={}
initial_setings.navigation.visibility.hamburger_left=true
initial_setings.navigation.visibility.drawer_left=true

initial_setings.navigation.do_open_drawer_left = true
initial_setings.navigation.drawer_left_variant='temporary' //persistent
initial_setings.navigation.drawer_left_width=drawer_left_width.wide
initial_setings.navigation.drawer_left_show_wide=true
initial_setings.navigation.drawer_left_auto_close=true

initial_setings.navigation.drawer_left_groups_opened=[]

initial_setings.navigation.mouse_is_over_guid=null


initial_setings.navigation.array_of_groups=array_of_groups_initial
initial_setings.navigation.array_of_items=array_of_items_initial
initial_setings.navigation.array_of_dnd=array_of_dnd_initial

initial_setings.navigation.navigation_pressed={}


//=================== end navigation
//=================== login

initial_setings.info_for_login={}

initial_setings.info_for_login.first_name='first_name1'
initial_setings.info_for_login.last_name='last_name1'
initial_setings.info_for_login.email='email1'
initial_setings.info_for_login.password='password1'
initial_setings.info_for_login.password_confirmed='password_confirmed1'

//=================== login end

initial_setings.system={}
initial_setings.system.api={}

initial_setings.current_user={}
initial_setings.current_user.layout={}
initial_setings.current_user.crud={}


initial_setings.system.api.server='http1'

//============== current_user -> https://gitmind.com/app/docs/m9rl8ehf
initial_setings.current_user.logged_in_auth_info=false
initial_setings.current_user.step_logged_in=false
initial_setings.current_user.step_can_after_logged_in=false
initial_setings.current_user.step_connect_to_settings=false
initial_setings.current_user.step_user_go_to_data=false
initial_setings.current_user.step_user_ready_to_work=false

initial_setings.current_user.user_guid=''
initial_setings.current_user.user_email='ssssss@bb.cc'
initial_setings.current_user.first_name='not_defined'
initial_setings.current_user.last_name='not_defined'
initial_setings.current_user.user_phone=''
initial_setings.current_user.user_work_data=''

initial_setings.current_user.logged_in_auth_info=null // onAuthStateChanged

//============== CRUD
// crud_finish_call_back:set_crud_is_active,

// initial_setings.current_user.crud.update_and_display_mode = 'minimalistic' // maximalistic
initial_setings.current_user.crud.update_and_display_mode = 'maximalistic'

//======= 'minimalistic'
//  1) inline edit: cursor always active in INPUT field - to continue input
//  2) never redraw another components on display with redux - "no other data refresh"
//======= 'maximalistic'
//  1) periodic edit: cursor disapear from INPUT field after the keyboard press finished
//  2) need to redraw another components on display with redux - "full data refresh"

//============== current_user end

initial_setings.current_application={} //=============================== APP
initial_setings.current_application.title= {}
initial_setings.current_application.title.text='PWA Application' // image, color
initial_setings.current_application.title.mode_show=true
initial_setings.current_application.title.mode_position='left' // left middle rigth


// TODO background_color_show background_color_show
//=== DOC https://angrytools.com/gradient/
initial_setings.current_device={}
initial_setings.current_device.info='not defined'
initial_setings.current_device.orientation='not defined'
initial_setings.current_device.screen='not defined'
initial_setings.current_device.is_online='not defined' //online
initial_setings.current_device.is_wide_for_drawer='not defined'
initial_setings.current_device.min_width_for_wide=920
initial_setings.current_device.do_refresh=false

initial_setings.current_application.background={}

initial_setings.current_application.background.background_color_show=false // default=image, color, video
initial_setings.current_application.background.background_data_color_value_source_type='' //still gradient
initial_setings.current_application.background.background_data_color_value=''
initial_setings.current_application.background.background_data_color_opacity=''

initial_setings.current_application.background.background_media_image_show=false // default=image, color, video
initial_setings.current_application.background.background_data_image_value_source_type='' //url, file
initial_setings.current_application.background.background_data_image_value=''
initial_setings.current_application.background.background_data_image_opacity=''

initial_setings.current_application.background.background_media_video_show=false // default=image, color, video
initial_setings.current_application.background.background_data_video_value_source_type='' //url, file, youtube
initial_setings.current_application.background.background_data_video_value=''
initial_setings.current_application.background.background_data_video_opacity=''

// TODO
// initial_setings.current_application.title.mode_position='left' // left middle rigth

initial_setings.current_application.background.background_media_video_show_multiply_files=false
// + every -> show_from_url or download_and_show
initial_setings.current_application.background.background_data_video_value_source_type_url_mode_show='' //show_from_url or download_and_show

