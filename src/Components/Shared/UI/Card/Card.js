import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({content}) {
  return (
    <Card sx={{ maxWidth: content.width }}>
      <CardActionArea>
		<Link style={{textDecoration: 'none'}} to={content.to}>
        <CardMedia
          component="img"
          height={content.height}
		      image={content.image}
		      alt={content.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
		  	  {content.header}
          </Typography>
          {content.lessons ? 
          <></>
          :
          <Typography variant="body2" color="text.secondary">
		  	  {content.description}
          </Typography>
          }
          {/* <Typography variant="body2" color="text.secondary">
		  	  {content.description}
          </Typography> */}
        </CardContent>
		</Link>
      </CardActionArea>
    </Card>
  );
}


// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// // import { useNavigate } from 'react-router-dom';

// export default function MediaCard({content}) {
// //   const navigate = useNavigate
// //   const to = content.to
// //   const onClickHandler = () => {
// // 	navigate('/html')
// //   }
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={content.image}
//         alt={content.alt}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {content.header}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {content.description}
//         </Typography>
//       </CardContent>
//       <CardActions>
// 	  	<Button href={content.to} size="small" color="primary">
// 	  		{content.button}
//       	</Button>
//       </CardActions>
//     </Card>
//   );
// }