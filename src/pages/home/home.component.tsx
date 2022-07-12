import './home.styles.css';
import { useLazyQuery } from "@apollo/client";
import { SPACEX_QUERY } from "../../graphql";
import { useEffect } from 'react';

const LIMIT = 10

function Home() {
    // const [getLaunches, { data, loading, error }] = useLazyQuery(SPACEX_QUERY);
    // console.log(data)

    // useEffect(() => {
    //     getLaunches({ variables: { limit: LIMIT } })
    // }, [])

    return (
        <div>
            home component
        </div>
    )
}

export default Home;