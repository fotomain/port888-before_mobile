

import React, {useEffect} from 'react';

//{ field_name: 'content_post_title'}
const PostCardField = (props:any) => {

    const init_state={
        [props.field_name]:props.field_value //props.item_handle.item_data.content_post_title,
    }

    const [state, set_state] = React.useState({...init_state});

    console.log("=== PostCardField props",props)

    const timeoutId = React.useRef(0);

    const debounce_interval = 700;
    const field_change = (e:any) =>{

        set_state({
            ...state,
            ...{
                [props.field_name]: e.target.value,
            }
        })

        if (timeoutId.current) {
            window.clearTimeout(timeoutId.current);
        }

        //=== debounce
        timeoutId.current = window.setTimeout(() => {

            console.log('=== window.setTimeout')

                props.item_handle.change_item_data(
                    {
                        ...props,
                        field_destination:props.field_destination,
                        index: props.item_index,
                        field_name: props.field_name,
                        field_new_value: e.target.value
                    }
                )




        }, debounce_interval);

    }

    useEffect(() => {

        set_state({...state,...{
                [props.field_name]:props.field_value
            }})

        return () => {

        };
    }, [props.field_value]);


    return(
        <div>

            <input
                    style={{ width:'80px'}}
                    type="text"
                    onChange={(e)=> {

                        field_change(e)

                    }} value={state[props.field_name]} />
        </div>
    )
};

export default PostCardField
