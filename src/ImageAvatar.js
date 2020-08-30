import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar style={{width: '5em', height: '5em'}} alt="Lance B.C. Mok" src={process.env.PUBLIC_URL + '/image/lance.png'} />
    </div>
  );
} 
