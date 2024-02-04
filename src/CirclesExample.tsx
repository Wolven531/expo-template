import { Canvas, Circle, Group } from '@shopify/react-native-skia'
import { FC, useMemo, useState } from 'react'
import { TextInput, View } from 'react-native'

export const CirclesExample: FC = () => {
	const [ratio, setRatio] = useState('.345')

	const circleRadius = useMemo(
		() => DEFAULT_WIDTH * parseFloat(ratio),
		[ratio],
	)

	const handleRatioUpdated = (newRatioText: string) => {
		setRatio(newRatioText)
	}

	return (
		<View
			style={{
				gap: 10,
			}}
		>
			<TextInput
				onChangeText={handleRatioUpdated}
				style={{
					borderWidth: 1,
					borderColor: '#000',
					padding: 10,
				}}
				value={ratio}
			/>
			<Canvas
				style={{
					height: DEFAULT_HEIGHT,
					width: DEFAULT_WIDTH,
				}}
			>
				<Group blendMode="multiply">
					<Circle
						color="cyan"
						cx={circleRadius}
						cy={circleRadius}
						r={circleRadius}
					/>
					<Circle
						color="magenta"
						cx={DEFAULT_WIDTH - circleRadius}
						cy={circleRadius}
						r={circleRadius}
					/>
					<Circle
						color="yellow"
						cx={DEFAULT_WIDTH / 2}
						cy={DEFAULT_WIDTH - circleRadius}
						r={circleRadius}
					/>
				</Group>
			</Canvas>
		</View>
	)
}

const DEFAULT_HEIGHT = 300
const DEFAULT_WIDTH = 300

export default CirclesExample
