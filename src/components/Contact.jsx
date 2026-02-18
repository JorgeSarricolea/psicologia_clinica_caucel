import { Box, Container, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LanguageIcon from '@mui/icons-material/Language';
import { contact } from '../config/content';
import { SectionWrapper, SectionLabel } from './Section';

const MotionDiv = motion.create('div');

function ContactCard({ Icon, title, children, delay = 0 }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Box
        sx={{
          p: 3.5,
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: '0 2px 16px rgba(108,92,231,0.05)',
          textAlign: 'center',
          height: '100%',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(108,92,231,0.1)',
          },
        }}
      >
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            bgcolor: 'rgba(108, 92, 231, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2,
          }}
        >
          <Icon sx={{ color: 'primary.main', fontSize: 24 }} />
        </Box>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        {children}
      </Box>
    </MotionDiv>
  );
}

export default function Contact() {
  return (
    <SectionWrapper id="contacto" bg="background.default">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionLabel>Contáctanos</SectionLabel>
          <Typography variant="h4" component="h2">
            Estamos para ayudarte
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {contact.phone && (
            <ContactCard Icon={PhoneIcon} title="Teléfono" delay={0}>
              <Link
                href={contact.phoneTel}
                variant="body2"
                color="text.primary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                {contact.phone}
              </Link>
            </ContactCard>
          )}

          {contact.whatsapp && (
            <ContactCard Icon={WhatsAppIcon} title="WhatsApp" delay={0.05}>
              <Link
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                color="text.primary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Enviar mensaje
              </Link>
            </ContactCard>
          )}

          {contact.website && (
            <ContactCard Icon={LanguageIcon} title="Sitio web" delay={0.1}>
              <Link
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                color="text.primary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Visitar sitio
              </Link>
            </ContactCard>
          )}

          {contact.address && (
            <ContactCard Icon={PlaceIcon} title="Dirección" delay={0.15}>
              <Typography variant="body2" color="text.secondary">
                {contact.address}
              </Typography>
            </ContactCard>
          )}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
