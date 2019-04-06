import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateLeague from './CreateLeague';
import TeamCardList from '../TeamCardList/TeamCardList';
import Navbar from '../Dashboards/Navbar';
import { AppContext } from '../Context/AppContext';
import LeagueSetupSettings from '../CreateLeague/LeagueSetupSettings';

const styles = theme => ({
  root: {
    width: '90%',
    marginTop: 63
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function getSteps() {
  return ['Select league settings', 'Add teams to league', 'Generate schedule'];
}

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <LeagueSetupSettings />;
//     case 1:
//       return <TeamCardList />;
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown step';
//   }
// }

class HorizontalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set(),
    leagueIndex: this.props.location.state.leagueIndex,
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <LeagueSetupSettings next={this.handleNext} index={this.state.leagueIndex} />;
      case 1:
        return <TeamCardList />;
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown step';
    }
  }

  isStepOptional = step => step === -1;

  handleNext = (data, index) => {
    const { activeStep } = this.state;
    switch (activeStep) {
      case 0:
        // do something with data
        this.context.editLeague(data, index);
        break;
      case 1:
        break;
      case 2:
        break;
      default:
        break;
    }
    // let { skipped } = this.state;
    // if (this.isStepSkipped(activeStep)) {
    //   skipped = new Set(skipped.values());
    //   skipped.delete(activeStep);
    // }
    // this.setState({
    //   activeStep: activeStep + 1,
    //   skipped
    // });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    console.log(this.state.settings);
    return (
      <>
        <Navbar />
        <div className={classes.root}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const props = {};
              const labelProps = {};
              if (this.isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (this.isStepSkipped(index)) {
                props.completed = false;
              }
              return (
                <Step key={label} {...props}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={this.handleReset} className={classes.button}>
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>

                <Typography className={classes.instructions}>
                  {this.getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

HorizontalLinearStepper.contextType = AppContext;

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HorizontalLinearStepper);
