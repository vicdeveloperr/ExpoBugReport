import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "../screens/CameraScreen";
import VideoTutorialScreen from "../screens/VideoTutorialScreen";
import LoadVideoScreen from "../screens/LoadVideoScreen";

export type RootStackParamList = {
  camera: undefined;
  videoTutorial: undefined;
  loadVideo: undefined;
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
        <Stack.Screen
          name="loadVideo"
          component={LoadVideoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
