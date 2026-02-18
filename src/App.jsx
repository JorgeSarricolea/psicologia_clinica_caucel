import { Helmet } from 'react-helmet-async';
import { Box, AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from './config/content';
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
import Footer from './components/Footer';

const MotionDiv = motion.create('div');

const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'caracteristicas', label: 'Nosotros' },
  { id: 'horarios', label: 'Horarios' },
  { id: 'opiniones', label: 'Opiniones' },
  { id: 'contacto', label: 'Contacto' },
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
            fontWeight: 600,
            fontSize: '0.85rem',
            px: 1.5,
            py: 0.75,
            borderRadius: 1,
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
          bgcolor: 'rgba(248, 247, 252, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar component={Container} maxWidth="lg" sx={{ minHeight: { xs: 56, md: 64 } }}>
          <Typography
            component="a"
            href="#inicio"
            sx={{
              flexGrow: 1,
              fontFamily: '"Nunito", sans-serif',
              fontSize: '1.2rem',
              fontWeight: 800,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            {site.shortName}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <NavLinks />
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
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  py: 3,
                  gap: 1,
                  bgcolor: 'rgba(248, 247, 252, 0.98)',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <NavLinks onClick={() => setMobileOpen(false)} />
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
        <MapSection />
        <Footer />
      </Box>
    </>
  );
}
