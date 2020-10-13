import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import ROUTES from '../../../routes/routes';
import Onboarding1 from '../../../assets/images/onboarding1.png';
import Onboarding2 from '../../../assets/images/onboarding2.png';
import Onboarding3 from '../../../assets/images/onboarding3.png';
import Onboarding4 from '../../../assets/images/onboarding4.png';
import slideData from './data';
import * as Styled from './Onboarding.style';

const onboardingImg = {
  onboarding1: Onboarding1,
  onboarding2: Onboarding2,
  onboarding3: Onboarding3,
  onboarding4: Onboarding4,
};

const Slider = (props) => {
  const {
    slide: { title, description, image },
  } = props;

  return (
    <Styled.IntroSwiper>
      <Styled.IntroImage source={onboardingImg[image]} />
      <Styled.IntroTitle>{title}</Styled.IntroTitle>
      <Styled.IntroDesc>{description}</Styled.IntroDesc>
    </Styled.IntroSwiper>
  );
};

const Onboarding = () => {
  const navigation = useNavigation();

  const onHandleStart = useCallback(() => {
    navigation.navigate(ROUTES.SEARCH_COMPANY);
  }, [navigation]);

  return (
    <Styled.Container>
      <Styled.NavBar>
        <Styled.LogoWrapper>
          <Styled.Logo source={require('../../../assets/images/logo.png')} />
        </Styled.LogoWrapper>
        <Styled.NavBarText>Credifolio</Styled.NavBarText>
      </Styled.NavBar>
      <Styled.Swiper index={0} loop={false}>
        {slideData.map((slide) => (
          <Slider key={slide.key} slide={slide} />
        ))}
      </Styled.Swiper>
      <Styled.ButtonWrapper>
        <Button type="primary" isRound onPress={onHandleStart}>
          Get Started
        </Button>
        <Button type="secondary">Log In</Button>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default Onboarding;
