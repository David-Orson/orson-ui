// npm
import React from "react";
import styled from "styled-components";

type ButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
};
export const Button = ({ onClick, children }: ButtonProps) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
    position: relative;
    user-select: none;
    background: blue;
`;

export default Button;
