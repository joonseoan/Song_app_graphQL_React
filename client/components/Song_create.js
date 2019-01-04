import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

import query from '../queries/fetch_song';

class SongCreate extends Component {

    constructor(props) {
        super(props);

        this.state = { title: ''};
    }

    handleSubmit(e) {

        // [Mutation]
        // It works with 'gql' down below.
        // sending this values (values in class) to graphQL
        // In other words, sending values from the client and the server.
        this.props.mutate({
            
            // ****** variables here equivalent to $title in gql
            variables: {
                title: this.state.title
            },
            // ******** In order to refetch and render them in the browser again,
            //      whenever the mutation runs 
            //      specifically whenever it creates a new song
            //      we need to use the object as followed.
            //      Just bear in mind that mutation and query are fully differnt functions.

            // When the fetch is associated with the variable,
            //      we need to use variable property. However, it is not this time.
            // refetchQueries: [{ query : query, variables }]
            
            refetchQueries: [{ query }]

        // redirect to SongList only after it successfull finishes the mutation
        // it is same as history.push in the other version of history.
        }).then(() => hashHistory.push('/'));

        // When fails
        // catch(() => {})

        e.preventDefault();
    }

    render() {

        // ************************************************************8
        // For the mutation, instead of 'props.data' which is used in 'query'
        //      'props.mutate' is implemented 
        //      so that the Promise 'resolve callback' returns.

        // find mutate!
        console.log(this.props);

        return <div>
            <Link to="/">Back</Link>
            <h3>Create a New Song</h3>
            <form onSubmit= { this.handleSubmit.bind(this) }>
                <label>Song Title: </label>
                <input onChange={e => { this.setState({ title : e.target.value })}}
                       value = { this.state.title }
            />
            </form>
        
        </div>;
    }
}


// ***************** To get the value inside of class above,
//  we need to use query variable in graphQL.

/* 

// muation with function name

mutation AddSong($title: String) {
  
  addSong(title: $title) {
    id
    title
  }
  
}

// in Query Variable
// no '$' here.
{
  "title": "Rapsody"
}


*/
const mutation = gql `

    mutation AddSong ($title: String) {
        addSong(title: $title ) {
            title
        }
    }

`;

export default graphql(mutation)(SongCreate);