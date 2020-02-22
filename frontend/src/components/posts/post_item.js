import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

class PostItem extends Component {


  render() {
    const { post, session } = this.props;

    return (
        <div className="card card-body mb-3">
            <div className="row">
              <div className="col-md-2">
                <a href="profile.html">
                  <img className="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt="" />
                </a>
                <br />
                <p className="text-center">John Doe</p>
              </div>
              <div className="col-md-10">
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                  nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                  eveniet cum cupiditate aliquam?</p>
              </div>
            </div>
          </div>
    )
}
}



PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps)(PostItem);
