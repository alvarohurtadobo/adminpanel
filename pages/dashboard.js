import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@material-ui/core';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons'; // Importa los íconos que necesites

// Reemplaza AccessAlarm y ThreeDRotation con los íconos correspondientes a cada tarjeta
const cardData = [
  { title: "MINIM VENISAM", icon: <AccessAlarm /> },
  { title: "SENT OCCARCAR", icon: <ThreeDRotation /> },
  { title: "CILLIM DOLORE", icon: <AccessAlarm /> },
  { title: "CULPA QUI OFFICIA", icon: <ThreeDRotation /> },
  { title: "CONSECTETUR", icon: <AccessAlarm /> },
  { title: "DAIS AUTE", icon: <ThreeDRotation /> },
  { title: "NULLA PARIATURI", icon: <AccessAlarm /> },
  { title: "TEMPOS INCIDIDUNG", icon: <ThreeDRotation /> },
];

function Dashboard() {
  return (
        <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card style={{ borderRadius: 15 }}>
          <CardContent>
            <Typography variant="h5">Tempor</Typography>
          </CardContent>
        </Card>
      </Grid>
      {cardData.map((data, index) => (
        <Grid item xs={3} key={index}>
          <Card style={{ height: index < 4 ? 200 : 150, borderRadius: 15 }}>
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                {data.icon}
                <Typography variant="subtitle1">{data.title}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Card style={{ borderRadius: 15 }}>
          <CardContent>
            <Typography variant="h5">MAGNA</Typography>
            <Typography variant="subtitle1">
              {Math.floor(Math.random() * 1000)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
