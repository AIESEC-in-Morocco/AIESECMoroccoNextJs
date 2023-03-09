---
to: src/pages/<%=Name%>.tsx
sh: yarn eslint --fix src/pages/<%=Name%>.tsx
---
import type { NextPage } from "next";
import Head from "next/head";
import {  Container } from "~/components";

const <%=Name%> : NextPage = () => {
  return (
  <Container>
    <Head>
        <title>
        <%=Name%>
        </title>
    </Head>
  </Container>
  )
};

export default <%=Name%>