import React from 'react';

export default ({ children }) => {

// export default (props) => {

    // ********* Because of setup for react-dom in index.js
    //      import <SongList> and it porps setup are not required.
    // They are automatically working with react-dom setup. 

    // console.log('props:', props);
    // console.log('props.children', props.children);
    

    //********************
    // 'children are all <Route> components under <Router> in index.js 
    // same as imports the components in <App>
    console.log('children.data.songs: ', children);

    return <div className="container">

        { children }

    </div>;

}