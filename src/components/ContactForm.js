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
import axiosBaseUrl from "../utils/axiosBaseUrl";
// import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  contactHeading: {
    marginTop: "11.7rem",
    marginBottom: "1.3rem",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    minWidth: "85%",
    minHeight: "100vh",
    "@media (max-width: 500px)": {
      marginTop: "1rem",
    },
    "& span": {
      fontSize: "3.4rem",
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
    "& textarea": {
      fontSize: "2.0rem",
      padding: "1.5rem",
    },
  },
  root: {
    "& label": {
      fontSize: "2.4rem",
    },
  },
}));

const ContactForm = () => {
  // let history = useHistory();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      contactPersonEmail: "",
      contactPersonSubject: "",
      contactPersonEnquiry: "",
    },
    validationSchema: Yup.object({
      contactPersonEmail: Yup.string()
        .email("Invalid Email")
        .required("Please enter in a valid email address."),
      contactPersonSubject: Yup.string()
        .required("Subject of your enquiry is required")
        .min(6, "Your enquiry needs to be atleast six charaters long"),
      contactPersonEnquiry: Yup.string()
        .required("Information of your enquiry is required.")
        .min(
          12,
          "The natuer of your enquire needs to be atleast 12 charaters long."
        ),
    }),
    onSubmit: (values) => {
      axiosBaseUrl
        .post("/sendEmail", {
          enquiryEmailAdress: values.contactPersonEmail,
          enquiryEnailSubject: values.contactPersonSubject,
          enquiryEmailContent: values.contactPersonEnquiry,
        })
        .then((response) => {
          alert("Your enquiry has been sent to Neil Lemmer");
          // history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.contactForm}>
      <Typography
        variant="alignCenter"
        color="initial"
        className={classes.contactHeading}
      >
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
          label="Subject of Enquiry"
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
          label="Content of Enquiry"
          id="contactPersonEnquiry"
          name="contactPersonEnquiry"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contactPersonEnquiry}
        />
        <FormHelperText>
          {formik.touched.contactPersonEnquiry &&
            formik.errors.contactPersonEnquiry}
        </FormHelperText>
      </FormControl>
      <Button variant="text" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
