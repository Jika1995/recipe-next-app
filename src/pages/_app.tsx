import '../styles/global.css'
import type { AppProps } from 'next/app';
import { queryClient } from '@/utils/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { modals } from '@/components/modals';
import CuisineCategory from "@/components/CuisineCategory";
import Search from "@/components/Search";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Header from "@/components/Header";

const dotenv = require("dotenv")
dotenv.config()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>

        <QueryClientProvider client={queryClient}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'light',
            }}
          >
            <ModalsProvider modals={modals}>
              <Header />
              <Search />
              <CuisineCategory />
              <Component {...pageProps} />
            </ModalsProvider>
          </MantineProvider>
        </QueryClientProvider>

      </Provider>

    </>

  )
}