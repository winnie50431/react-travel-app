import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import { LocationOn, Phone } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const PlaceDetail = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected) {
    console.log(refProp);
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Card>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : ""}
        title={place.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt="award" />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
      </CardContent>
    </Card>
  );
};

export default PlaceDetail;
