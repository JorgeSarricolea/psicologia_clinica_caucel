import { Box, Container, Typography, Link } from '@mui/material';
import { site, logo } from '../config/content';

const footerLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'horarios', label: 'Horarios' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'galeria', label: 'Galería' },
  { id: 'ubicacion', label: 'Ubicación' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt={site.name}
            sx={{
              height: 56,
              width: 'auto',
              mb: 1.5,
              filter: 'brightness(0) invert(1)',
              opacity: 0.9,
            }}
          />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', mb: 3 }}>
            {footerLinks.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                color="inherit"
                underline="none"
                sx={{
                  fontSize: '0.85rem',
                  opacity: 0.6,
                  transition: 'opacity 0.2s',
                  '&:hover': { opacity: 1, color: 'primary.light' },
                }}
              >
                {label}
              </Link>
            ))}
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.4 }}>
            © {currentYear} {site.name}. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
