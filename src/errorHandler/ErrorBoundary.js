import React from 'react';
import ErrorPage from './ErrorPage';

export default class ErrorBoundary extends React.Component {
  constructor(props){
    super();
    this.state = {
      error: false,
      info: null
    }
  }

  componentDidCatch(error, info){
    this.setState({
      error: error,
      info
    });
  }

  render(){
    if (this.state.error) return <ErrorPage></ErrorPage>
    return this.props.children
  }
}