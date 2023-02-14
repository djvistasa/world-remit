import React from 'react';
import { mountWithTheme, mockUser } from '../../../utils';

import UsersList from '../';

test('does component render', () => {
  const tree = mountWithTheme(<UsersList users={[mockUser]} />);
  tree;
});

test('does view handle no users render', () => {
  const tree = mountWithTheme(<UsersList users={[]} isInitialFetch={true} />);
  tree;
});
