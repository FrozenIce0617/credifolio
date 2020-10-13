import RNSwiper from 'react-native-swiper';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.colors.common.white};
`;

export const NavBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 48px;
`;

export const LogoWrapper = styled.View`
  margin-right: ${(props) => props.theme.spacing.m}px;
`;

export const Logo = styled.Image`
  width: 35px;
  height: 24px;
`;

export const NavBarText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: 'Avenir';
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;

export const Swiper = styled(RNSwiper).attrs((props) => ({
  activeDotColor: props.theme.colors.primary,
}))``;

export const IntroSwiper = styled.View`
  align-items: center;
  padding-left: ${(props) => props.theme.spacing.l}px;
  padding-right: ${(props) => props.theme.spacing.l}px;
`;

export const IntroImage = styled.Image`
  margin-top: 150px;
  width: 150px;
  height: 150px;
`;

export const IntroTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
`;

export const IntroDesc = styled.Text`
  margin-top: ${(props) => props.theme.spacing.s}px;
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;

export const ButtonWrapper = styled.View`
  margin-left: ${(props) => props.theme.spacing.l}px;
  margin-right: ${(props) => props.theme.spacing.l}px;
  height: 104px;
`;
