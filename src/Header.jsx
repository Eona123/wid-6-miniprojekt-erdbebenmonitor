// --------------------- Import Material MUI ----------------------------//
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const Header = ({magnitude, setMagnitude, timeinterval, setTimeInterval}) => (
  <div className="header">
    <Typography variant='h4'sx = {{textDecoration: 'underline', color :"#6F4E37"}}>
      IGEO Erdbebenmonitor
    </Typography>
    {/* Magnitude */}
    <Stack direction="column">
      <Stack 
      direction="row"
        spacing={0.5}
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}>
        <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
          setMagnitude("all")            
          }}>
          All Earthquakes
        </Button>
        <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
          setMagnitude("1.0")            
          }}>
          1.0
        </Button>
        <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
          setMagnitude("2.5")            
          }}>
          2.5
        </Button>
        <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
          setMagnitude("4.5")            
          }}>
          4.5
        </Button>
              <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
          setMagnitude("significant")            
          }}>
          significant
        </Button>
      </Stack>
      {/* Zeitintervall */}
      <Stack 
      direction="row"
        spacing={0.5}
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}>
        <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
          setTimeInterval("hour")            
          }}>
          Letzte Stunde
        </Button>
        <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
          setTimeInterval("day")            
          }}>
          Letzter Tag
        </Button>
        <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
          setTimeInterval("week")            
          }}>
          Letzte Woche
        </Button>
        <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
          setTimeInterval("month")            
          }}>
          Letzter Monat
        </Button>
      </Stack>
    </Stack>
  </div>
);
