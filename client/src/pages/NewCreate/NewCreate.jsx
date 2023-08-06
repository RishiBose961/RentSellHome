import React, { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import CreateHome from "./CreateHome";
import UplaodImage from "./UplaodImage";
import BookingStart from "./BookingStart";

const NewCreate = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <div className="max-w-7xl mx-auto px-4 mb-20">
      <div className="pt-10">
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Create Sweet Home">
          <CreateHome/>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Upload Image">
          <UplaodImage/>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Booking Start">
          <BookingStart/>
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <button className="bg-gradient-to-r from-red-500 to-blue-500 h-10
         w-32 font-semibold text-white rounded-full"  onClick={prevStep}>
          Back
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 h-10
         w-32 font-semibold text-white rounded-full" onClick={nextStep}>Next</button>
      </Group>
      </div>
     
    </div>
  );
};

export default NewCreate;
