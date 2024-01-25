import 'ts-node/register' // Add this to import TypeScript files
import { ExpoConfig } from 'expo/config'

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
	android: {
		adaptiveIcon: {
			backgroundColor: '#ffffff',
			foregroundImage: './assets/adaptive-icon.png',
		},
		package: 'com.wolven531.expotemplate',
	},
	assetBundlePatterns: ['**/*'],
	icon: './assets/icon.png',
	ios: {
		supportsTablet: true,
	},
	name: 'expo-template',
	orientation: 'default',
	slug: 'expo-template',
	splash: {
		backgroundColor: '#ffffff',
		image: './assets/splash.png',
		resizeMode: 'contain',
	},
	userInterfaceStyle: 'automatic',
	version: '1.0.0',
	web: {
		favicon: './assets/favicon.png',
	},
}

export default config
