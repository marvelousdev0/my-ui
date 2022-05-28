import makeStyles from '@mui/styles/makeStyles';
import styled from 'styled-components';

const StyledButton = styled.div.attrs((props) => ({}))`
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 24px;
  min-width: 240px;
`;

const landingStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  gamerWrapper: {
    padding: theme.spacing(3, 0),
  },
  paragraph: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

export { landingStyles, StyledButton };
