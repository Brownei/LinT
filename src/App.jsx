/* eslint-disable react/prop-types */
import './App.scss';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Pages from './pages/Pages'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';
import { Toaster } from 'sonner';


const App = () => {
    const [queryClient] = useState(() => new QueryClient({
		defaultOptions: {queries: {staleTime: 8 * 60 * 60 * 1000, gcTime: 1000 * 60 * 60 * 24}}
		}))
    
    return (
        <div id="homepage">
            <MantineProvider>
                <QueryClientProvider client={queryClient}>
                    <Pages />
                    <Toaster 
                        toastOptions={{
                            // unstyled: true,
                            style: {display: 'flex', alignItems: 'center', justifyContent: 'center' },
                            classNames: {
                                error: '.error',
                                success: '.success',
                                warning: '.warning',
                                info: '.info',
                            }
                        }}
                        position="bottom-center"
                        richColors
                    />
                    {/* <ReactQueryDevtools initialIsOpen={false}/> */}
                </QueryClientProvider>
            </MantineProvider>
        </div>
    )
}
export default App;




// useEffect(() => {
//     getCurrentUser()
// }, [getCurrentUser])