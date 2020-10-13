import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingNavigator from './navigators/OnboardingNavigator';
import ROUTES from './routes';

const RootStack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={ROUTES.ONBOARDING_INTRO}
          component={OnboardingNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
