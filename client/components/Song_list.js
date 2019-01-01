// pull out all song lists

import React, { Component } from 'react';

// allows us to write the GraphQL queries inside of javascript.
import gql from 'graphql-tag';

// binding graphQL query with react components
//  and then reaching out to the graphQL data
import { graphql } from 'react-apollo';


class SongList extends Component {

    
    render() {
        // ********
        // The returned data from the graphQL query is assigned to 'props' object.
        console.log(this.props);
        return <div>
            SongList
        </div>
    }
}

// Writing graphQL queries in javascript.
// *************************************************
// Here, as we utilized the GraphQL query,
//  we can get the reuired data only.
// We do not need to get all data in the mongoDB documents.
// ************************************************
const query = gql`
    query {
        songs {
            id
            title
        }
    }
`;

// export default SongList;
// The graphQL objeject imported here takes the query; it is a binding.
//  graphQL() executes and has return value 
//  and then immediately executes the components, SongList.

// It is a work flow of React components with the graphQL queries.
//  1. component rendered
//  2. graphQL query issued
//  3. graphQL query completed
//  4. Component rendered again.

export default graphql(query)(SongList);