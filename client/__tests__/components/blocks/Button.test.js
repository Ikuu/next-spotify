import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '../../../components/blocks/Button';

test('Button renders', () => {
  const tree = create(<Button text="Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders with aria-label', () => {
  const tree = create(<Button ariaLabel="Different text" text="Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button handles click', () => {
  const mockOnClick = jest.fn();
  const wrapper = shallow(<Button text="Test" onClick={mockOnClick} />);
  wrapper.find('button').simulate('click');
  expect(mockOnClick).toBeCalled();
});
