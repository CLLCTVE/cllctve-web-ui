import React, { Component } from 'react';
import { Form as FForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { withRouter, Redirect } from 'react-router-dom';
import { StyledButton } from '../../fields/renderFields';
import { BRAND_ENTRY_MAP_BY_NAME } from '../../../lib/util';

class DiscoveryWizard extends Component {
  static Page = ({children}) => children;
  
  constructor(props) {
    console.log('DiscoveryWizard#constructor, props: ', props);
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {}
    };
    
    this.props.history.push(`/brand/discovery/${this.state.page}`);
  }
  
  next = values => {
    console.log('DiscoveryWizard#next');
    this.props.history.push(`/brand/discovery/${this.state.page + 1}`);
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }))
  };
  
  previous = () => {
    console.log('DiscoveryWizard#previous');
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));
    this.props.history.push(`/brand/discovery/${this.state.page - 1}`);
  };
  
  validate = values => {
    console.log('DiscoveryWizard#validate, values: ', values);
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
      ];
    // return activePage.props.validate ? activePage.props.validate(values) : {}
  };
  
  displayStepText = step => {
    return BRAND_ENTRY_MAP_BY_NAME[Object.keys(BRAND_ENTRY_MAP_BY_NAME)[step]].text;
  };
  
  displayStepTitle = step => {
    return BRAND_ENTRY_MAP_BY_NAME[Object.keys(BRAND_ENTRY_MAP_BY_NAME)[step]].title;
  };
  
  handleSubmit = values => {
    const {children, onSubmit} = this.props;
    const {page} = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      if (!(values['experience'] && values['experience'].position)) {
        delete values['experience'];
      }
      
      if (!(values['licensesCert'] && values['licensesCert'].title )) {
        delete values['licensesCert'];
      }
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };
  
  render() {
    const {children, isLoading, match} = this.props;
    const {page, values} = this.state;
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
            submitError,
            handleSubmit,
            form: {
              mutators: {push, remove}
            }, // injected from final-form-arrays above
            submitting,
            values
          }) => {
          return (
            <form onSubmit={handleSubmit}>
              {isLoading && <div>Loading...</div>}
              {<div className="error">{submitError}</div>}
              {activePage}
              <div className="buttons">
                
                {page > 0 && (
                  <StyledButton
                    size="large"
                    shape="round"
                    onClick={this.previous}
                  >
                    Back to {this.displayStepText(Number(match.params.step) - 1)}
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
                      Add {this.displayStepTitle(match.params.step)}
                    </StyledButton>
                  </>
                )}
                {isLastPage && (
                  <StyledButton
                    size="large"
                    shape="round"
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

export default withRouter(DiscoveryWizard);