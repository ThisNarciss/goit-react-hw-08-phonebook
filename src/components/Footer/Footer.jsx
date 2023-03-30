import { useTheme } from '@emotion/react';
import { Container } from '@mui/system';
import { FooterLink, FooterText } from './Footer.material';
import { FooterBox } from './Footer.styled';

export function Footer() {
  const theme = useTheme();

  return (
    <FooterBox theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          display: { xs: 'flex' },
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          backgroundColor: 'inherit',
        }}
      >
        <FooterText variant="body2">
          &#169; 2023 | All Rights Reserved |
        </FooterText>

        <FooterLink>Developed by ThisNarciss</FooterLink>
      </Container>
    </FooterBox>
  );
}
