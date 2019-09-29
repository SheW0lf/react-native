import React, { FunctionComponent as FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 30,
		color: '#666'
	}
});

interface Name {
	name: string;
	age: number;
}

function ComponentsScreen(props: Name) {
	const { name, age } = props;
	return (
		<View style={styles.container}>
			<Text
				style={styles.text}
			>{`Hi my name is ${name} and I am ${age} years old`}</Text>
		</View>
	);
}

export default ComponentsScreen;
