import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${p => p.theme.colors.background};
  width: 500px;
  height: auto;
  margin-top: ${p => p.theme.space[6]}px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.accentText};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  margin: 0;
  padding-top: ${p => p.theme.space[4]}px; 
  padding-bottom: ${p => p.theme.space[4]}px;
`;
