import React, { useState } from 'react';
export const Tabs = ({ children, value, onValueChange, className = '' }: any) => <div className={className}>{children}</div>;
export const TabsList = ({ children, className = '' }: any) => <div className={`flex gap-2 ${className}`}>{children}</div>;
export const TabsTrigger = ({ children, value, className = '' }: any) => <button className={`px-4 py-2 ${className}`}>{children}</button>;
export const TabsContent = ({ children, value, className = '' }: any) => <div className={className}>{children}</div>;
