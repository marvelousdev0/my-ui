import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

export default {
  title: 'Buttons',
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.palette.background.paper};
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.palette.divider};
`;

const Header = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${(p) => p.theme.palette.divider};
  font-size: 32px;
  font-weight: bold;
`;

export const TextButton = () => {
  return (
    <Container>
      <Header>
        <h1>Text Buttons</h1>
      </Header>
      <Button>Simple Button</Button>
    </Container>
  );
};
