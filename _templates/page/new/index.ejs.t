---
to: src/pages/<%=Name%>.tsx
sh: yarn eslint --fix src/pages/<%=Name%>.tsx
---
import type { NextPage } from "next";
import Head from "next/head";

const <%=Name%> : NextPage = () => {
  return (
  <>
    <Head>
        <title>
        <%=Name%>
        </title>
    </Head>
  </>
  )
};

export default <%=Name%>