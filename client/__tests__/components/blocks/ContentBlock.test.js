import React from 'react';
import { create } from 'react-test-renderer';
import ContentBlock from '../../../components/blocks/ContentBlock';

test('ContentBlock renders', () => {
  const tree = create(<ContentBlock heading={<h1>Test</h1>} />).toJSON();
  expect(tree).toMatchSnapshot();
});
