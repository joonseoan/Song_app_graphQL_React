import React from 'react';

// export default ({children}) => {

export default ({children}) => {

	// console.log(props)


	// "children" passed on props 
	/*
		
		***********************8
		"children" is "SongList" of an IndexRoute 
		which is a compoennt in "Route path = '/' "

			<Router history={hashHistory}> 
	  			<Route path='/'component={App}>
	  				<IndexRoute component={SongList}/>
	  			</Route>
	  		</Router>

	*/

	console.log(children)
	return <div className="container">{children}</div>


}
