import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Search, Button, Table } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <App />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Search', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search>Search</Search>, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Search>Search</Search>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Button', () => {

  const placeholder = undefined;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Button Time</Button>, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Button>Button Time</Button>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('innerHTML checks out', () => {
    const element = shallow(
      <Button onClick={placeholder} className="test">
        Submit
      </Button>
    );
    expect(element.find('.test').text()).toBe('Submit');
  });

});

describe('Table', () => {

  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y', url: 'testString'},
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z'},
    ],
    sortKey: 'TITLE',
    isSortReverse: false,
    onDismiss() {
      console.log("dismissed")
    } 
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table { ...props} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Table { ...props} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items in list', () => {
    const element = shallow(
      <Table { ...props } />
    );

    expect(element.find('.table-row').length).toBe(2)
  });

});