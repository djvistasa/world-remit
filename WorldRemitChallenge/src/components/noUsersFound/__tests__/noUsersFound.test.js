import React from 'react';
import { mountWithTheme } from '../../../utils/jest';

import NoUsersFound from '../index';

test('does component render', () => {
  const tree = mountWithTheme(<NoUsersFound />);
  tree;
});
