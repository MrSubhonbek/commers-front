import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query/build/lib/QueryClientProvider'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persister, store } from '@/store/store'

import '@/styles/globals.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persister}></PersistGate>
				<Component {...pageProps} />
			</Provider>
		</QueryClientProvider>
	)
}
