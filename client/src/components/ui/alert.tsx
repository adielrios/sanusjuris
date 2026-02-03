import React from 'react';
export const Alert = ({ children, className = '' }: any) => <div className={`p-4 border rounded ${className}`}>{children}</div>;
export const AlertDescription = ({ children }: any) => <p>{children}</p>;
