import { Box, Typography } from '@mui/material';
import ChecklistForm from '../../components/ChecklistForm';

export default function ChecklistPage() {
  return (
    <Box component="main" sx={{ p: 4, maxWidth: 'lg', mx: 'auto' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Checklist para Visitar Departamentos
      </Typography>
      <ChecklistForm />
    </Box>
  );
} 