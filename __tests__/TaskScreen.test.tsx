import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskScreen from '../src/screens/task';
import { setTask } from '@store/app';

const mockStore = configureStore([]);
const initialState = {
  app: {
    userTask: [],
  },
};

describe('TaskScreen', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <TaskScreen />
      </Provider>
    );
  });

  test('should render the initial state correctly', () => {
    const { getByText } = component;

    expect(getByText('Agregar nuevo task')).toBeTruthy();
  });

  test('should add a new task when the "Agregar" button is pressed', async () => {
    const { getByPlaceholderText, getByText } = component;

    fireEvent.press(getByText('Agregar nuevo task'));

    const input = getByPlaceholderText('Ingrese el nuevo task');
    fireEvent.changeText(input, 'Nueva tarea de prueba');

    fireEvent.press(getByText('Agregar'));

    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual(setTask({
        id: expect.any(String),
        description: 'Nueva tarea de prueba',
      }));
    });
  });

  test('should close the modal when "Cancelar" button is pressed', () => {
    const { getByText, queryByPlaceholderText } = component;

    fireEvent.press(getByText('Agregar nuevo task'));
    expect(queryByPlaceholderText('Ingrese el nuevo task')).toBeTruthy();

    fireEvent.press(getByText('Cancelar'));
    expect(queryByPlaceholderText('Ingrese el nuevo task')).toBeNull();
  });
});
