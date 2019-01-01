import React, { Component } from 'react';

// to define direct query of GraphQL
import gql from 'graphql-tag';

// to execute query
// With query definition above in front end, 
// 	 	backend (node) executes the query automatically.
// Keep in mind that the query execution is asynch.
// 		In order to get data, it will take some amount of time.
// Therefore, the react will render twice. 
// 		One : before when it starts to execute the query
//      The second : after it receives the data out of the query
import { graphql } from 'react-apollo';

class SongList extends Component {

	renderSongs() {

		const { songs } = this.props.data;
		
		return songs.map(song => {

			return <li 
				className = "collection-item"
				key = {song.id}>{song.title}</li>;
		});
	}

	render() {
		if(this.props.data.loading) return<div>Loading...</div>

		return <ul className="collection">{this.renderSongs()}</ul>;

	}
}

// graphql query
const query = gql`
	{
		songs {
			id
			title
		}
	}
`;

// Query bonindg: whenever new data is queried, 
//  react will render the component again.
// The data is overidden on props object

export default graphql(query)(SongList);