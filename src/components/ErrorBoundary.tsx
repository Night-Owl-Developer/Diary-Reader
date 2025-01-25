// import React from 'react';

interface ErrorBoundaryProps {
  error: string | null;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ error }) => {
  if (!error) return null;

  return <div className="error">{error}</div>;
};

export default ErrorBoundary;
