import React from 'react';
import axios from 'axios';
import needAuth from '../authorize/needAuth';

class Jokes extends React.Component {
    state = {
        jokes: [],
    };

    render() {
        return (
            <div>
                <h2>Checkout The Dad Jokes</h2>
                <div>
                    {this.state.jokes.map(jokes => (
                        <h4 key = {jokes.id}>{jokes.joke}</h4>
                    ))}
                </div>
            </div>
        )
    };

    componentDidMount() {
        axios
        .get('http://localhost:3300/api/jokes')
        .then(res => {
            this.setState({ jokes: res.data })
        })
        .catch(err => console.log(err));
    };

}

export default needAuth(Jokes);