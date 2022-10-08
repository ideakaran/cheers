import React, { Component, Fragment } from "react";
import ErrorBoundaryStyle from "./ErrorBoundaryStyle";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  static getDerivedStateFromError(error) {
    return { message: error.message };
  }

  componentDidCatch(error, errorInfo) {
    this.logErrorToMyService(error, errorInfo);
  }

  handleRetry = () => {
    window.location.reload();
  };

  logErrorToMyService(error, errorInfo) {}

  render() {
    if (this.state.message) {
      return (
        <ErrorBoundaryStyle>
          <p className="hz-error-label">ERROR</p>
          <div className="hz-error-message">
            {this.state.message.split("{br}").map((item, key) => {
              return (
                <Fragment key={key}>
                  <p>{item}</p>
                  <br />
                </Fragment>
              );
            })}
          </div>
          <button
            className="hz-retry-btn"
            onClick={this.handleRetry}
            type="button"
          >
            Try again
          </button>
        </ErrorBoundaryStyle>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
