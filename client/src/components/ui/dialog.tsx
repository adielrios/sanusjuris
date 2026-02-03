import React, { useState } from 'react';
export const Dialog = ({ children, open, onOpenChange }: any) => open ? <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">{children}</div> : null;
export const DialogTrigger = ({ children, asChild }: any) => children;
export const DialogContent = ({ children, className = '' }: any) => <div className={`bg-white rounded-lg p-6 max-w-lg w-full mx-4 ${className}`}>{children}</div>;
export const DialogHeader = ({ children, className = '' }: any) => <div className={className}>{children}</div>;
export const DialogTitle = ({ children, className = '' }: any) => <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
export const DialogDescription = ({ children, className = '' }: any) => <p className={`text-gray-600 ${className}`}>{children}</p>;
export const DialogFooter = ({ children, className = '' }: any) => <div className={`mt-4 flex justify-end gap-2 ${className}`}>{children}</div>;
