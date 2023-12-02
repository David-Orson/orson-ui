import React from "react";
type ButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
};
export declare const Button: ({ onClick, children }: ButtonProps) => React.JSX.Element;
export default Button;
