import React, { Component } from 'react';
import { render } from 'react-dom';
export const PROMPTS = [
    {
        image: "/assets/images/foodforthought.gif",
        answer:'FOODFORTHOUGHT',
        userAnswer: [],
        total:7,
        tiles: <div className='tileRapper'>
            <div></div><div></div><div></div><div></div><br></br>
            <div></div><div></div><div></div><br></br>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    },
    {
        image: "/assets/images/curiosity.gif",
        answer:'CURIOSITYKILLEDTHECAT',
        userAnswer: [],
        total: 21,
        tiles: <div className='tileRapper'>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><br></br>
            <div></div><div></div><div></div><div></div><div></div><div></div><br></br>
            <div></div><div></div><div></div><br></br>
            <div></div><div></div><div></div>
        </div>
    },
    {
        image: "/assets/images/talldrink.gif",
        answer:'TALLDRINKOFWATER',
        userAnswer: [],
        total: 16,
        tiles: <div className='tileRapper'>
            <div></div><div></div><div></div><div></div><br></br>
            <div></div><div></div><div></div><div></div><div></div><br></br>
            <div></div><div></div><br></br>
            <div></div><div></div><div></div><div></div><div></div>
        </div>
    }
];