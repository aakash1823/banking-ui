import { Typography } from "@material-ui/core"
import ReactFontLoader from 'react-font-loader';

const Heading = (e) => {
    return (  
        
        <div>
            <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500&display=swap' />

            <Typography variant="h3" style={{fontFamily:'Zilla Slab',backgroundColor:'#FF7979'}}>{e.a}</Typography>
        </div>
    );
}
 
export default Heading;