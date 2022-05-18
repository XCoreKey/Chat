import React from 'react';
import {View, StyleSheet,} from 'react-native';
import ContactRow from '../components/ContactRow';
import Separator from '../components/Separtor';
import { colors } from '../config/Constants';
import Cell from '../components/Cell';

const Settings = () => {
	return (
		<View>
			<ContactRow
				name="Recep Bostancı"
				subtitle="rbostanci19@gmail.com"
				style={styles.ContactRow}
			/>

			<Separator/>

			<Cell
			title="Help"
			icon="information-circle-outline"
			tintColor= {colors.green}
			onPress={() => {
				alert("Hİ, YOU TOUCHED ME")
			}}
			/>

			<Cell
			title="Tell a Friend"
			icon="heart-circle-outline"
			tintColor= {colors.pink}
			onPress={() => {
				alert("Hİ, YOU TOUCHED ME")
			}}
			/>
			<Cell
			title="Logout"
			icon="log-out-outline"
			tintColor= {colors.red}
			onPress={() => {
				alert("Hİ, YOU TOUCHED ME")
			}}
			style={{marginTop: 280}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	ContactRow: {
		backgroundColor: 'white',
		marginTop: 16,
		borderTopWidth: StyleSheet.hairlineWidht,
		borderColor: colors.border,
	},

})

export default Settings;