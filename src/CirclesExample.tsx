import { Canvas, Circle, Group } from '@shopify/react-native-skia'
import { FC, useMemo, useState } from 'react'
import { TextInput } from 'react-native'

export const CirclesExample: FC = () => {
	const height = 300
	const width = 300
	const [textValue, setTextValue] = useState('.2')
	const r = useMemo(() => {
		return width * parseFloat(textValue)
	}, [textValue])

	return (
		<>
			<TextInput
				value={textValue}
				onChangeText={setTextValue}
			/>
			<Canvas style={{ width, height }}>
				<Group blendMode="multiply">
					<Circle
						cx={r}
						cy={r}
						r={r}
						color="cyan"
					/>
					<Circle
						cx={width - r}
						cy={r}
						r={r}
						color="magenta"
					/>
					<Circle
						cx={width / 2}
						cy={width - r}
						r={r}
						color="yellow"
					/>
				</Group>
			</Canvas>
		</>
	)
}

export default CirclesExample
