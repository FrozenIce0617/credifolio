import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: ${(props) => props.theme.spacing.m}px;
  padding-right: ${(props) => props.theme.spacing.m}px;
  height: ${(props) => (props.size === 'md' ? 32 : 52)}px;
  border-radius: ${(props) => (props.isRound ? 26 : 0)}px;
  background-color: ${(props) =>
    props.type === 'primary' ? props.theme.colors.primary : 'transparent'};
  border-color: ${(props) =>
    props.type === 'outline' ? props.theme.colors.primary : 'transparent'};
  border-width: ${(props) => (props.type === 'outline' ? 1 : 0)}px;
`;

export const ButtonText = styled.Text`
  color: ${(props) =>
    props.type === 'primary'
      ? props.theme.colors.common.white
      : props.theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
`;
