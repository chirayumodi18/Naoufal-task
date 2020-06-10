import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    button: {
      marginTop: 32,
      textAlign: 'center',
      fontSize: 16,
      lineHeight: '24px',
      color: '#484848',
      padding: '10px 22px',
      fontWeight: 800,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#fff',
      background: '#fff',
      boxShadow: 'none',
      minWidth: 72,
      textTransform: 'unset'
    }
}))

const ReadyToEarn = () => {
  const classes = useStyles();
  return (
    <div className="ready-to-earn">
      <div className="image-wrapper">
        <div className="image-view" />
        <div className="image-text-wrapper">
          <div className="image-text">
            <h2>Ready to earn?</h2>
            <Button className={classes.button} color="default" variant="outlined">Get started</Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ReadyToEarn;
