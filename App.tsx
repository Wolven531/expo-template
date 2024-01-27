import { StatusBar } from 'expo-status-bar'
import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const App: FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.intro}>
				📝 Edit App.tsx to work on your app! 💫
			</Text>
			<StatusBar
				animated
				backgroundColor="#0ff"
				// hidden
				// style="auto"
				// style="dark"
				// style="light"
				// style="inverted"
				translucent
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
	},
	intro: {
		backgroundColor: '#00ffff33',
		borderColor: '#0ff',
		borderRadius: 10,
		borderWidth: 1,
		padding: 10,
	},
})

export default App
