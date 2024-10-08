import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/Container/Container";
import SearchForm from "@/components/SearchForm/SearchForm";

export default function Home() {
  return (
    <Container>
      <SearchForm />
    </Container>
  );
}
