import React from 'react';

import QRCode from 'react-native-qrcode-svg';

import Icon from 'react-native-vector-icons/MaterialIcons';

import navi from '~/assets/navi.png';

import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText, NaviZelda } from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0,1],
      }),
    }}
    >
      <Code>
        <QRCode
          value="https://www.zelda.com/"
          size={80}
          backgroundColor="#52ae41"
          color="#FFF"
          />
      </Code>

      <Nav>
        <NavItem>
          <NaviZelda source={navi} />
          {/* <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText> */}
          <NavText>Hey! Listen</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
      <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
