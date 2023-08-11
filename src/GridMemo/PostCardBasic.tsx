

import React, {useEffect, useState} from 'react';

import styled from "styled-components";
import PostCardField from "./PostCardField";

const styled_div = styled.div``
const styled_textarea = styled.textarea`
    width: 100%;
    rows:3;
  `;

const PostCardBasic = (props:any) => {

    //=== item_calc step1.2
    var item_json = JSON.parse(props.item_handle.item_data['content_post_json'])
    if(null===item_json) {
        item_json = {}
    }

    // console.log("=== PostCardBasic props.item",props)
    // console.log("=== PostCardBasic props.item_handle",props.item_handle)

    const WrapperCard = props.wrapper_card?props.wrapper_card:styled_div
    const WrapperPartUp = props.wrapper_part_up?props.wrapper_part_up:styled_div
    const WrapperTexts = props.wrapper_texts?props.wrapper_texts:styled_div
    const WrapperPartTitle = props.part_title?props.part_title:styled_div
    const WrapperPartParagraph = props.part_description?props.part_description:styled_textarea
    const DragSpace = props.drag_space?props.drag_space:styled_div

    // const wrapper_card_props = props.wrapper_card_props?props.wrapper_card_props:{}

    // console.log("=== card wrapper_card_props",wrapper_card_props)

    const [mouse_is_over_card, set_mouse_is_over_card] = useState(false);

    return(

        <WrapperCard {...props} id={'wrapper_card'}
                     onMouseEnter={()=>{set_mouse_is_over_card(true)}}
                     onMouseLeave={()=>{set_mouse_is_over_card(false)}}
        >
            <WrapperPartUp {...props}  id={'part_up'} src={props.card_image} />
            <WrapperTexts id={'wrapper_texts'}>
                <WrapperPartTitle id={'part_title'} >

                        <PostCardField {...{
                            ...props,
                            field_destination:'post',
                            field_name: 'content_post_title',
                            field_value: props.item_handle.item_data['content_post_title']
                        }}/>

                        <PostCardField {...{
                            ...props,
                            field_destination:'post',
                            field_name: 'content_post_description',
                            field_value: props.item_handle.item_data['content_post_description']
                        }}/>

                                {/*item_calc step1.1*/}
                                {/*<p>Quantity</p>*/}
                                <PostCardField {...{
                                    ...props,
                                    field_destination:'json',
                                    field_name: 'quantity',
                                    field_value: item_json.quantity,
                                }}/>

                                {/*<p>Price</p>*/}
                                <PostCardField {...{
                                    ...props,
                                    field_destination:'json',
                                    field_name: 'unitprice',
                                    field_value: item_json.unitprice,
                                }}/>

                                {/*<p>Amount</p>*/}
                                <PostCardField {...{
                                    ...props,
                                    field_destination:'json',
                                    field_name: 'amount',
                                    field_value: item_json.amount,
                                }}/>

                </WrapperPartTitle>

                {/*<WrapperPartParagraph id={'part_description'} >{props.item_handle.item_data.content_post_description}</WrapperPartParagraph>*/}
                <WrapperPartParagraph
                    id={'part_json'}
                    value={props.item_handle.item_data.content_post_json}
                    onChange={()=>{}}
                >
                </WrapperPartParagraph>

            </WrapperTexts>
            {(!mouse_is_over_card)?'':<DragSpace/>}
        </WrapperCard>
    )
};

export default PostCardBasic
