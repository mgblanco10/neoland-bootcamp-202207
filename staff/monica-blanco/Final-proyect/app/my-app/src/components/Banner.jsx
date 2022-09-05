import { Button, Typography } from "@mui/material"
import './Banner.css'
const Banner = ()=>{
    return (
        <div className="banner">
            <div className="bannerInfo">
            <Typography variante= "h2" className="tituloBanner"> Find the space you are looking for...</Typography>
            <Button variante="contained">Check this space</Button>
            </div>
        </div>
    )
}

export default Banner