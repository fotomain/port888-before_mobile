
//NEW CRUD SQL STEP 2 file_+function = update_change_order_in_list_sql_text
export function update_change_order_in_list_sql_text() {
    //TODO temp1 NAME RANDOM FROM HERE MODULE
    //NEW CRUD SQL STEP 4 do sql
    return `
DROP TABLE IF EXISTS _temp1;

CREATE TABLE _temp1 (
                        guid1 TEXT,
                        guid2 TEXT,
                        order_in_list1 decimal(20,10),
                        order_in_list2 decimal(20,10)
);


INSERT INTO _temp1 (
    guid1,
    guid2,
    order_in_list1,
    order_in_list2
)
VALUES (

    'content_post_guid1_data' ,
    'content_post_guid2_data',
           (
               SELECT order_in_list
               FROM content_posts
               WHERE content_post_guid = 'content_post_guid1_data'
           ),

           (   SELECT order_in_list
               FROM content_posts
               WHERE content_post_guid = 'content_post_guid2_data')

       );


UPDATE content_posts
SET 
    order_in_list =
        CASE
            WHEN content_post_guid='content_post_guid1_data'
                THEN (SELECT order_in_list2 FROM _temp1 LIMIT 1 )
            WHEN content_post_guid='content_post_guid2_data'
                THEN (SELECT order_in_list1 FROM _temp1 LIMIT 1 )
            ELSE order_in_list
            END

WHERE content_post_guid='content_post_guid2_data' OR content_post_guid='content_post_guid1_data'
;

select order_in_list, * from content_posts;

DROP TABLE IF EXISTS _temp1;


    `
}
