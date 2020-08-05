import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormHelperText,
  Button,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contactForm: {
    display: "flex",
    flexDirection: "column",
    minWidth: "85%",
    minHeight: "100vh",
    "@media (max-width: 500px)": {
      marginTop: "11.7rem",
    },
    "& span": {
      fontSize: "3.4rem",
      margin: "auto",
    },
    "& input": {
      fontSize: "2.0rem",
      marginLeft: "2.5rem",
    },
    "& p": {
      margin: "1.5rem",
      textAlign: "center",
      color: "red",
      fontSize: "2.0rem",
    },
    "& button": {
      backgroundColor: theme.palette.primary.main,
      "& span": {
        color: "white",
      },
    },
  },
  root: {
    "& label": {
      fontSize: "2.4rem",
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      contactPersonEmail: "",
      contactPersonSubject: "",
      constactPersonEnquiry: "",
    },
    validationSchema: Yup.object({
      contactPersonEmail: Yup.string()
        .email("Invalid Email")
        .required("Please enter in your email address."),
      contactPersonSubject: Yup.string().required(
        "Subject of your enquiery is required"
      ),
      constactPersonEnquiry: Yup.string().required(
        "information of your enquiry is required."
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.contactForm}>
      <Typography variant="alignCenter" color="initial">
        Contact me
      </Typography>
      <FormControl className={classes.root}>
        <TextField
          variant="outlined"
          label="Email Address"
          id="contactPersonEmail"
          name="contactPersonEmail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contactPersonEmail}
        />
        <FormHelperText>
          {formik.touched.contactPersonEmail &&
            formik.errors.contactPersonEmail}
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.root}>
        <TextField
          variant="outlined"
          label="Subject of Enquery"
          id="contactPersonSubject"
          name="contactPersonSubject"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contactPersonSubject}
        />
        <FormHelperText>
          {formik.touched.contactPersonSubject &&
            formik.errors.contactPersonSubject}
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.root}>
        <TextField
          variant="outlined"
          multiline="true"
          rows="15"
          label="Content of Enquery"
          id="constactPersonEnquiry"
          name="constactPersonEnquiry"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.constactPersonEnquiry}
        />
        <FormHelperText>
          {formik.touched.constactPersonEnquiry &&
            formik.errors.constactPersonEnquiry}
        </FormHelperText>
      </FormControl>
      <Button variant="text" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
