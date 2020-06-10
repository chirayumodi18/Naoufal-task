import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        width: '100%',
    },
    inputLabel: {
        paddingLeft: theme.spacing(1),
    },
    textField: {
        width: '100%',
    },
    button: {
        width: '100%',
        marginTop: 25,
        padding: 15,
        background: '#FF5A5F'
    }
}))

const CoverImage = () => {
    const classes = useStyles();
    return (
        <div className="cover-image-container my-5">
            <div className="cover-image-wrapper">
                <div className="cover-image" />
                <div className="get-started-modal-wrapper">
                    <div className="get-started-modal">
                        <div className="device-space">
                            <h1>Earn money as an Airbnb host</h1>
                            <div>
                                <form>
                                    <div className="mt-2">
                                        <p>Tell us a little about your place</p>
                                        <div>
                                            <TextField className={classes.textField} label="Location" variant="outlined" />
                                        </div>
                                        <div className="dropdown-wrapper">
                                            <div className="entire-place-dropdown">
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel
                                                      id="entire_place_label"
                                                      className={classes.inputLabel}
                                                    >
                                                        Entire Place
                                                    </InputLabel>
                                                    <Select
                                                      id="entire_place"
                                                      variant="outlined"
                                                      labelId="entire_place_label"
                                                      defaultValue={10}
                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="guests-dropdown">
                                                <FormControl className={classes.formControl}>
                                                    <InputLabel
                                                      id="guests_label"
                                                      className={classes.inputLabel}
                                                    >
                                                        Guests
                                                    </InputLabel>
                                                    <Select
                                                      id="guests"
                                                      labelId="guests-label"
                                                      defaultValue={1}
                                                      variant="outlined"
                                                    >
                                                        <MenuItem value={1}>1 guest</MenuItem>
                                                        <MenuItem value={2}>2 guests</MenuItem>
                                                        <MenuItem value={3}>3 guests</MenuItem>
                                                        <MenuItem value={4} selected>4 guests</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div>
                                            <Button className={classes.button} variant="contained" color="secondary">
                                                Get started
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CoverImage;
