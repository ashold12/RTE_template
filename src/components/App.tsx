import * as React from "react"

export interface appProps {
  userName: string;
  message: string;
}

const App = (props: appProps) => {
  return(
    <h1>
      Hello {props.userName}! This is {props.message}
    </h1>
  )
}

export default App;

