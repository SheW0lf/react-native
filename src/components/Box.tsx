import React, { FunctionComponent as FC, useState } from 'react';
import {
	View,
	StyleSheet,
	TouchableNativeFeedback,
	TouchableOpacity
} from 'react-native';
import { randomColor } from '../functions';
import { Button } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
	container: {
		padding: 5
	},
	box: {
		width: 60,
		height: 60
	}
});

function Box() {
	const [color, setColor] = useState(randomColor());

	const onHandleClick = () => {
		return setColor(randomColor());
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={onHandleClick}
				style={[{ backgroundColor: color }, styles.box]}
			/>
		</View>
	);
}

export default Box;
