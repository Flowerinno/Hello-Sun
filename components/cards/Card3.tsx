import { Card, Col, Text } from "@nextui-org/react";
type Card3 = { pressure: number };
export const Card3: React.FC<Card3> = ({ pressure }: Card3) => (
	<Card isHoverable>
		<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
			<Col>
				<Text size={20} weight="bold" transform="uppercase" color="black">
					Air pressure
				</Text>
				<Text h4 color="white" size={20}>
					{pressure}
				</Text>
			</Col>
		</Card.Header>
		<Card.Image
			src="https://www.ndbc.noaa.gov/images/educate/beaker1.gif"
			objectFit="cover"
			width="100%"
			height={190}
			alt="card image"
		/>
	</Card>
);
