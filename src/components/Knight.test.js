import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import TestBackend from 'react-dnd-test-backend';
import Knight from './Knight'

// const wrapContext = DecoratedComponent => DragDropContext = TestBackend =>
// (class TestContainer extends Component {   render() {     return
// <DecoratedComponent {...this.props}/>   } });
function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(class TestContextContainer extends Component {
    render() {
      return <DecoratedComponent {...this.props}/>;
    }
  });
}

describe('Knight component test', () => {
  let knightWrapper;

  beforeEach(() => {

    let knightContext = wrapInTestContext(Knight);
    /* eslint-disable */
    knightWrapper = shallow(<knightContext/>)
  });
  it('should render Knight correctly', () => {
    expect(knightWrapper).toMatchSnapshot();
  });
});
