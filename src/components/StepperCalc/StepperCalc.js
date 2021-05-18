import React,{useEffect} from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return [
    "Balkon Kenar seçimi yapınız.",
    "Kenarların ölçülerini giriniz",
    "Onaylama",
  ];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return "Balkon Kenar seçimi yapınız.";
    case 1:
      return "Kenarların ölçülerini giriniz";
    case 2:
      return "Onaylama";
    default:
      return "Unknown stepIndex";
  }
}

export const StepperCalc = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  useEffect(() => {
    if(props.activeStep){
      setActiveStep(props.activeStep)
    }
   
  }, [props.activeStep])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
  {/*    <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
             Tüm adımları tamamla.
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Geri
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Bitir" : "İleri"}
              </Button>
            </div>
          </div>
        )}
      </div>
  */}
  
    </div>
  );
};
