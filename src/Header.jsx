// --------------------- Import Material MUI ----------------------------//
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';

export const Header = () => (
  <div className="header">
    <Typography variant='h4'sx = {{textDecoration: 'underline', color :"#6F4E37"}}>
      IGEO Erdbebenmonitor
    </Typography>
  </div>
);
