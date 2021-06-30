import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { read, update } from "./apiUser";

class EditPofile extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            email: "",
            password: "",
            redirectToProfile: false,
            error: "",
        };
    }
    init = (userId) => {
        const token = isAuthenticated().token;
        read(userId, token).then((data) => {
            if (data.error) {
                this.setState({ redirectToProfile: true });
            } else {
                this.setState({
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    error: "",
                });
            }
        });
    };

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.init(userId);
    }

    isValid = () => {
        const { name, email, password } = this.state;
        if (name.length === 0) {
            this.setState({ error: "Name is required" });
            return false;
        }
        // email@domain.com
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.setState({
                error: "A valid Email is required",
            });
            return false;
        }
        if (password.length >= 1 && password.length <= 5) {
            this.setState({ error: "Password must be at least 6 characters" });
            return false;
        }
        return true;
    };

    handleChange = (name) => (event) => {
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = (event) => {
        event.preventDefault();

        if (this.isValid()) {
            const { name, email, password } = this.state;
            const user = {
                name,
                email,
                password: password || undefined,
            };
            // console.log(user);
            const userId = this.props.match.params.userId;
            const token = isAuthenticated().token;

            update(userId, token, user).then((data) => {
                if (data.error) this.setState({ error: data.error });
                else
                    this.setState({
                        redirectToProfile: true,
                    });
            });
        }
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
                Update
            </button>
        </form>
    );

    render() {
        const { id, name, email, password, redirectToProfile, error } =
            this.state;

        if (redirectToProfile) {
            return <Redirect to={`/user/${id}`}></Redirect>;
        }

        return (
            <div className="container">
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

                <h2 className="mt-5 mb-5">Edit Profile</h2>
                {this.signupForm(name, email, password)}
            </div>
        );
    }
}

export default EditPofile;