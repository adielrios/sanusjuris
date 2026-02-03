import React from 'react';
export const Select = ({ children, value, onValueChange }: any) => <select value={value} onChange={(e) => onValueChange?.(e.target.value)} className="border rounded px-3 py-2">{children}</select>;
export const SelectTrigger = ({ children }: any) => <>{children}</>;
export const SelectValue = () => null;
export const SelectContent = ({ children }: any) => <>{children}</>;
export const SelectItem = ({ children, value }: any) => <option value={value}>{children}</option>;
