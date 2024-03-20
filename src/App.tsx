import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let Hi: string;
  Hi = "hi";

  const returnHi = (str: string, boolean: true): string => {
    return str + boolean; //StrictMode is applied, so it will console twice
  };

  interface UserData<T extends object> {
    employee: T[];
  }
  genreics
  const EmployeeData: UserData<{
    username: string;
    UserID: number;
    Role: string;
  }> = {
    employee: [
      {
        username: "1",
        UserID: 1,
        Role: "string",
      },
      {
        username: "2",
        UserID: 2,
        Role: "string",
      },
      {
        username: "3",
        UserID: 3,
        Role: "string",
      },
      {
        username: "4",
        UserID: 4,
        Role: "string",
      },
    ],
    
  };

  return (
    <>
      {console.log(Hi)}
      {returnHi("hi ", true)}
      {console.log(EmployeeData)}
    </>
  );
}

export default App;
