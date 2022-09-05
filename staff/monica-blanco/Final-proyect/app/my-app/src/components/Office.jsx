import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import EuroIcon from '@mui/icons-material/Euro';



export default function Office() {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        M
                    </Avatar>
                }
                action={
                   <IconButton aria-label='price'>
                    <EuroIcon/>
                   </IconButton>
                }
                title="POBLENOU"
                subheader="Office Deluxe"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://thumbs.dreamstime.com/z/escena-de-collage-divertida-personaje-chica-cansada-c%C3%B3mica-y-noticias-falsas-televisi%C3%B3n-detener-el-concepto-desinformaci%C3%B3n-228496593.jpg"
                alt="Paella & Office"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                The office with paella will be a perfect dish for your day, it is a fun meal and the best thing is that you will not have to cook.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label='Add to Laptop'>
                    <LaptopChromebookIcon fontSize='large'/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
//Darle una vuelta
// }action={
//     <Typography 
//     className={classes.action}
//     variant = 'h5'
//     color= 'textSecondary'
//     >
//      {50}
//     </Typography>

//action para convertir en el precio & matrial ui 
//Typography para poner el precio de la Office
//con la office luego debo buscar vinvular a mi base de datos de officina
// asi cambio foto y descripción h

