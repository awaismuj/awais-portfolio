import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can log the error to a service like Sentry
      console.error("Error caught by error boundary:", error, errorInfo);
    }
    render() {
      if (this.state.hasError) {
        return <div>Something went wrong. Please refresh the page or try again later.</div>;
      }
  
      return this.props.children;
    }
  }
  return (
    <div className='flex flex-row flex-wrap justify-center gap-1 '>
      {technologies.map((technology) => (
        <div className='w-33 h-33' key={technology.name}>
          <ErrorBoundary>
          <BallCanvas icon={technology.icon} />
  </ErrorBoundary>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");