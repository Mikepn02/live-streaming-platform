import React from "react";
import { useMediaQuery } from "@mui/material";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  fullname: "",
  email: "",
  contact: "",
  city: "",
  feedback: "",
};

const Forms = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      className="border-2 border-[#E179CB] md:w-[80%] rounded-[10px] items-center justify-center p-5 md:flex w-full md:mx-auto md:flex-row"
      display="flex"
      flexDirection={isNonMobile ? "row" : "column"}
    >
      <div className={isNonMobile ? "w-1/2 flex flex-col p-10" : "w-full flex flex-col p-10"}>
        <p className="text-4xl font-bold">Let's Get in</p>
        <p className="text-4xl font-bold">Touch</p>
        <div className="custom-border mt-5"></div>
        <p className="mt-10">
          Start live streaming and making money with Live Stream
        </p>
        <p>Start live streaming and making money with Live Stream</p>
        <p>Start live streaming and making money with Live Stream</p>
        <p>Start live streaming and making money with Live Stream</p>
        <p className="mt-20 font-bold">livestreaming@gmail.com</p>
        <div className="small-customer-border"></div>
      </div>
      <div className={isNonMobile ? "md:w-1/2 w-full" : "w-full"}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, errors, handleBlur, handleChange }) => (
            <form className="mt-10">
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns={`repeat(${isNonMobile ? 4 : 1}, minmax(0, 1fr))`}
              >
                <TextField
                  fullWidth
                  type="text"
                  label="Full Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullname}
                  name="fullname"
                  sx={{ gridColumn: isNonMobile ? "span 2" : "span 1" }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  sx={{ gridColumn: isNonMobile ? "span 2" : "span 1" }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Contact"
                  value={values.contact}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="contact"
                  sx={{ gridColumn: isNonMobile ? "span 2" : "span 1" }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="City/town"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  name="city"
                  sx={{ gridColumn: isNonMobile ? "span 2" : "span 1" }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Feedback"
                  name="feedback"
                  value={values.feedback}
                  sx={{
                    gridColumn: isNonMobile ? "span 4" : "span 1",
                    "& .MuiInputBase-root": {
                      height: 200,
                    },
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <button className="bg-gradient-to-r  from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] rounded-[10px] w-48 h-12">Submit Message</button>
              </Box>
            </form>
          )}
        </Formik>
      </div>
    </Box>
  );
};

export default Forms;
  