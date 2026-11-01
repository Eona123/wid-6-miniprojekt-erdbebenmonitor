// --------------------- Import Material MUI ----------------------------//
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 1.5,
    label: '1.5',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 2.5,
    label: '2.5',
  },
    {
    value: 3,
    label: '3',
  },
];


export default function Sidebar({ specialEarth, radius, setRadius }) {

  const handleChange = (event, newValue) => {
  setRadius(newValue);
  };

  return (
    <aside className="sidebar"> 
      <Card sx={{ minWidth: 325 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Mehr Infos:
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            Stärke:{" "}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary' }}
            >
              {specialEarth.properties?.mag ?? ""}
            </Typography>
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            Ort: {""}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary' }}
            >
              {specialEarth.properties?.place?? ""}
            </Typography>
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            Koordinaten: {""}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary' }}
            >
              {specialEarth.geometry?.coordinates[1] ?? ""}, {specialEarth.geometry?.coordinates[0] ?? ""}
            </Typography>
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            Zeit: {""}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary' }}
            >
              {new Date(specialEarth.properties?.time?? "").toLocaleString()}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant='h5'>
            Kreisgrösse
          </Typography>
        <Box sx={{width : "80%", mx: "auto"}}>
          <Slider
            aria-label="Radius"
            valueLabelDisplay="auto"
            value={radius}
            step={0.5}
            marks
            min={1}
            max={3}
            marks={marks}
            onChange= {handleChange}
          />
        </Box>
        </CardContent>
      </Card>
    </aside>
  );
}


