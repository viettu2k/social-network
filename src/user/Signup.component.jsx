import React, { Component } from "react";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
            open: false,
            loading: false,
        };
    }

    handleChange = (name) => (event) => {
        this.setState({ error: "" });
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const { name, email, password } = this.state;
        const user = {
            name,
            email,
            password,
        };
        // console.log(user);
        this.signup(user).then((data) => {
            if (data.error)
                this.setState({ error: data.error, loading: false });
            else
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    error: "",
                    open: true,
                });
        });
    };

    signupForm = (name, email, password) => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={this.handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={this.handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={this.handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <button
                onClick={this.clickSubmit}
                className="btn btn-raised btn-primary"
            >
                Create new account
            </button>
        </form>
    );

    signup = (user) => {
        return fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => console.log(error));
    };

    render() {
        const { name, email, password, error, open, loading } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Sign Up</h2>

                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

                <div
                    className="alert alert-info"
                    style={{ display: open ? "" : "none" }}
                >
                    New account is successfully created! Please Sign In!
                </div>

                {loading ? (
                    <div className="jumbotron text-center">
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    ""
                )}

                {this.signupForm(name, email, password)}
            </div>
        );
    }
}

export default Signup;
