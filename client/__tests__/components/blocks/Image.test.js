import React from 'react';
import { create } from 'react-test-renderer';
import Image from '../../../components/blocks/Image';

test('Image renders', () => {
  const tree = create(
    <Image
      alt="Alt"
      naturalHeight={9}
      naturalWidth={16}
      src="www.test.com"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
