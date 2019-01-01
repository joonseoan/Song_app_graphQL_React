import React, { Component } from 'react';

// In order to get a value from component to mustation variable down below
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SongCreate extends Component {

	constructor(props) {
		super(props);

		this.state = { title: ''}
	}

	onSubmit (e) {
		e.preventDefault();

		

		//console.log(this.state.title)

		// run "mutations" down below.
		// mutate is a property of this.props.
		// Because we imports "gql" up and above.
		this.props.mutate({
			variables : {
				title: this.state.title
			}
		});
	}
	
	render() {

		return <div>
			<h3>Create a New Song</h3>
			<form onSubmit={this.onSubmit.bind(this)}>
				<label>Song Title</label>
				<input 
					type='text' 
					onChange = { e => {this.setState({title: e.target.value})}}
					value = {this.state.title}
				/>				
			</form>

		</div>
	}
}

// mutation location by convention

/*

[In graphiQL]

mutation AddSong ($title: String) {
  addSong(title: $title) {
    id
    title
  }
}

Query Variable
{
  
  	"title": "Sprite vs Coke"
  
}

*/

const mutation = gql`
	mutation AddSong ($title: String) {
  		addSong(title: $title) {
    	title
  }
}
`;

// export default SongCreate;

export default graphql(mutation)(SongCreate);