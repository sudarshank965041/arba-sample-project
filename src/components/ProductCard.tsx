import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductCard(props: any) {
  console.log(props);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.product.title || ""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.description || ""}
        </Typography>
        <Typography
          gutterBottom
          component="div"
          style={{ marginTop: "15px", color: "#1976d2" }}
        >
          Rs. {props.product.price || "0"}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button variant="contained" fullWidth size="large">
          Add to cart
        </Button> */}
        <ButtonGroup variant="contained" size="large" fullWidth>
          <Button endIcon={<RemoveIcon />}></Button>
          <Button>1</Button>
          <Button startIcon={<AddIcon />}></Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
