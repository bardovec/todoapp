import React, {useEffect, useState} from 'react';
import { Typography } from "@material-ui/core";
import useStyles from "./style";

const PhotoItem = ({photo}) => {
    const classes = useStyles();
      return (
        <div className={classes.mainPhoto} >
            <img className={classes.photoImg} src={photo.thumbnailUrl} alt=""/>
            <Typography className={classes.photoTitle} >{photo.title}</Typography>
        </div>
    );
};

export default PhotoItem;
