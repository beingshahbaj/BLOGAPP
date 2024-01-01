import React from "react";

import { Input } from "components";

export default {
  title: "shahbaj_s_application3/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "square",
  color: "deep_purple_A700",
  size: "xs",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
