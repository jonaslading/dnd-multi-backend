import * as Module from '../index';

import MultiBackend from '../MultiBackend';

import { HTML5DragTransition, TouchTransition, MouseTransition } from '../Transitions';
import createTransition from '../createTransition';


describe('ReactDnDMultiBackend module', () => {
  test('exports a function to create MultiBackend', () => {
    expect(Module.default).toBeInstanceOf(Function);

    const fakeManager = {getMonitor: jest.fn(), getActions: jest.fn(), getRegistry: jest.fn(), getContext: jest.fn()};
    expect(Module.default({backends: [{backend: () => {}}]})(fakeManager)).toBeInstanceOf(MultiBackend);
    expect(() => { Module.default(fakeManager); }).toThrowError(Error);
  });

  test('exports utils components', () => {
    expect(Module.MultiBackend).toBe(MultiBackend);
    expect(Module.HTML5DragTransition).toBe(HTML5DragTransition);
    expect(Module.TouchTransition).toBe(TouchTransition);
    expect(Module.MouseTransition).toBe(MouseTransition);
    expect(Module.createTransition).toBe(createTransition);
  });
});
