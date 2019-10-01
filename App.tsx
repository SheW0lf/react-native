import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';

const AppNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Component: ComponentsScreen,
		List: ListScreen
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none'
	}
);

export default createAppContainer(AppNavigator);
