import React from "react";
import {View, StyleSheet} from 'react-native';
import {colors} from '../config/Constants';

const Separator = () => {
	return (
		<View style={StyleSheet.separtor}/>
	)
}


const styles = StyleSheet.create({
	separtor: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: colors.separtor,
		marginStart: 88,
	}
})

export default Separator;