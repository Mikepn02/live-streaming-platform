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
    <Box className="border-2 border-[#E179CB] container justify-around mx-auto h-[55vh] flex flex-col md:flex-row mt-10 mb-10 rounded-[10px]">
      <div className="w-1/3 flex flex-col p-10 ">
        <p className="text-4xl font-bold">Let Get's in</p>
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
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span-4",
                },
              }}
            >
              <TextField
                fullWidth
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullname}
                name="fullname"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Contact"
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                name="contact"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                label="City/town"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name="city"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                label="Feedback"
                name="feedback"
                value={values.feedback}
                sx={{
                  gridColumn: "span 4",
                  "& .MuiInputBase-root": {
                    height: 200
                  },
                  
                }}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">

            </Box>
            <div className="flex justify-start">
             <button className="bg-[#D7DF4D] w-48 h-12">Submit Message</button>
             </div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Forms;
