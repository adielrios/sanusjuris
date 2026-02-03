import React from 'react';
export const Card = ({ children, className = '' }: any) => <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>;
export const CardHeader = ({ children, className = '' }: any) => <div className={`p-4 border-b ${className}`}>{children}</div>;
export const CardTitle = ({ children, className = '' }: any) => <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
export const CardDescription = ({ children, className = '' }: any) => <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
export const CardContent = ({ children, className = '' }: any) => <div className={`p-4 ${className}`}>{children}</div>;
