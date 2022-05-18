import React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import ContactRow  from '../components/ContactRow'
import Separator from '../components/Separtor';
//import firebase from "@firebase";

//	const chats = [{
//		users: ['me@recepreis.com', 'sa@gmail.com'],
//		messages:[]
//	},{
//		users: ['me@recepreis.com', 'sa@gmail.com'],
//		messages:[]
//	},{
//		users: ['me@recepreis.com', 'sa@gmail.com'],
//		messages:[]
//	},{
//		users: ['me@recepreis.com', 'sa@gmail.com'],
//		messages:[]
//	},]

const Chats = ({ navigation }) => {
	useEffect(() => {
		const isLoggedIn = false;
		if (!isLoggedIn) {
			navigation.navigate("SignUp");
		}
	}, []);

	return (
		<SafeAreaView>
		<ScrollView>
			<ContactRow
			name="Recep"
			subtitle="Selam"
			onPress={() => {
				navigation.navigate('Chat');
			}}
			/>
			<Separator/>
			<ContactRow
			name="Recep"
			subtitle="Selam"
			onPress={() => {
				navigation.navigate('Chat');
			}}
			/>
			<Separator/>
			<ContactRow
			name="Recep"
			subtitle="Selam"
			onPress={() => {
				navigation.navigate('Chat');
			}}
			/>
			<Separator/>
				<ContactRow
			name="Recep1"
			subtitle="Selam"
			onPress={() => {
				navigation.navigate('Chat');
			}}
			/>
			<Separator/>
				<ContactRow
			name="Recep2"
			subtitle="Selam"
			onPress={() => {
				navigation.navigate('Chat');
			}}
			/>
			<Separator/>
			<ContactRow
			name="Recep3"
			subtitle="Selam"
			onPress={() => {
				navigation.navigate('Chat');
			}}
			/>
			<Separator/>
			<ContactRow
			name="Recep4"
			subtitle="Selam"
			onPress={() => {
				navigation.navigate('Chat');
			}}
			/>
			<Separator/>
			</ScrollView>
		</SafeAreaView>
	)
}
	const styles = StyleSheet.create({
	serprator: {
			height: StyleSheet.hairlineWidth,
			backgroundColor: 'gray',
			marginStart: 88,
	},
	})
	export default Chats;

