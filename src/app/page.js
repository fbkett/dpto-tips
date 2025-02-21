import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import Link from 'next/link';

const rentalTips = [
  {
    title: "Investigación Previa",
    tips: [
      "Investiga el barrio en diferentes horarios",
      "Verifica la proximidad al transporte público",
      "Busca servicios cercanos (supermercados, farmacias, etc.)",
      "Consulta los precios promedio de la zona"
    ]
  },
  {
    title: "Aspectos Legales",
    tips: [
      "Verifica que el propietario sea el titular real",
      "Lee detenidamente el contrato antes de firmar",
      "Consulta sobre expensas y servicios incluidos",
      "Pregunta sobre las políticas de renovación"
    ]
  },
  {
    title: "Seguridad",
    tips: [
      "Evalúa la seguridad del edificio",
      "Consulta sobre cámaras y personal de seguridad",
      "Verifica el estado de cerraduras y ventanas",
      "Pregunta sobre la seguridad del barrio"
    ]
  },
  {
    title: "Estado del Inmueble",
    tips: [
      "Revisa signos de humedad o filtraciones",
      "Verifica el funcionamiento de servicios básicos",
      "Examina el estado de pisos y paredes",
      "Comprueba la ventilación natural"
    ]
  }
];

export default function Home() {
  return (
    <Box component="main" sx={{ 
      p: { xs: 2, sm: 4 },
      maxWidth: 'lg', 
      mx: 'auto' 
    }}>
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={{ 
          fontSize: { xs: '2rem', sm: '3rem' }
        }}
      >
        Guía para Alquilar un Departamento
      </Typography>
      
      <Typography 
        variant="h6" 
        align="center" 
        color="text.secondary" 
        sx={{ 
          mb: { xs: 3, sm: 6 },
          fontSize: { xs: '1rem', sm: '1.25rem' }
        }}
      >
        Tips esenciales para encontrar tu próximo hogar
      </Typography>

      <Grid container spacing={2}>
        {rentalTips.map((section) => (
          <Grid item xs={12} md={6} key={section.title}>
            <Card 
              variant="outlined" 
              sx={{ 
                height: '100%',
                '&:hover': {
                  boxShadow: 1,
                  transition: 'box-shadow 0.3s ease-in-out'
                }
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom 
                  color="primary"
                  sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
                >
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {section.tips.map((tip) => (
                    <Typography 
                      component="li" 
                      key={tip}
                      sx={{ 
                        mb: 1,
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                    >
                      {tip}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: { xs: 3, sm: 6 } }}>
        <Link href="/checklist" passHref style={{ textDecoration: 'none' }}>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              px: { xs: 3, sm: 4 }, 
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1rem', sm: '1.1rem' },
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                transform: 'translateY(-2px)',
                transition: 'transform 0.2s'
              }
            }}
          >
            Ir a la Checklist de Visita
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
