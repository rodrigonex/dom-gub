"use client";
import { Button } from "@/components/Button";
import {
  Body,
  ContainerMenu,
  Logo,
  Menu,
  LinkMenu,
  ContainerButton,
  HeroSection,
  HeroSectionText,
  ContainerButtonHero,
  ContainerSectionInitiatives,
  TitleInitiatives,
  ContainerCards,
  TrainingProgramSection,
  InfoTraining,
  InfoTitle,
  InfoText,
  Footer,
  SocialMedia,
  FooterLogo,
  FooterCop,
  ContainerIcon,
} from "./styles";
import { Card } from "@/components/Card";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Home() {
  return (
    <Body>
      <ContainerMenu>
        <Logo>
          <img
            src="/images/logo.png"
            alt="logo Dom helder"
            style={{ objectFit: "contain", width: "206px", height: "67px" }}
          />
        </Logo>
        <Menu>
          <LinkMenu href="#">Início</LinkMenu>
          <LinkMenu href="#">Iniciativas</LinkMenu>
          <LinkMenu href="#">Eventos</LinkMenu>
          <LinkMenu href="#">Dom Helder</LinkMenu>
        </Menu>
        <ContainerButton>
          <Button
            onClick={() => {}}
            title="Saiba mais"
            variant="buttonTransparentSm"
          />
        </ContainerButton>
      </ContainerMenu>
      <main>
        <HeroSection>
          <HeroSectionText>
            Novas soluções educacionais com inovação aplicada: uma criação da
            Dom Helder com apoio do Governo de Minas
          </HeroSectionText>
          <ContainerButtonHero>
            <Button
              onClick={() => {}}
              title="Saiba mais"
              variant="buttonGreenSm"
            />
          </ContainerButtonHero>
        </HeroSection>
        <ContainerSectionInitiatives>
          <TitleInitiatives>Iniciativas</TitleInitiatives>
          <ContainerCards>
            <Card
              altImage="Startups"
              title="Pré-aceleração de Startups"
              text="Programa de pré-aceleração de startups e capacitação empreendedora, com duração de 12 semanas, divididas em 4 etapas"
              titleButton="Contato"
              urlImage="/images/startups.png"
            />
            <Card
              altImage="Imersões corporativas"
              title="Imersões corporativas"
              text="Ações e eventos na medida certa para a demanda da sua empresa. Realizações de palestras, meetups, hackathons e muito mais com todas iniciativas criadas para a necessidade da sua empresa"
              titleButton="Contato"
              urlImage="/images/imersao.png"
            />
            <Card
              altImage="Startup residente"
              title="Startup residente"
              text="Coworking onde inicialmente 3 equipes de startups irão utilizar por 6 meses, e caso a startup esteja evoluindo, poderá optar por renovar por mais 6 meses a utilização do espaço sem custo"
              titleButton="Contato"
              urlImage="/images/residente.png"
            />
          </ContainerCards>
        </ContainerSectionInitiatives>
        <TrainingProgramSection>
          <img
            src="/images/gestao.png"
            alt="Gestão e Governança ESG"
            style={{ objectFit: "contain", width: "520px", height: "517px" }}
          />
          <InfoTraining>
            <InfoTitle>Formação em gestão e gonvernança ESG</InfoTitle>
            <InfoText>
              Nós, do Dom Hub, reconhecemos que o ESG é uma agenda importante
              para a gestão e boa governança das empresas e uma ferramenta
              poderosa para a conscientização destas no seu papel na sociedade e
              no mercado.
            </InfoText>
            <Button
              onClick={() => {}}
              title="Inscreva-se"
              variant="buttonBlueSm"
            />
          </InfoTraining>
        </TrainingProgramSection>
        <Footer>
          <SocialMedia>
            <ContainerIcon>
              <InstagramIcon />
            </ContainerIcon>
            <ContainerIcon>
              <WhatsAppIcon />
            </ContainerIcon>
            <ContainerIcon>
              <FacebookIcon />
            </ContainerIcon>
          </SocialMedia>
          <FooterLogo>
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ objectFit: "contain", width: "224px", height: "68px" }}
            />
            <img
              src="/images/logo2.png"
              alt="logo"
              style={{ objectFit: "contain", width: "211px", height: "64px" }}
            />
          </FooterLogo>
          <FooterCop>DomHub Corporate ESG ©2023</FooterCop>
        </Footer>
      </main>
    </Body>
  );
}
