import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import ListScreen from '../src/screens/list';
import { ClientsCore } from '@clients/ClientsCore';

jest.mock('@clients/ClientsCore', () => {
  return {
    ClientsCore: {
      getInstance: jest.fn().mockReturnThis(),
      getClient: jest.fn().mockReturnThis(),
      get: jest.fn().mockResolvedValue({
        data: [
          {
            createdAt: '2024-06-13T12:34:56.789Z',
            name: 'Test User',
            avatar: 'https://example.com/avatar.png',
            id: '1',
          },
        ],
      }),
    },
  };
});

describe('ListScreen', () => {
  test('fetches and displays data correctly', async () => {
    const { getByText, getByTestId } = render(<ListScreen />);

    // Verificar que el ActivityIndicator se muestra mientras se cargan los datos
    expect(getByTestId('loading-indicator')).toBeTruthy();

    // Esperar a que los datos se obtengan y se rendericen
    await waitFor(() => {
      expect(getByText('Test User')).toBeTruthy();
      expect(getByText('6/13/2024')).toBeTruthy();
    });
  });

  test('displays error message on fetch failure', async () => {
    jest.spyOn(ClientsCore.getInstance().getClient(), 'get').mockRejectedValueOnce(new Error('Network Error'));

    const { getByText } = render(<ListScreen />);

    // Esperar a que el error se maneje y se renderice
    await waitFor(() => {
      expect(getByText('Error al traer el listado')).toBeTruthy();
    });
  });
});
