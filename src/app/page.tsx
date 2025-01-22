'use client'

import { Provider } from "react-redux";
import { store } from '@/store/store'


import Search from "@/components/Search/Search";
import Container from "@/components/Container/Container";
import Content from '@/ui/Content/Content'

export default function Home() {
  return (
    <Provider store={store}>
      <Container>
        <Content>
          <Search />
        </Content>
      </Container>
    </Provider>
  );
}
