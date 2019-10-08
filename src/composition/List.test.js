import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';


describe('List component', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List key="Test title" header="Test message" cards={[
        { id: 'a', title: 'First card', content: 'lorem ipsum' },
        { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        { id: 'c', title: 'Third card', content: 'lorem ipsum' }]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key="testkey" header="Test Header" cards={[
      { id: 'a', title: 'First card', content: 'lorem ipsum' },
      { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      { id: 'c', title: 'Third card', content: 'lorem ipsum' }
    ]
    } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
