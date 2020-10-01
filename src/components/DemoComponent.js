import React, { Component } from 'react';
import { PROMPTS } from './prompts.js';
import { Container, Row, Col, Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import GamePlay from'./GamePlayComponent'

const DemoInfo = ({ prompts }) => {
    return(
        <ul>
      {prompts.map(prompt => <li key={prompt.image}>{prompt.answer}</li>)}
    </ul>
    );
}
export default DemoInfo;