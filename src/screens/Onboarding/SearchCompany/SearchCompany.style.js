import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.common.white};
`;

export const NavBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 48px;
`;

export const NavBarText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: 'Avenir';
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;

export const Body = styled.View`
  padding-left: ${(props) => props.theme.spacing.l}px;
  padding-right: ${(props) => props.theme.spacing.l}px;
`;

export const SearchLabel = styled.Text`
  margin-top: 48px;
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export const TextInputWrapper = styled.View`
  flex-direction: row;
  margin-top: ${(props) => props.theme.spacing.s}px;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  background-color: ${(props) => props.theme.colors.background.gray};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  padding-left: ${(props) => props.theme.spacing.m}px;
  padding-right: ${(props) => props.theme.spacing.m}px;
  background-color: ${(props) => props.theme.colors.background.gray};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: ${(props) => props.theme.colors.text.secondary};
  flex: 1;
  flex-grow: 1;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;

export const ButtonWrapper = styled.View`
  margin-left: ${(props) => props.theme.spacing.l}px;
  margin-right: ${(props) => props.theme.spacing.l}px;
  height: 104px;
`;

export const SearchButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const SearchText = styled.Text`
  color: ${(props) => props.theme.colors.common.white};
  font-size: 24px;
  line-height: 28px;
`;

export const Divider = styled.View`
  margin-top: 32px;
  margin-bottom: 32px;
  height: 1px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const NoCompanyWrapper = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const CompanyImage = styled.Image`
  width: 125px;
  height: 140px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
`;

export const Subtitle = styled.Text`
  margin-top: 16px;
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;

export const CompanyResult = styled.View``;

export const Subheading = styled.Text`
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

export const ResultWrapper = styled.ScrollView`
  flex-grow: 1;
`;

export const CompanyItem = styled.View`
  margin-top: ${(props) => props.theme.spacing.xl}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CompanyInfo = styled.View``;

export const CompanyName = styled.Text`
  max-width: 70%;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 14px;
  font-weight: 600;
`;

export const CompanyRegNo = styled.Text`
  margin-top: ${(props) => props.theme.spacing.s}px;
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;
