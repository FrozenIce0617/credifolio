import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ROUTES from '../routes';
import OnboardingScreen from '../../screens/Onboarding/Onboarding';
import SearchCompanyScreen from '../../screens/Onboarding/SearchCompany';

const OnboardingStack = createStackNavigator();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.ONBOARDING_FLOW}
    >
      <OnboardingStack.Screen
        name={ROUTES.ONBOARDING_FLOW}
        component={OnboardingScreen}
      />
      <OnboardingStack.Screen
        name={ROUTES.SEARCH_COMPANY}
        component={SearchCompanyScreen}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
