import React from 'react;
import ReactDOM from 'react-dom';
import button from './../button';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<button></button>,div)
})