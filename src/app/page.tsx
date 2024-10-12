'use client'

import { Provider } from "react-redux";
import { store } from '@/store/store'

import SearchBlock from "@/components/SearchBlock/SearchBlock";

export default function Home() {
  return (
    <Provider store={store}>
      <SearchBlock />
    </Provider>
  );
}
