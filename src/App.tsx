import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

const App = () => (
  <main className="bg-black">
    <RouterProvider router={router} />
  </main>
)

export default App
