import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Turn Of Phrase</h2>
                            <p>
                                Turn of Phrase is a mobile based brain teaser... blah blah blah... lorem ipsum lorem ipsum. how much text do we beed. this is probably good. what a little more? is this good? we'll try this much.okay.
                            </p>
                        </div>
                        <div className='col'>
                            <Button>Try Game</Button>
                            <Button>What the Hell is Turn of Phrase?</Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;