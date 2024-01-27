import { Canvas, Circle, Group } from '@shopify/react-native-skia'
import { FC } from 'react'

export const CirclesExample: FC = () => {
	const height = 333
	const width = 333
	const r = width * 0.45

	return (
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
	)
}

export default CirclesExample
