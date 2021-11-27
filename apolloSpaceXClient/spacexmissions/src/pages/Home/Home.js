import React from "react";
import { gql, useQuery } from '@apollo/client';

import MainHeader from "../../components/MainHeader/MainHeader";

const GET_COMPANY_INFO = gql`
    {
        company {
            name
            summary
        }
    }
`;

const Home = () => {
    const {data, loading, error} = useQuery(GET_COMPANY_INFO);

    if({error}) return <div > <h3>{error.message} </h3>  </div>
    if (loading) return <div ><p>🚀 ITS LOADING</p></div>

    return <div>
        <MainHeader name={data.company.name} description={data.company.summary}></MainHeader>
    </div>
}

export default Home;