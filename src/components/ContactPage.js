import React from "react";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormControl, FormHelperText, FormLabel, Input, InputBase } from '@material-ui/core'

const ContactForm = useFormik({
  initialValues: {
    contactPersonEmail: "",
    contactPersonSubject: "",
    contactPersonEquiry: "",
  },
  validationSchema: Yup.object({
    contactPersonEmail: Yup.string()
      .email("Invalid email address.")
      .required("Required"),
    contactPersonSubject: Yup.string().min(
      6,
      "Subject of your equiry needs to be more the 6 characters long. "
    ),
    contactPersonEquiry: Yup.string().min(
      6,
      "Enquiry needs to be atleast 6 characters long"
    ),
  }),
  return (
      <div>
      <form onSubmit={ContactForm.onSubmit}>
      <FormControl>
        <FormLabel>Email Address:</FormLabel>
            <InputBase 
            id="contactPersonEmail"
            name="contactPersonEmail"
            type="string"
            onChange={ContactForm.handleChange}
            onBlur={ContactForm.onBlur}
            value={ContactForm.values.contactPersonEmail}
            />
        <FormHelperText>{ContactForm.touched.contactPersonEmail && ContactForm.errors.contactPersonEmail ? (
            {ContactPage.errors.contactPersonEmail}
        )}</FormHelperText>
      </FormControl>
      </form>
      </div>
  )
});

export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title> Neil Lemmer || Contact Me</title>
      </Helmet>
      <NavBar />
    </div>
  );
}
