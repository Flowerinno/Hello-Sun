import { Card, Col, Text, Grid } from "@nextui-org/react";
import { OneDayProps } from "../../types/forecastType";

type Card1 = { uv: number }

export const Card1: React.FC<Card1> = ({ uv }: Card1) => (
	<Card isHoverable>
		<Card.Image
			src="https://www.light-sources.com/wp-content/uploads/2021/03/Various-uses-of-UV-light.jpg"
			objectFit="cover"
			width="100%"
			height={190}
			alt="card image"
		/>
		<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
			<Col>
				<Text size={20} weight="bold" transform="uppercase" color="white">
					UV index
				</Text>
				<Text h4 color="white" size={20}>
					Ultraviolet - {uv}
				</Text>
			</Col>
		</Card.Header>
	</Card>
);
