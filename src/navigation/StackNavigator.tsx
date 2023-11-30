import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "../screens/CameraScreen";
import VideoTutorialScreen from "../screens/VideoTutorialScreen";

export type RootStackParamList = {
  camera: undefined;
  videoTutorial: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: () => <></> }}
        initialRouteName="videoTutorial"
      >
        <Stack.Screen
          name="camera"
          component={CameraScreen}
        />
        <Stack.Screen
          name="videoTutorial"
          component={VideoTutorialScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
