import React from "react";
import { useFormik } from "formik";
import { theme } from "../MaterialUI Theme/theme";
import * as Yup from "yup";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  contactForm: {
    display: "flex",
    flexDirection: "column",
    minWidth: "75%",
    minHeight: "100vh",
    "& span": {
      fontSize: "5rem",
      //   color: theme.pallet.,
    },
  },
});

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
        .required("Please enter in your email address"),
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
      <FormControl>
        <FormLabel>Email Address</FormLabel>
        <Input
          id="contactPersonEmail"
          name="contactPersonEmail"
          placeholder="Your Email Address"
          autoFocus={true}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contactPersonEmail}
        />
        <FormHelperText>
          {formik.touched.contactPersonEmail &&
            formik.errors.contactPersonEmail}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Subject of equiry</FormLabel>
        <Input
          id="contactPersonSubject"
          name="contactPersonSubject"
          placeholder="Subject of Enquery"
          autoFocus={true}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contactPersonSubject}
        />
        <FormHelperText>
          {formik.touched.contactPersonSubject &&
            formik.errors.contactPersonSubject}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Content of Enquirey</FormLabel>
        <Input
          id="constactPersonEnquiry"
          name="constactPersonEnquiry"
          placeholder="Subject of Enquery"
          autoFocus={true}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.constactPersonEnquiry}
        />
        <FormHelperText>
          {formik.touched.constactPersonEnquiry &&
            formik.errors.constactPersonEnquiry}
        </FormHelperText>
      </FormControl>
      <Button variant="text" color="default" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
