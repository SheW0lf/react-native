import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

type Friend = {
	name: string;
	age: number;
};

const ListScreen: React.SFC = () => {
	const friends: Array<Friend> = [
		{
			name: 'Alex',
			age: 24
		},
		{
			name: 'Frank',
			age: 26
		},
		{
			name: 'Dawn',
			age: 30
		},
		{
			name: 'Ralph',
			age: 28
		},
		{
			name: 'Stacy',
			age: 31
		},
		{
			name: 'Megan',
			age: 22
		}
	];
	return (
		<View style={styles.listStyle}>
			<FlatList
				showsVerticalScrollIndicator={false}
				keyExtractor={friend => friend.name}
				data={friends}
				renderItem={({ item }) => (
					<View style={styles.itemStyle}>
						<Text style={styles.textStyle}>{`${item.name} - Age: ${
							item.age
						}`}</Text>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	listStyle: {
		flex: 1,
		alignItems: 'center'
	},
	itemStyle: {
		flex: 1,
		alignItems: 'center',
		borderBottomColor: '#666',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	textStyle: {
		marginVertical: 50,
		fontSize: 30
	}
});

export default ListScreen;
