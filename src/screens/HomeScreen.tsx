import React, { FunctionComponent as FC, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Box from '../components/Box';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	repeat: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

interface Props {
	numTimes: number;
	styleContainer?: {};
}

function HomeScreen() {
	return (
		<View style={styles.container}>
			<Repeat numTimes={50} styleContainer={styles.repeat}>
				<Box />
			</Repeat>
		</View>
	);
}

const Repeat: FC<Props> = ({ numTimes, styleContainer, children }) => {
	let items: ReactNode[] = [];
	for (let i = 0; i < numTimes; i++) {
		items.push(children);
	}
	return <View style={styleContainer}>{items}</View>;
};

export default HomeScreen;
