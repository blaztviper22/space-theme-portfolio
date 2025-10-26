import { RouterProvider } from "react-router";
import { router } from "./Routes";
import { Toaster } from "react-hot-toast";



function App() {

  return (
    <>
      <RouterProvider router={router} />
       <Toaster 
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Default options
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
          // Success
          success: {
            duration: 3000,
            style: {
              background: '#10b981',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#10b981',
            },
          },
          // Error
          error: {
            duration: 4000,
            style: {
              background: '#ef4444',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#ef4444',
            },
          },
        }}
      />
    </>
  )
}

export default App
