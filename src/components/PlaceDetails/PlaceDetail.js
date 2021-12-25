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

import useStyles from "./styles";

const PlaceDetail = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected) {
    // console.log(refProp);
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Card>
      <CardMedia
        style={{ height: 350 }}
        image={place.Picture ? place.Picture.PictureUrl1 : ""}
        title={place.Name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.Name}
        </Typography>
        {place.OpenTime ? (
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">營業時間</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.OpenTime}
            </Typography>
          </Box>
        ) : null}
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="body1" color="textSecondary">
            {place.Description || place.DescriptionDetail}
          </Typography>
        </Box>
        {place.ParkingInfo ? (
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="subtitle1">
              {place.ParkingInfo}
            </Typography>
          </Box>
        ) : null}
        <Chip
          size="small"
          label={place.Class || place.Class1}
          className={classes.chip}
        />
        <Typography
          gutterBottom
          variant="subtitle2"
          color="textSecondary"
          className={classes.subtitle}
        >
          <LocationOn />
          {place.Address || place.City}
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          className={classes.spacing}
        >
          <Phone />
          {place.Phone}
        </Typography>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.WebsiteUrl, "_blank")}
          >
            官方網站
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetail;
