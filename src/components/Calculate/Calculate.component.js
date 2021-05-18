import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Alert from "@material-ui/lab/Alert";

import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { StepperCalc } from "../StepperCalc/StepperCalc";
import Select from "@material-ui/core/Select";

import { useStyles } from "./Calculate.style.js";
import { UIModal } from "../Modal/UIModal.component";
import { AlertTitle } from "@material-ui/lab";

export const CalculateComponents = () => {
  const classes = useStyles();

  const [selectBalkonySide, setSelectBalkonySide] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);

  const [selectBalkonyEdgeList, setSelectBalkonyEdgeList] = useState([]);

  const [calcInfo, setCaclInfo] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalSize, setTotalSize] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    return () => {
      setSelectBalkonyEdgeList([]);
    };
  }, []);

  const onChangeBalkony = (event) => {
    fillInArray(event.target.value);
    setSelectBalkonySide(event.target.value);
    setActiveStep(0);
  };

  const fillInArray = (selectBalconyEdgeNumber) => {
    let newCalcInfo = {};
    let newList = [];
    Array(selectBalconyEdgeNumber)
      .fill("kenar")
      .forEach((item, index) => {
        newCalcInfo[index] = {
          width: 0,
          height: 0,
          result: 0,
        };
        newList.push(`${index + 1}.${item}`);
      });

    setSelectBalkonyEdgeList(newList);
    setCaclInfo(newCalcInfo);
  };

  const changeCalcInput = (selectValue, index, key) => {
    let value = selectValue === "" ? 0 : selectValue;

    let sideInfo = { ...calcInfo[index], [key]: parseFloat(value) };
    sideInfo.result = sideInfo.width * sideInfo.height;

    // let sideResult = calcInfo[index].height * calcInfo[index].width;
    let newInfo = {
      ...calcInfo,
      [index]: { ...sideInfo },
    };
    calcResult(newInfo);
    setCaclInfo(newInfo);
  };

  const calcResult = (newInfo) => {
    let count = 0;
    Object.values(newInfo).forEach((item) => (count = count + item.result));

    setTotalSize(count);
    setTotalAmount(count * unitPrice);
    setActiveStep(1);
  };

  const onChangeUnitPrice = (event) => {
    let newUnitPrice = event.target.value;
    let totalAmountCalc = newUnitPrice * totalSize;
    setUnitPrice(newUnitPrice);
    setTotalAmount(totalAmountCalc);
  };

  const onClickSuccess = () => {
    setActiveStep(2);
    setOpenModal(true);
  };

  const onClickSave = () => {
    setOpenModal(false);
    setSuccessMessage(true);
    setActiveStep(3);
  };

  return (
    <Container fixed>
      <header className={classes.appHeader}>
        <Paper className={classes.paper}>Balkon Hesaplama</Paper>
      </header>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={4} className={classes.flex}>
            <p className={classes.label}> Balkon Kenar sayısı seçiniz </p>
          </Grid>
          <Grid item xs={8}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                Kenar Seçimi
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={selectBalkonySide}
                onChange={onChangeBalkony}
              >
                <MenuItem selected value="0">
                  Seçim Yapınız
                </MenuItem>

                <MenuItem value={1}>1 Kenar</MenuItem>
                <MenuItem value={2}>2 Kenar</MenuItem>
                <MenuItem value={3}>3 Kenar</MenuItem>
              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </form>
      <div style={{ marginTop: 20 }}>
        {selectBalkonyEdgeList.map((item, index) => (
          <fieldset>
            <legend> {index + 1}. Kenar Hesaplaması</legend>
            <div className={classes.calcArea}>
              <div>
                <TextField
                  label="En Ölçümü"
                  id="standard-start-adornment"
                  className={clsx(
                    classes.margin,
                    classes.textField,
                    classes.txtHeight,
                  )}
                  value={calcInfo[index]["width"]}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">cm</InputAdornment>
                    ),
                  }}
                  onChange={(e) =>
                    changeCalcInput(e.target.value, index, "width")
                  }
                />

                <TextField
                  label="Yükseklik Ölçümü"
                  id="standard-start-adornment"
                  onChange={(e) =>
                    changeCalcInput(e.target.value, index, "height")
                  }
                  value={calcInfo[index]["height"]}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">cm</InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <FormControl className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Toplam
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={0}
                    readOnly
                    onChange={() => console.log("sadf")}
                    endAdornment={
                      <InputAdornment position="start">cm</InputAdornment>
                    }
                    labelWidth={30}
                    value={calcInfo[index]["result"]}
                  />
                </FormControl>
              </div>
            </div>
          </fieldset>
        ))}

        {selectBalkonySide > 0 && (
          <div style={{ marginTop: 50 }}>
            <fieldset>
              <legend> Hesaplama Sonucu : </legend>
              <div className={classes.calcArea}>
                <FormControl className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Toplam Ölçüm
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={0}
                    readOnly
                    endAdornment={
                      <InputAdornment position="start">cm</InputAdornment>
                    }
                    labelWidth={30}
                    value={totalSize}
                  />
                </FormControl>

                <FormControl className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Birim Fiyat
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={unitPrice}
                    onChange={onChangeUnitPrice}
                    endAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    labelWidth={30}
                  />
                </FormControl>

                <FormControl className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Toplam Fiyat
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={0}
                    readOnly
                    endAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    labelWidth={30}
                    value={totalAmount}
                  />
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 50,
                  marginBottom: 10,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onClickSuccess}
                >
                  Tamamla
                </Button>
              </div>
            </fieldset>
          </div>
        )}
      </div>

      <StepperCalc activeStep={activeStep} />
      <div>
        {openModal && (
          <UIModal open={openModal} handleClose={() => setOpenModal(false)}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <h4>Hesaplama Bilgisi ve Onay</h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label className="">Toplam Kenar </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {Object.keys(calcInfo).length}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <label>Toplam Ölçü</label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {`${totalSize} cm`}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <label>Toplam Fiyat</label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {`${totalAmount} `}
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickSave}
                  >
                    Onayla
                  </Button>
                </Grid>
              </Grid>
            </div>
          </UIModal>
        )}
        <div className={classes.messageArea}>
          {successMessage && (
            <Snackbar
              open={successMessage}
              autoHideDuration={6000}
              onClose={() => {
                setSuccessMessage(false);
              }}
            >
              <Alert severity="success" variant="filled">
                <AlertTitle>İşlem Başarılı</AlertTitle>
                İşleminiz tarafımıza başarı ile <strong> iletişmiştir.</strong>
              </Alert>
            </Snackbar>
          )}
        </div>
      </div>
    </Container>
  );
};
