import { gql } from "@apollo/client";


export const SPACEX_QUERY = gql`
    query launch($limit: Int, $offset: Int, $find: LaunchFind) {
        launches(limit: $limit, offset: $offset, find: $find) {
            id
            launch_date_local
            rocket {
                rocket_name
                rocket_type
            }
            mission_name
            launch_success
            links {
                flickr_images
            }
        }
    }
`