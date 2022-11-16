import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

const App = () => (
  <main className="bg-black" data-testid="test-main">
    <RouterProvider router={router} />
  </main>
)

export default App
