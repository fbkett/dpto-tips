'use client';

import { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Card, 
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment
} from '@mui/material';

export default function TemplatePage() {
  const [formData, setFormData] = useState({
    nombre: '',
    zona: '',
    presupuesto: '',
    dormitorios: '',
    mascotas: 'no',
    ocupacion: '',
    mudanza: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateMessage = () => {
    const message = `Hola, mi nombre es ${formData.nombre}. 

Estoy interesado/a en alquilar un departamento en la zona de ${formData.zona}. Mi presupuesto máximo es de $${formData.presupuesto}.

Detalles de mi búsqueda:
- Dormitorios necesarios: ${formData.dormitorios}
- Mascotas: ${formData.mascotas}
- Ocupación: ${formData.ocupacion}
- Fecha estimada de mudanza: ${formData.mudanza}

Me gustaría recibir información sobre propiedades disponibles que se ajusten a estas características. Estoy disponible para coordinar visitas y proporcionar la documentación necesaria.

Quedo atento/a a su respuesta.
Saludos cordiales.`;

    // Copiar al portapapeles
    navigator.clipboard.writeText(message);
    alert('¡Mensaje copiado al portapapeles!');
  };

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
        sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}
      >
        Template para Inmobiliarias
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
        Genera un mensaje profesional para contactar inmobiliarias
      </Typography>

      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box component="form" sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: { xs: 2, sm: 3 }
          }}>
            <TextField
              label="Nombre completo"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Zona de interés"
              name="zona"
              value={formData.zona}
              onChange={handleChange}
              fullWidth
              placeholder="Ej: Palermo, Belgrano"
            />

            <TextField
              label="Presupuesto"
              name="presupuesto"
              value={formData.presupuesto}
              onChange={handleChange}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />

            <TextField
              label="Cantidad de dormitorios"
              name="dormitorios"
              value={formData.dormitorios}
              onChange={handleChange}
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>¿Tenés mascotas?</InputLabel>
              <Select
                name="mascotas"
                value={formData.mascotas}
                onChange={handleChange}
                label="¿Tenés mascotas?"
              >
                <MenuItem value="no">No</MenuItem>
                <MenuItem value="perro">Sí, perro</MenuItem>
                <MenuItem value="gato">Sí, gato</MenuItem>
                <MenuItem value="otros">Sí, otros</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Ocupación"
              name="ocupacion"
              value={formData.ocupacion}
              onChange={handleChange}
              fullWidth
              placeholder="Ej: Empleado en relación de dependencia"
            />

            <TextField
              label="Fecha estimada de mudanza"
              name="mudanza"
              value={formData.mudanza}
              onChange={handleChange}
              fullWidth
              placeholder="Ej: Principios de abril"
            />

            <Button
              variant="contained"
              size="large"
              onClick={generateMessage}
              sx={{ 
                mt: 2,
                py: { xs: 1.5, sm: 2 },
                width: { xs: '100%', sm: 'auto' },
                alignSelf: { xs: 'stretch', sm: 'center' }
              }}
            >
              Generar y Copiar Mensaje
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
} 