/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import "./App.css";
//import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "F1",
    name: "Formula 1",
    isFollowing: true
  },
  {
    userName: "Batman",
    name: "Batiman",
    isFollowing: false
  },
  {
    userName: "SChecoPerez",
    name: "ChecoBB",
    isFollowing: true
  },
];
export function App() {
  //const [name, setName] = useState('midudev')
  //Pasar funciones
  //const formatUserName = (userName) => "@" + userName;
  return (
    //<></> se puede poner varios comentes del mismo segui dos
    <section className="App">
            {/*<TwitterFollowCard
        formatUserName={formatUserName}
        userName="F1"
        initialIsFollowing
      >
        Formula1
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName="Batman">
        Batman
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName="SChecoPerez">
        ChecoBB
      </TwitterFollowCard>
      {/*<button onClick={()=> setName('david')}>
        Cambio nombre
      </button>*/}
      {
      users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })
      }
    </section>
  );
}
