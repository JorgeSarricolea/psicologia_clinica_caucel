import { Box, Container, Typography, Link } from '@mui/material';
import { site } from '../config/content';

const footerLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'horarios', label: 'Horarios' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'ubicacion', label: 'Ubicación' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Nunito", sans-serif',
              fontWeight: 700,
              color: 'primary.light',
              mb: 1,
            }}
          >
            {site.shortName}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, justifyContent: 'center', mb: 2 }}>
            {footerLinks.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.85rem', opacity: 0.7, '&:hover': { opacity: 1, color: 'primary.light' } }}
              >
                {label}
              </Link>
            ))}
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.5 }}>
            © {currentYear} {site.name}. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
