import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SongCreate extends Component {

    constructor(props) {
        super(props);

        this.state = { title: ''};
    }

    handleSubmit(e) {

        // It works with 'gql' down below.
        // sending this values (values in class) to graphQL
        // In other words, sending values from the client and the server.
        this.props.mutate({
            
            // ****** variables here equivalent to $title in gql
            variables: {
                title: this.state.title
            }
        });

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