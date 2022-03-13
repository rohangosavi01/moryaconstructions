import React from "react";
import { Formik, Form, Field, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./form/input";
import Error from "./form/error";
import { Box, Button, Label } from "theme-ui";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        success: false,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Full name field is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email field is required"),
        subject: Yup.string().required("Subject field is required"),
        phone: Yup.string().required("Phone Number field is required"),

        message: Yup.string().required("Message field is required"),
      })}
      onSubmit={async (
        { name, email, subject, message, phone },
        { setSubmitting, resetForm, setFieldValue }
      ) => {
        try {
          const data = JSON.stringify({
            name,
            email,
            subject,
            message,
            phone,
          });
          const config = {
            "Content-Type": "application/json",
          };

          const response = await fetch(
            "https://api.formium.io/submit/622b9b2a0a00c500016effOb/contact",
            {
              method: "POST",
              body: data,
              headers: config,
            }
          );

          setSubmitting(false);
          setFieldValue("success", true);
          setTimeout(() => resetForm(), 1000);
        } catch (err) {
          setSubmitting(false);
          setFieldValue("success", false);
          alert(`Something went wrong, please try again ${err}`); // eslint-disable-line
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <Box sx={styles.formWrapper}>
            <Box sx={styles.inputField}>
              <Label htmlFor="name">Name</Label>
              <Input
                as={FastField}
                type="text"
                name="name"
                component="input"
                aria-label="name"
                placeholder="Full name*"
                error={touched.name && errors.name}
              />
              <ErrorMessage component={Error} name="name" />
            </Box>

            <Box sx={styles.inputField}>
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                aria-label="email"
                component="input"
                as={FastField}
                type="email"
                name="email"
                placeholder="Email*"
                error={touched.email && errors.email}
              />
              <ErrorMessage component={Error} name="email" />
            </Box>
            <Box sx={styles.inputField}>
              <Label htmlFor="phone">Phone</Label>

              <Input
                as={FastField}
                type="text"
                name="phone"
                component="input"
                aria-label="phone"
                placeholder="Phone Number*"
                error={touched.phone && errors.phone}
              />
              <ErrorMessage component={Error} name="phone" />
            </Box>
            <Box sx={styles.inputField}>
              <Label htmlFor="subject">Subject</Label>

              <Input
                as={FastField}
                type="text"
                name="subject"
                component="input"
                aria-label="subject"
                placeholder="Subject*"
                error={touched.subject && errors.subject}
              />
              <ErrorMessage component={Error} name="subject" />
            </Box>

            {
              <Box sx={styles.inputField}>
                <Label htmlFor="message">Message</Label>

                <Field
                  as="textarea"
                  className="text__area"
                  aria-label="message"
                  id="message"
                  rows="8"
                  name="message"
                  placeholder="Message*"
                  error={touched.message && errors.message}
                />
                <ErrorMessage component={Error} name="message" />
              </Box>
            }

            {values.success && (
              <Box sx={styles.inputField}>
                <Box sx={styles.center}>
                  <h4>
                    Your message has been successfully sent, We will get back to
                    you ASAP!
                  </h4>
                </Box>
              </Box>
            )}
            <Box sx={styles.buttonWrapper}>
              <Button sx={styles.button}>Submit</Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

const styles = {
  formWrapper: {
    mt: "30px",
    p: "40px",
    borderRadius: "10px",
    backgroundColor: "background_secondary",
  },
  inputField: {
    position: "relative",
    marginBottom: "1rem",
    "& > input": {
      backgroundColor: "white",
    },
    ".text__area": {
      width: " 100%",
      boxSizing: "border-box",
      border: "2px solid ",
      borderColor: "accent",
      padding: " 0.8rem 1rem",
      borderRadius: "7px",
      marginBottom: "0.5rem",

      transition: "0.3s",
      outlineColor: "accent",

      "&:focus": {
        "&:focus": {
          borderColor: "primary",
          boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
          outline: "none",
        },
      },
      "&:placeholder-shown": {
        fontSize: 2,
      },
    },
  },
  buttonWrapper: {
    "@media screen and (max-width: 640px)": {
      textAlign: "center",
    },
    button: {
      mt: 0,
      "@media screen and (max-width: 640px)": {
        width: "80%",
      },
    },
  },
};

export default ContactForm;
