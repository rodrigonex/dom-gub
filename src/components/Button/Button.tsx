"use client";
import { variantes } from "./Variante";
import { Container, Title, Content } from "./style";

interface IButtonProps {
  title: string;
  onClick: any;

  variant?:
    | "buttonTransparentSm"
    | "buttonTransparentLg"
    | "buttonGreenSm"
    | "buttonBlueSm";
}

export const Button = ({
  title,
  onClick = async () => {},
  variant = "buttonTransparentSm",
}: IButtonProps) => {
  const buttonVariant = variantes[variant];
  const buttonStyle = buttonVariant;
  return (
    <Container onClick={onClick} style={buttonStyle.button}>
      <Title style={buttonStyle.title}>{title}</Title>
    </Container>
  );
};
