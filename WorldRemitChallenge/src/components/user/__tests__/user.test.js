import React from "react";
import { render } from "@testing-library/react-native";

import User from '../';

test('does component render', () => {
  const tree = render(<User />);
  tree;
});