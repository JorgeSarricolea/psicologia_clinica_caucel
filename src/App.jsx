import { Helmet } from 'react-helmet-async';
import { Box, AppBar, Toolbar, Typography, Container, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site, hero, logo } from './config/content';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Planning from './components/Planning';
import Payments from './components/Payments';
import Parking from './components/Parking';
import Hours from './components/Hours';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const MotionDiv = motion.create('div');

const navLinks = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'caracteristicas', label: 'Nosotros' },
  { id: 'opiniones', label: 'Opiniones' },
  { id: 'horarios', label: 'Horarios' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'galeria', label: 'Galería' },
];

function NavLinks({ onClick }) {
  return (
    <>
      {navLinks.map(({ id, label }) => (
        <Typography
          key={id}
          component="a"
          href={`#${id}`}
          onClick={onClick}
          sx={{
            color: 'text.secondary',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
            px: 1.5,
            py: 0.75,
            transition: 'color 0.2s',
            '&:hover': { color: 'primary.main' },
          }}
        >
          {label}
        </Typography>
      ))}
    </>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta name="description" content={`${site.name} - ${site.tagline}. ${site.description}`} />
      </Helmet>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(250, 249, 254, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar component={Container} maxWidth="lg" sx={{ minHeight: { xs: 60, md: 68 } }}>
          <Box
            component="a"
            href="#inicio"
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <Box
              component="img"
              src={logo}
              alt={site.name}
              sx={{ height: { xs: 38, md: 44 }, width: 'auto' }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            <NavLinks />
            <Button
              href={hero.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="small"
              sx={{ ml: 2, px: 3 }}
            >
              Agendar
            </Button>
          </Box>
          <IconButton
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            sx={{ display: { md: 'none' }, color: 'primary.main' }}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        <AnimatePresence>
          {mobileOpen && (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  py: 3,
                  gap: 1.5,
                  bgcolor: 'rgba(250, 249, 254, 0.98)',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <NavLinks onClick={() => setMobileOpen(false)} />
                <Button
                  href={hero.ctaPrimary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="small"
                  sx={{ mt: 1, px: 4 }}
                  onClick={() => setMobileOpen(false)}
                >
                  Agendar cita
                </Button>
              </Box>
            </MotionDiv>
          )}
        </AnimatePresence>
      </AppBar>

      <Box id="main-content" component="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Features />
        <Planning />
        <Payments />
        <Parking />
        <Hours />
        <Testimonials />
        <Contact />
        <Gallery />
        <MapSection />
        <Footer />
      </Box>
    </>
  );
}
