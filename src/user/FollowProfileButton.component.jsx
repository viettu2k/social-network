import React, { Component } from "react";

class FollowProfileButton extends Component {
    render() {
        return (
            <div className="d-inline-block mt-5">
                {!this.props.following ? (
                    <button className="btn btn-success btn-raised mr-5">
                        Follow
                    </button>
                ) : (
                    <button className="btn btn-warning btn-raised">
                        Unfollow
                    </button>
                )}
            </div>
        );
    }
}

export default FollowProfileButton;
