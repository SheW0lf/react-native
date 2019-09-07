import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Name {
	name: string;
}

const ComponentsScreen: React.SFC<Name> = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Component Screen</Text>
		</View>
	);
};

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

export default ComponentsScreen;
