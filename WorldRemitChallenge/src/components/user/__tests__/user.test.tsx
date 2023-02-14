import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { mountWithTheme, mockUser } from '../../../utils';

import User from '../index';

test('does component render', () => {
  const tree = mountWithTheme(
    <User
      user={mockUser}
      onBlockStatusChange={() => false}
      onFollowStatusChange={() => false}
      testId=""
    />,
  );
  tree;
});

test('does user item expand to reveal buttons', () => {
  const { getByTestId } = mountWithTheme(
    <User
      user={mockUser}
      onBlockStatusChange={() => false}
      onFollowStatusChange={() => false}
      testId="user-item-0"
    />,
  );
  const userItem = getByTestId('user-item-0');

  expect(userItem).toBeTruthy();

  fireEvent.press(userItem);

  const expandedSection = getByTestId('user-actions');

  expect(expandedSection).toBeTruthy();
});

test('is user able to follow', () => {
  const onFollow = jest.fn();
  mockUser.is_following = true;
  const { getByTestId } = mountWithTheme(
    <User
      user={mockUser}
      onBlockStatusChange={() => false}
      onFollowStatusChange={onFollow}
      testId="user-item-0"
    />,
  );
  const userItem = getByTestId('user-item-0');

  expect(userItem).toBeTruthy();

  fireEvent.press(userItem);

  const expandedSection = getByTestId('user-actions');

  expect(expandedSection).toBeTruthy();

  const followButton = getByTestId('follow-button');

  expect(followButton).toBeTruthy();

  fireEvent.press(followButton);

  expect(onFollow).toHaveBeenCalledTimes(1);
});

test('is user able to block', () => {
  const onBlock = jest.fn();
  const { getByTestId } = mountWithTheme(
    <User
      user={mockUser}
      onBlockStatusChange={onBlock}
      onFollowStatusChange={() => false}
      testId="user-item-0"
    />,
  );
  const userItem = getByTestId('user-item-0');

  expect(userItem).toBeTruthy();

  fireEvent.press(userItem);

  const expandedSection = getByTestId('user-actions');

  expect(expandedSection).toBeTruthy();

  const followButton = getByTestId('block-button');

  expect(followButton).toBeTruthy();

  fireEvent.press(followButton);

  expect(onBlock).toHaveBeenCalledTimes(1);
});
