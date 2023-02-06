import React from "react";
import { render } from "@testing-library/react-native";

import ApplicationWrapper from '../';

test('does component render', () => {
  const tree = render(<ApplicationWrapper />);
  tree;
});