import React from "react";
import { CheckBox } from "components";

export default {
  title: "shahbaj_s_application3/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "round",
  color: "black_900",
  size: "xs",
  variant: "outline",
  label: "Checkbox",
  inputClassName: "mr-1",
};
