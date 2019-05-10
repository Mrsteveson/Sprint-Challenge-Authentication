import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        const { id, value } = event.target;

        this.setState({ [id]: value })
    };

    submitRegister = event => {
        event.preventDefault();

        axios
        .post('http://localhost:3300/api/register', this.state)
        .then(res => {
            // localStorage.setItem('token', res.data.token);
            console.log(res);
            this.setState({
                username: '',
                password: '',
            })
            this.props.history.push('/jokes')
        })
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit = {this.submitRegister}>
                    <div>
                        <label htmlFor="username" />
                        <input
                            id="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            type="text"
                            placeholder='Username'
                        />
                    </div>

                    <div>
                        <label htmlFor="password" />
                        <input
                            id="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                            placeholder='Password'
                        />
                    </div>
                    <button type = 'submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;