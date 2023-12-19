import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const BoxStyles = styled(Box)`
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    outline: 1px solid blue;
    transform: scale(1.1);
  }
`;

const ImageStyle = styled(Image)`
  border-radius: 10px; /* Sesuaikan nilai sesuai preferensi Anda */
`;

const TextStyles = styled(Text)`
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

const Card = ({ title, description, imageSrc }) => {
  return (
    <>
      <BoxStyles textAlign="left" bg="white">
        <ImageStyle src={imageSrc} />
        <div style={{ padding: 25 }}>
          <Heading as="h4" size="md" color="black">
            {title}
          </Heading>
          <Text color="black" py="2">
            {description}
          </Text>
          <TextStyles color="black" fontSize="sm">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </TextStyles>
        </div>
      </BoxStyles>
    </>
  );
};

export default Card;
