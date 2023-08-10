
export function create_first_sql_text() {

    const sql_text =`
         INSERT INTO content_posts (
                        content_post_owner_guid,
                        content_post_title,
                        content_post_guid,
                        order_in_list
                    )
                VALUES (
                    'content_post_owner_guid_data'
                   ,'content_post_title_data'
                   ,'content_post_guid_data'
                   ,(
                      SELECT (
                          CASE WHEN MIN( order_in_list ) IS NULL THEN 10000 ELSE MIN( order_in_list )-10 END 
                          ) FROM content_posts WHERE  content_post_owner_guid = 'content_post_owner_guid_data'
                        ))

    `

    return sql_text
}
