import './App.scss';
import Nav from './components/Nav/Nav'
import Pages from './pages/Pages'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';


const App = () => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {queries: {staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 20}}
    }))
    return (
        <div id="homepage">
            <QueryClientProvider client={queryClient}>
                <div className="container">
                    <Nav />
                    <Pages />
                </div>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </div>
    )
}
export default App;