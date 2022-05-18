import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { colors } from '../config/Constants';
import {Ionicons} from '@expo/vector-icons';

const Cell = ({title, icon, tintColor, onPress, style,}) => {
	return (
	<TouchableOpacity style={[styles.cell, style]} onPress={onPress}>
		<View style={[styles.iconContainer,{backgroundColor: tintColor}]}>
		<Ionicons name={icon}
			size={32}
			color={'white'}
		/>
		</View>
			<Text style={styles.title}>{title}</Text>
			<Ionicons name="arrow-forward-circle-outline" size={20}/>
	</TouchableOpacity>
	)
}

const styles= StyleSheet.create({
	cell: {
		paddingHorizontal: 16,
		paddingVertical: 12,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
	},

	iconContainer: {
		width: 32,
		height: 32,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: StyleSheet.hairlineWidht,
		borderColor: colors.border,
	},

	title: {
		fontSize: 16,
		marginStart: 16,
		flex: 1,
	},


})
export default Cell;