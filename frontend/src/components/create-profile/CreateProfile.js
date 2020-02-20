import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profile_actions";

import { composeDog }from "../../actions/dog_actions"


class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      gender: "",
      age: "",
      breed: "",
      location: "",
      status: "",
      skills: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      medical: [],
      personality:"",
      name:"",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
      gender: this.state.gender,
      age: this.state.age,
      breed: this.state.breed,
      medical: this.state.medical,
      personality: this.state.personality,
      name: this.state.name,
    };

    this.props.composeDog(profileData, this.props.history);
  }

  updateCheckbox(field) {
    return e => {

      if (!this.state.medical.includes(e.currentTarget.value)) {
        this.setState({
          medical: this.state.medical.concat([e.currentTarget.value])
        });
      } else {
        let newMedical = this.state.medical.splice(this.state.medical.indexOf(e.currentTarget.value), 1);
        this.setState({
          medical: newMedical
        });
      }
      console.log(this.state)
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    const options = [
      { label: "* Select Your Dog's Breed", value: 0 },
      { label: "Labrador Retriever", value: "Labrador Retriever" },
      { label: "German Shepherd", value: "German Shepherd" },
      { label: "Golden Retriever", value: "Golden Retriever" },
      { label: "Bulldog", value: "Bulldog" },
      { label: "Beagle", value: "Beagle" },
      { label: "French Bulldog", value: "French Bulldog" },
      { label: "Yorkshire Terrier", value: "Yorkshire Terrier" },
      { label: "Poodle", value: "Poodle" },
      { label: "Rottweiler", value: "Rottweiler" },
      { label: "Boxer", value: "Boxer" },
      { label: "Other", value: "Other" }
    ];

    const options1 = [
      { label: "* Select Your Dog's Gender", value: 0 },
      { label: "Male", value: "male" },
      { label: "Female", value: "female" }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                Create Your Dog's Profile
              </h1>
              <p className="lead text-center">
                Let's get some information to make your dog's profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                {/* <div className="form-group">
                  <input
                    type="text"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    placeholder="* Profile Handle"
                    error={errors.handle}
                    className="form-control"
                  />
                  <small className="form-text text-muted">
                    A unique handle for your profile URL. Your full name,
                    company name, nickname
                  </small>
                </div> */}

                <TextFieldGroup
                  placeholder="* Your Dog's Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="A name for your dog's profile."
                />

                <SelectListGroup
                  placeholder="Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={options1}
                  error={errors.gender}
                  info="Please select your dog's gender"
                />

                <SelectListGroup
                  placeholder="Breed"
                  name="breed"
                  value={this.state.breed}
                  onChange={this.onChange}
                  options={options}
                  error={errors.breed}
                  info="Select your dog'sbreed"
                />

                <TextFieldGroup
                  placeholder="Age"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChange}
                  error={errors.age}
                  info="How many years and months for your dogs"
                />

                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Could be your current city name"
                />

                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use comma separated values (eg. SIT, STAY, DOWN, COME, OFF, HEEL)"
                />

                <TextAreaFieldGroup
                  placeholder="Tell us the personality of your Dog"
                  name="personality"
                  value={this.state.personality}
                  onChange={this.onChange}
                  error={errors.personality}
                  info="Tell us a little about your dog"
                />

                {["Arthritis", "Allergies", "Diabetes", "IBD", "Obesity"].map((disease, index) => {
                  return (
                    <div key={`${disease}-${index}`} className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id={`inlineCheckbox${index}`} value={disease} onChange={this.updateCheckbox('medical')} />
                      <label className="form-check-label" >{disease}</label>
                    </div>
                  )
                }
                )}

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Your Social Network Links to Make More Friends
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                  {(this.props.newDog) ? <span>ADDED {Object.values(this.props.newDog)[13]} !!!</span> : null}
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
  newDog: state.dogs.new
});

export default connect(mapStateToProps, { composeDog })(
  withRouter(CreateProfile)
);
