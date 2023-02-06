import React from "react";
import { render } from "@testing-library/react-native";

import UsersList from '../';

test('does component render', () => {
  const tree = render(<UsersList />);
  tree;
});