import React, { Component } from 'react';

const Scroll = () =>{
    return(
        <div style={overflowY: 'scroll', border: '2px solid black', height: '500px'}>
            {props.children}
        </div>
    );
};

export