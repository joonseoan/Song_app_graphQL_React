import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client'; // It is like Apollo store
import { ApolloProvider } from 'react-apollo'; // It encloses React app


// import App from './components/App_dummy';
// import SongList from './components/song_list';
// import SongCreate from './components/song_create';

import App from './components/App';
import SongList from './components/Song_list';
import SongCreate from './components/Song_create'

// console.log('hashHistory', hashHistory, 'IndexRoute: ', IndexRoute)

// apollo client here is finding a Grapql server 
//	by assumming that the graphql server exists at ('/graphql')
const client = new ApolloClient({});

const Root = () => {
	
	// ApolloProvider encloses the React components here.
	// 'client={client}' GraphQL store delivers a callback function to React
	//  	to run in the GraphQL store that works with the GraphQL server.
	return (
	// ApolloProvider always encloses React router
  	<ApolloProvider client={client}>
  		{/* routing....v3 : Rourter, Route, IndexRoute, and hashHistory --> like history and location*/}
			
		<Router history={ hashHistory }>
			<Route path='/' component={ App } >
				<IndexRoute component={ SongList } />
				<Route path='/song/new' component={SongCreate} />
			</Route>
		</Router>
			{/* 
			
				<Router history={hashHistory}> 
					<Route path='/'component={App}>
						<IndexRoute component={SongList}/>
						<Route path='song/new' component={SongCreate} />
					</Route>
				</Router>	
			*/}
  	</ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
