import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../config/Constants';

const ContactRow = ({name, subtitle, onPress, style}) => {
	return (
		<TouchableOpacity style={[styles.row, style]} onPress={onPress}>
			<View style={styles.avatar}>
				<Text style={styles.avatarLabel}>UN</Text>
			</View>

			<View style={styles.textsContainer}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>

				<Ionicons name="arrow-forward-circle-outline" size={35}/>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({

	row: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 20,
	},

	textsContainer: {
		flex: 1,
	},

	avatar: {
		width: 56,
		height: 56,
		backgroundColor: colors.separtor,
		borderRadius: 28,
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatarLabel: {

	},

	name: {
		fontSize: 16,
	},

	subtitle: {
		marginTop: 2,
		color: '#565656'
	}
})

export default ContactRow;
