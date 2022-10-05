import { Card, Col, Text } from "@nextui-org/react";

type Card2 = { humidity: number }
export const Card2: React.FC<Card2> = ({humidity}: Card2) => (
	<Card isHoverable>
		<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={25} weight="bold" transform="uppercase" color="white">
          Humidity
        </Text>
        <Text h4 color="white" size={20}>
          {humidity}
        </Text>
      </Col>
    </Card.Header>
		<Card.Image
			src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2013/02/thumb_720_450_881.jpg"
			objectFit="cover"
			width="100%"
			height={190}
			alt="card image"
		/>
	</Card>
);
