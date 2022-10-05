import { Card, Col, Text } from "@nextui-org/react";

export const Card6 = ({ tempF }: any) => (
	<Card isHoverable>
		<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
			<Col>
				<Text size={20} weight="bold" transform="uppercase" color="black">
					Temperature - Fahrenheit
				</Text>
				<Text h4 color="white" size={20}>
					{tempF}
				</Text>
			</Col>
		</Card.Header>
		<Card.Image
			src="https://assets.ltkcontent.com/images/30735/thermometer-in-snow_0066f46bde.jpg"
			objectFit="cover"
			width="100%"
			height={190}
			alt="card image"
		/>
	</Card>
);
