import React, {Component} from 'react';
import { Form as FForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import {withRouter, Redirect} from 'react-router-dom';
import {StyledButton} from '../fields/renderFields';
import { ONBOARDING_ENTRY_MAP_BY_NAME } from '../../lib/util';

class OnBoardingFlowWizard extends Component {
  static Page = ({ children }) => children;
  
  constructor(props) {
    console.log('OnBoardingFlowWizard#constructor, props: ', props);
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {}
    };
    
    this.props.history.push(`/on-boarding-flow/${this.state.page}`);
  }
  
  push = (par1, par2) => {
    console.log('OnBoardingFlowWizard#push, par1: ', par1);
    console.log('OnBoardingFlowWizard#push, par2: ', par2);
    debugger;
  };
  
  remove = (par1, par2) => {
    console.log('OnBoardingFlowWizard#remove, par1: ', par1);
    console.log('OnBoardingFlowWizard#remove, par2: ', par2);
    debugger;
  };
  
  next = values => {
    console.log('OnBoardingFlowWizard#next');
    this.props.history.push(`/on-boarding-flow/${this.state.page + 1}`);
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }))
  };
  
  previous = () => {
    console.log('OnBoardingFlowWizard#previous');
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));
    this.props.history.push(`/on-boarding-flow/${this.state.page - 1}`);
  };
  
  validate = values => {
    console.log('OnBoardingFlowWizard#validate, values: ', values);
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
      ];
    return activePage.props.validate ? activePage.props.validate(values) : {}
  };
  
  displayStepText = step  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].text;
  };
  
  displayStepTitle = step  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].title;
  };
  
  handleSubmit = values => {
    console.log('OnBoardingFlowWizard#handleSubmit, values: ', values);
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };
  
  render() {
    const { children, match } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <FForm
        initialValues={values}
        validate={this.validate}
        mutators={{
          ...arrayMutators
        }}
        onSubmit={this.handleSubmit}
      >
        {({
          handleSubmit,
          form: {
            mutators: {push, remove}
          }, // injected from final-form-arrays above
          submitting,
          values
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              {activePage}
              <div className="buttons">
  
  
                {page > 0 && (
                  <StyledButton
                    size="large"
                    shape="round"
                    onClick={this.previous}
                  >
                    Back to {this.displayStepTitle(Number(match.params.step) -1)}
                  </StyledButton>
                )}
                {!isLastPage && (
                  <>
                    <StyledButton
                      size="large"
                      shape="round"
                      type="submit"
                      htmlType="submit"
                    >
                      Add your {this.displayStepTitle(match.params.step)}
                    </StyledButton>
                  </>
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
          )
        }}
        
      </FForm>
    );
  }
}

export default withRouter(OnBoardingFlowWizard);
