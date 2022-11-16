import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store/store'

describe('AppTest', () => {
  test('Show App Component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(screen.getByTestId('test-main')).toBeInTheDocument()
  })
})
