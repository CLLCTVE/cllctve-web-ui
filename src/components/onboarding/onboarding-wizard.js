import React, {Component} from 'react';
import { Form } from 'react-final-form'
import {withRouter, Redirect} from 'react-router-dom';
import {StyledButton} from '../fields/renderFields';
import { ONBOARDING_ENTRY_MAP_BY_NAME } from '../../lib/util';

class OnBoardingWizard extends Component {
  
  static Page = ({ children }) => children
  
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues || {}
    }
    this.props.history.push(`/on-boarding/${this.state.page}`);
  }
  next = values =>{
    this.props.history.push(`/on-boarding/${this.state.page + 1}`);
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }))
    
  }
  
  previous = () => {
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }))
    this.props.history.push(`/on-boarding/${this.state.page - 1}`);
  }
  
  displayText = (step)  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].title;
  };
  
  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */
  
  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
      ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }
  
  handleSubmit = values => {
    const { children, onSubmit } = this.props
    const { page } = this.state
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values)
    } else {
      this.next(values)
    }
  }
  
  render() {
    const { children, match } = this.props
    const { page, values } = this.state
    const activePage = React.Children.toArray(children)[page]
    const isLastPage = page === React.Children.count(children) - 1
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <StyledButton
                  size="large"
                  shape="round"
                  onClick={this.previous}
                >
                  {this.displayText(Number(match.params.step) -1)}
                </StyledButton>
              )}
              {!isLastPage && (
                <StyledButton
                  size="large"
                  shape="round"
                  type="submit"
                  htmlType="submit"
                >
                  Add {this.displayText(match.params.step)}
                </StyledButton>
              )}
              {isLastPage && (
                <StyledButton
                size="large"
                shape="round"
                type="submit"
                htmlType="submit"
                disabled={submitting}
                >
                  Submit
                </StyledButton>
              )}
            </div>
            
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    )
  }
}

export default withRouter(OnBoardingWizard);
