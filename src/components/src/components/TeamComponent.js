import React, { Component } from 'react';
class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <h1>Meet the Team</h1>
                    </div>
                    <div className="row">
                    <div className="col">
                            <h3>Cynthia Houston</h3>
                            <img src="img/IMG_6838.JPG" width="200" height="200" />
                            <p>I have a background in analytical chemistry and I always like solving anagrams. Turn of phrase is an interesting game that keeps the player engaged and stimulated. It is not overly complex and it is fun for the young and the young-at-heart</p>
                        </div>
                        <div className="col">
                            <h3>Will Peterson</h3>
                            <img class="will" src="img/will.JPG" alt="William" width="200" />
                            <p>Graphic design, creator of game. Bootstrap student. An interest in Graphic Design and animation.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Team;