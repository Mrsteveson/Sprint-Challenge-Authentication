import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: 'Bubs',
        password: 'pass'
    };

    handleChange = event => {
        const { id, value } = event.target;

        this.setState({ [id]: value })
    };

    submitLogin = event => {
        event.preventDefault();

        axios
        .post('http://localhost:3300/api/login', this.state)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/jokes')
        })
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit = {this.submitLogin}>
                    <div>
                        <label htmlFor="username" />
                        <input
                            id="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            type="text"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" />
                        <input
                            id="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                        />
                    </div>
                    <button type = 'submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;