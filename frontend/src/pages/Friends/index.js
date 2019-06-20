import React, { Fragment } from "react"; // Novo elemento importado { Fragment }
import Header from "../../components/Header"; // Importação do Header
import Chat from "../../components/Chat";

const Friends = () => {
  return (
    <Fragment>
      <Header />
      <Chat />
    </Fragment>
  );
};
export default Friends;