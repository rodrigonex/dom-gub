"use client";

import { Button } from "../Button";
import { CardSection, Title, Text } from "./style";

interface ICard {
  title: string;
  text: string;
  titleButton: string;
  urlImage: string;
  altImage: string;
}

export const Card = ({
  text,
  title,
  titleButton,
  urlImage,
  altImage,
}: ICard) => {
  return (
    <CardSection>
      <img
        src={urlImage}
        alt={altImage}
        style={{
          objectFit: "contain",
          width: "376px",
          height: "260px",
        }}
      />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button
        onClick={() => {}}
        title={titleButton}
        variant="buttonTransparentLg"
      />
    </CardSection>
  );
};
