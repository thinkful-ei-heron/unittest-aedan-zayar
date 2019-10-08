import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';

describe('Card component', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title="Test title" message="Test message" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Card title="Test Title" message="Test message" />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
});