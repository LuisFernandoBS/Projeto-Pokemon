import { Container } from "react-bootstrap";

import FormLogin from "./components/FormLogin";
import styles from "././styles/page.module.css";
import "./styles/login/style.css";


export default function Home() {
  const classMain = `background__login flex-column justify-content-center ${styles.main}`;

  const redirecionarPage = (ref: string) => {
    window.location.href = ref;
  };

  return (
    <main className={classMain}>
      <Container fluid>
          <FormLogin />
      </Container>
    </main>
  );
}
