import React from 'react';
import { create } from 'react-test-renderer';
import YoutubeVideo from '../../../components/blocks/YoutubeVideo';

test('YoutubeVideo renders', () => {
  const tree = create(<YoutubeVideo id="tMgkt9jdjTU" title="Test" />);
  expect(tree).toMatchSnapshot();
});
