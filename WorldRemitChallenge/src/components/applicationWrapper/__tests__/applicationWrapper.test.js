import React from 'react';
import { mountWithTheme } from '../../../utils/jest';

import ApplicationWrapper from '../';

test('does component render', () => {
  const tree = mountWithTheme(<ApplicationWrapper />);
  tree;
});
