import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Button = ({ variant, href, children }) => {
    return (
        <S.StyledButton href={href} variant={variant}>
            {children}
        </S.StyledButton>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['solid', 'outline']),
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    variant: 'solid',
};

export default Button;
