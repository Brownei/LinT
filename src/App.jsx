/* eslint-disable react/prop-types */
import './App.scss';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Pages from './pages/Pages'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner';
import { GlobalProvider } from './context/GlobalContext';


const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 8 * 60 * 60 * 1000, gcTime: 1000 * 60 * 60 * 24 } }
  })


  return (
    <div id="homepage">
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalProvider>
            <Pages />
            <Toaster
              position="bottom-center"
              toastOptions={{
                duration: 3000,
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "Inter, sans-serif",
                  fontSize: '14px',
                  fontWeight: '400',
                  padding: '10px',
                  textAlign: 'center'
                },
              }}
            />
          </GlobalProvider>
        </QueryClientProvider>
      </MantineProvider>
    </div>
  )
}
export default App;

