import React from 'react';

import * as Styled from './Button.style';

const Button = (props) => {
  const { type, isBlock, isRound, size, onPress, children } = props;

  return (
    <Styled.ButtonWrapper
      type={type}
      size={size}
      isBlock={isBlock}
      isRound={isRound}
      onPress={onPress}
    >
      <Styled.ButtonText type={type}>{children}</Styled.ButtonText>
    </Styled.ButtonWrapper>
  );
};

export default Button;
