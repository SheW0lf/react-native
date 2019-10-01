import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Badge, Icon, withBadge } from 'react-native-elements';

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

type Friend = {
	name: string;
	age?: number;
};

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

function ListScreen() {
	return (
		<View style={styles.listStyle}>
			<FlatList
				showsVerticalScrollIndicator={false}
				keyExtractor={friend => friend.name}
				data={friends}
				renderItem={({ item }) => <ListItem name={item.name} />}
			/>
		</View>
	);
}

function ListItem(name: Friend) {
	return (
		<View style={styles.itemStyle}>
			<Text style={styles.textStyle}>{name}</Text>
		</View>
	);
}

export default ListScreen;
