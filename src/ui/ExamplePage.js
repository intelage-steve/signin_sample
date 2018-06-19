/* eslint-disable react/no-danger */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import { withTheme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DoublyLinkedList } from '../api/Utility/DataStructures';
import logo from '../img/intelage_logo.png';

const styles = theme => ({
  overlay: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.background.light,
  },
  paperContainer: {
    height: '100vh',
    width: '100%',
  },
  paper: {
    minHeight: '50vh',
    marginTop: '8vh',
    paddingTop: 21,
    paddingBottom: 21,
    overflow: 'hidden',
    paddingLeft: '15%',
    paddingRight: '15%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 13,
      paddingRight: 13,
    },
  },
  imageContainer: {
    paddingTop: 21,
    paddingBottom: 21,
  },
  image: {
    height: '34px',
    width: 'auto',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
  },
  divider: {
    height: 3,
    width: '100%',
    marginLeft: -15,

    borderBottom: '2px solid #f9f9f9',
  },
  formContainer: {

  },
  textField: {
    fontSize: theme.typography.body1,
    fontWeight: theme.typography.body1,
  },
  floatingLabelStyle: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 300,
  },
  overlayShow: {
    display: 'block',
  },
  overlayHide: {
    display: 'none',
  },
  headline: {
    ...theme.typography.headline,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 8,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.75rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
  bodyText: {
    ...theme.typography.body1,
    textAlign: 'left',
    paddingBottom: 8,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 21,
  },
  button: {
    minWidth: 89,
    margin: theme.spacing.unit,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.medium,
    '&:hover': {
      color: theme.palette.primary.medium,
    },
    '&:last-child': {
      marginRight: 0,
    }
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
  },
  colorSampleInfo: {
    height: 21,
    backgroundColor: theme.palette.status.info,
  },
  colorSampleSuccess: {
    height: 21,
    backgroundColor: theme.palette.status.success,
  },
  colorSampleWarning: {
    height: 21,
    backgroundColor: theme.palette.status.warning,
  },
  colorSampleDanger: {
    height: 21,
    backgroundColor: theme.palette.status.danger,
  }

});

class ExamplePage extends Component {
  constructor (props) {
    super(props);
    autoBind(this);

    this.pageSections = new DoublyLinkedList();

    this.state = {
      currentPageSection: {},
      businessData: {
        legalName: '',
        friendlyName: '',
      }
    };
  }

  componentDidMount () {
    // adding page sections to the doubly linked list for forward/backward navigation
    this.pageSections.add(this.businessWelcomeSection);
    this.setCurrentPageSection(this.pageSections.head);
  }

  setCurrentPageSection (section) {
    this.setState({currentPageSection: section});
  }

  handleFieldBlur (event, index, value) {
    this.setState({value});
  }

  handleNextClick (e) {
    console.log('next button clicked');
  }

  handlePreviousClick () {
    console.log('previous button clicked');
  }

  handleNavReset () {
    this.setState({currentPageSection: this.pageSections.head});
  }

  handleLegalNameChange (event) {
    const businessData = {...this.state.businessData};
    businessData.legalName = event.target.value;
    this.setState({businessData});
  }

  handleFriendlyNameChange (event) {
    const businessData = {...this.state.businessData};
    businessData.friendlyName = event.target.value;
    this.setState({businessData});
  }

  render () {
    return (
      <Grid
        className={classNames(this.props.classes.overlay, this.props.classes.overlayShow)}
        ref={(overlayContainer) => { this.overlayContainer = overlayContainer; }}
      >
        <Grid container className={this.props.classes.cardContainer}
              justify="center">
          <Grid item xs={10} sm={6} xl={4}
                className={this.props.classes.paperContainer}>
            <Paper className={this.props.classes.paper} elevation={1} id="card"
                   ref={(card) => { this.card = card; }}>
              <Grid container>
                <Grid item xs={12}
                      className={this.props.classes.imageContainer}>
                  <img className={this.props.classes.image}
                       src={logo} alt="Intelage logo"/>
                </Grid>
                <Grid item xs={12}>
                  <div className={this.props.classes.divider}></div>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={this.props.classes.headline} gutterBottom>
                    Here is a sample headline
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={this.props.classes.bodyText} gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet scelerisque magna nec ornare.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={this.props.classes.formContainer}>
                <Grid item xs={12}>
                  <form>
                    <div
                      id="businessNameSection"
                      className={classNames('wizard-section', 'business-name')}
                      key="businessNameKey"
                      ref={(businessNameSection) => { this.businessNameSection = businessNameSection; }}
                    >
                      <div>
                        <TextField
                          label="Legal business name"
                          className={this.props.classes.textField}
                          value={this.state.businessData.legalName}
                          onChange={this.handleLegalNameChange.bind(this)}
                          type="text"
                          InputLabelProps={{
                            shrink: true,
                            className: this.props.classes.floatingLabelStyle,
                          }}
                          fullWidth
                          margin="normal"
                        />
                        <TextField
                          label="Business friendly name"
                          className={this.props.classes.textField}
                          value={this.state.businessData.friendlyName}
                          onChange={this.handleFriendlyNameChange.bind(this)}
                          type="text"
                          InputLabelProps={{
                            shrink: true,
                            className: this.props.classes.floatingLabelStyle,
                          }}
                          fullWidth
                          margin="normal"
                        />
                      </div>
                      <div className={this.props.classes.buttonContainer}>
                        <Button variant="raised"
                                className={this.props.classes.button}
                                onClick={this.handlePreviousClick}>Previous</Button>
                        <Button variant="raised"
                                className={this.props.classes.button}
                                onClick={this.handleNextClick}>Next</Button>
                      </div>
                    </div>
                  </form>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withTheme()(withStyles(styles, {withTheme: true})(ExamplePage));