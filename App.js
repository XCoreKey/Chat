import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from "./screens/Chats.js";
import Settings from './screens/Settings.js';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './config/Constants';
import SignUp from './screens/SignUp.js';
import Chat from './screens/Chat.js';

const ChatsStack = createNativeStackNavigator()

const ChatsScreen = () => {
	return (
		<ChatsStack.Navigator>
			<ChatsStack.Screen name="Chats" component={Chats} />
			<ChatsStack.Screen name="Chat" component={Chat} />
		</ChatsStack.Navigator>
	)
}

const SettingsStack = createNativeStackNavigator()

const SettingsScreen = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={Settings} />
		</SettingsStack.Navigator>
	)
}

const Tabs = createBottomTabNavigator()

const TabsScreen = () => {
	return (
	<Tabs.Navigator
		screenOptions={({ route }) => ({headerShown:false,
			tabBarIcon: ({ focused, color, size }) => {
				let iconName
				let iconColor = !focused ? 'tomato' : colors.primary


				if (route.name === 'ChatsScreen') {
					iconName = focused
						? 'chatbubble-ellipses'
						: 'chatbubble-ellipses-outline';

				} else if (route.name === 'SettingsScreen') {
					iconName = focused ? 'settings' : 'settings-outline';
				}

				return <Ionicons name={iconName} size={size} color={iconColor} />;
			},

		})}
		>
		<Tabs.Screen name="ChatsScreen" component={ChatsScreen} />
		<Tabs.Screen name="SettingsScreen" component={SettingsScreen} />
	</Tabs.Navigator>)
}

const MainStack = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<MainStack.Navigator
			screenOptions={{headerShown:false}}
			headerMode="none" mode="modal">
				<MainStack.Screen name="Tabs" component={TabsScreen} />
				<MainStack.Screen name="SignUp" component={SignUp} />
			</MainStack.Navigator>
		</NavigationContainer>
	)
}

export default App;
