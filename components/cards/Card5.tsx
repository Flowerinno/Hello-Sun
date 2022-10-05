import { Card, Col, Text } from "@nextui-org/react";

export const Card5 = ({ gust }: any) => (
	<Card isHoverable>
		<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
			<Col>
				<Text size={20} weight="bold" transform="uppercase" color="black">
					Gust
				</Text>
				<Text h4 color="white" size={20}>
					{gust}
				</Text>
			</Col>
		</Card.Header>
		<Card.Image
			src="https://max.nwstatic.co.uk/newsimages2016/storms/windsock.jpg"
			objectFit="cover"
			width="100%"
			height={190}
			alt="card image"
		/>
	</Card>
);
