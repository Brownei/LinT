import './App.scss';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Pages from './pages/Pages'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';


const App = () => {
    const [queryClient] = useState(() => new QueryClient({
		defaultOptions: {queries: {staleTime: 1000 * 60 * 5, gcTime: 1000 * 60 * 5}}
    }))
    
    return (
        <div id="homepage">
            <MantineProvider>
                <QueryClientProvider client={queryClient}>
                    <Pages />
                    <ReactQueryDevtools initialIsOpen={false}/>
                </QueryClientProvider>
            </MantineProvider>
        </div>
    )
}
export default App;
