import { StatusBar } from 'expo-status-bar'
import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const App: FC = () => {
	return (
		<View style={styles.container}>
			<Text>📝 Edit App.tsx to work on your app! 💫</Text>
			<StatusBar style="auto" />
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
})

export default App
