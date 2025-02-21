'use client';

import { useState } from 'react';
import { sendEmail } from '../utils/email';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Checkbox,
  TextField,
  Button,
  FormControlLabel,
  Typography,
} from '@mui/material';

const initialChecklist = [
  { id: 'water-pressure', label: 'Revisar presión del agua', checked: false, notes: '' },
  { id: 'faucets', label: 'Revisar estado de las canillas', checked: false, notes: '' },
  { id: 'locks', label: 'Cerradura', checked: false, notes: '' },
  { id: 'kitchen', label: 'Muebles de cocina', checked: false, notes: '' },
  { id: 'lighting', label: 'Iluminación de día', checked: false, notes: '' },
  { id: 'ventilation', label: 'Ventilación', checked: false, notes: '' },
  { id: 'bathroom', label: 'Baño', checked: false, notes: '' },
  { id: 'ac', label: 'Aires acondicionados', checked: false, notes: '' },
  { id: 'pets', label: 'Mascota', checked: false, notes: '' },
  { id: 'family', label: 'Familia', checked: false, notes: '' },
  { id: 'outlets', label: 'Toma corrientes', checked: false, notes: '' },
  { id: 'hot-water', label: 'Sistema agua caliente', checked: false, notes: '' },
  { id: 'heating', label: 'Estufa', checked: false, notes: '' },
  { id: 'under-sink', label: 'Bajo mesada', checked: false, notes: '' },
  { id: 'price', label: 'Precio', checked: false, notes: '' },
  { id: 'zone', label: 'Zona', checked: false, notes: '' },
  { id: 'distinction', label: 'Distinción', checked: false, notes: '' },
  { id: 'balcony', label: 'Balcón', checked: false, notes: '' },
  { id: 'elevator', label: 'Escalera o ascensor', checked: false, notes: '' },
  { id: 'closet', label: 'Placard', checked: false, notes: '' },
  { id: 'room-size', label: 'Tamaño de habitación/es', checked: false, notes: '' },
  { id: 'internet', label: 'Empresas de internet', checked: false, notes: '' },
  { id: 'windows', label: 'Ventanas', checked: false, notes: '' },
];

export default function ChecklistForm() {
  const [checklist, setChecklist] = useState(initialChecklist);
  const [email, setEmail] = useState('');

  const handleCheckboxChange = (id) => {
    setChecklist(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleNotesChange = (id, notes) => {
    setChecklist(prev =>
      prev.map(item =>
        item.id === id ? { ...item, notes } : item
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert('Por favor ingresa un email');
      return;
    }

    try {
      await sendEmail(email, checklist);
      alert('Lista enviada correctamente!');
    } catch (error) {
      alert('Error al enviar el email');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {checklist.map(item => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card 
              variant="outlined" 
              sx={{
                '&:hover': {
                  boxShadow: 1,
                },
                height: '100%'
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(item.id)}
                        color="primary"
                      />
                    }
                    label={
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          textDecoration: item.checked ? 'line-through' : 'none',
                          color: item.checked ? 'text.secondary' : 'text.primary'
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                  <TextField
                    multiline
                    rows={2}
                    value={item.notes}
                    onChange={(e) => handleNotesChange(item.id, e.target.value)}
                    placeholder="Agregar notas..."
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ 
        mt: 4, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 2
      }}>
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 400 }}
        />
        <Button 
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ 
            minWidth: 200,
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}
        >
          Enviar lista por email
        </Button>
      </Box>
    </Box>
  );
} 