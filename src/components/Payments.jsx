import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { payments } from '../config/content';
import { SectionWrapper, AnimatedBlock, SectionLabel } from './Section';

export default function Payments() {
  if (!payments?.enabled) return null;

  const { description, methods } = payments;

  return (
    <SectionWrapper id="pagos" bg="background.default">
      <Container maxWidth="sm">
        <AnimatedBlock>
          <Box sx={{ textAlign: 'center' }}>
            <SectionLabel>Pagos</SectionLabel>
            <CreditCardIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1.5 }} />
            <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
              Formas de pago
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2.5 }}>
              {description}
            </Typography>
            {methods?.length > 0 && (
              <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
                {methods.map((method) => (
                  <Chip
                    key={method}
                    label={method}
                    size="medium"
                    sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', fontWeight: 600 }}
                  />
                ))}
              </Stack>
            )}
          </Box>
        </AnimatedBlock>
      </Container>
    </SectionWrapper>
  );
}
