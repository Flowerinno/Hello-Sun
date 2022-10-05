import { Card, Col, Text } from "@nextui-org/react";
type Card4 = { visibility: number };
export const Card4: React.FC<Card4> = ({ visibility }: Card4) => (
	<Card isHoverable>
		<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
			<Col>
				<Text size={20} weight="bold" transform="uppercase" color="black">
					Visibility
				</Text>
				<Text h4 color="white" size={20}>
					{visibility} km
				</Text>
			</Col>
		</Card.Header>
		<Card.Image
			src="https://ugc.futurelearn.com/uploads/assets/f4/61/f46166ea-109a-487e-8df6-ba4448c90b5a.jpg"
			objectFit="cover"
			width="100%"
			height={190}
			alt="card image"
		/>
	</Card>
);
