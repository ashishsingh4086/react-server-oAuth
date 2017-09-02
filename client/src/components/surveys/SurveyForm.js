import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import _ from "lodash";
import { Link } from "react-router-dom";
import validateEmail from '../../utils/validateEmails';
import formFields from './formField';
class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            {" "}
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            {" "}
            Next
            <i className="material-icons right"> done </i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const error = {};

  error.recipients= validateEmail(values.recipients|| '');
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      error[name] = `You must provide an ${name}`;
    }
  });

  return error;
}
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount:false
})(SurveyForm);
