import React from "react";
import { Header } from "semantic-ui-react";
// import "./App.css";
import Amplify from "aws-amplify";

import aws_exports from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// import { withAuthenticator } from "aws-amplify-react";
Amplify.configure(aws_exports);

function App() {
  return (
    <div>
      <button>
        <AmplifySignOut />
      </button>
      <Header as="h1">Hello World!</Header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
