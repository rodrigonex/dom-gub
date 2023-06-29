"use client";

import Link from "next/link";
import styled from "styled-components";

export const Body = styled.body`
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const LinkMenu = styled(Link)`
  text-decoration: none;
  color: #00113f;
  margin: 0 24px;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 62px 0 72px;
  background-color: #ffffff;
`;

export const Logo = styled.div`
  padding-top: 10px;
`;

export const Menu = styled.nav`
  margin-top: 35px;
`;

export const ContainerButton = styled.div`
  margin: 26px 0;
`;

export const HeroSection = styled.section`
  background-image: url("/images/banner.png");
  background-size: cover;
  background-position: center;
  height: auto;
  border: 1px solid transparent;
`;

export const HeroSectionText = styled.h1`
  font-size: 44px;
  font-family: Work Sans;
  font-weight: 600;
  color: #ffffff;
  margin: 142px 180px 56px 180px;
  text-align: center;
`;

export const ContainerButtonHero = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 129px;
`;

export const ContainerSectionInitiatives = styled.div`
  padding: 136px 48px;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleInitiatives = styled.h1`
  margin: 0 0 32px 0;
  text-align: center;
  font-size: 44px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const TrainingProgramSection = styled.section`
  padding: 88px 140px 88px 68px;
  display: flex;
  background-color: #00de92;
  justify-content: space-around;
`;

export const InfoTraining = styled.div`
  width: 488px;
`;

export const InfoTitle = styled.h1`
  color: #00113f;
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 700;
`;

export const InfoText = styled.p`
  font-size: 20px;
  color: #00113f;
  font-family: Work Sans;
  font-weight: 500;
  margin-bottom: 86px;
`;

export const Footer = styled.footer`
  border-top: 2px solid #00de92;
  margin: 95px 68px 0 68px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const SocialMedia = styled.div`
  justify-content: space-between;
  margin-top: 28px;
`;

export const ContainerIcon = styled.span`
  margin-right: 10px;
`;

export const FooterLogo = styled.div``;

export const FooterCop = styled.span`
  font-family: Work Sans;
  font-weight: 500;
  font-size: 18px;
  margin-top: 32px;
`;
