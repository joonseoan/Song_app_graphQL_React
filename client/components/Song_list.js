// pull out all song lists

import React, { Component } from 'react';

// allows us to write the GraphQL queries inside of javascript.
// import gql from 'graphql-tag';

// binding graphQL query with react components
//  and then reaching out to the graphQL data
import { graphql } from 'react-apollo';
import _ from 'lodash';
import { Link } from 'react-router';

import query from '../queries/fetch_song';

class SongList extends Component {

    renderSongs() {

        const { songs } = this.props.data;
        
        // 1) 
        // if(songs) {
            // just make sure that it renders twice
            //  because the queries issues and it completes
            // Songs field is not available at the first rendering.
            // console.log('data: ', this.props.data.songs)
            return _.map(songs, song => {
                return <li key={song.id} className="collection-items">
                    { song.title }
                </li>;
            });

        // }
    }
    
    render() {

        // 2) when 'Songs' is not available
        if(this.props.data.loading) return <div />;

        // ********
        // The returned data from the graphQL query is assigned to 'props' object.
        // console.log(this.props);
        return( 
        <div>
            <ul className="collection">
                { this.renderSongs() }
            </ul>
            <Link to="/songs/new"
                  className="btn-floating btn-large red right"
            >
                <i className="material-icons">add</i>
            </Link>
        </div>);
    }
}

// Writing graphQL queries in javascript.
// *************************************************
// Here, as we utilized the GraphQL query,
//  we can get the reuired data only.
// We do not need to get all data in the mongoDB documents.
// ************************************************

// In convention, the query should be written in a different file.
// const query = gql`
//     query {
//         songs {
//             id
//             title
//         }
//     }
// `;

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