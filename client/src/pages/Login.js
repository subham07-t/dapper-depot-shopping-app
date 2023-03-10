import React from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "../styles/pages/LoginPage.styled";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FORGET THE PASSWORD?</Link>
          <span style={{ fontSize: "12px", marginTop: "5px" }}>
            DON'T HAVE AN ACCOUNT?
            <Link style={{ marginLeft: "5px" }}>SIGN UP</Link>
          </span>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
