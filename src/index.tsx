import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models:{
      transaction:Model,  
  },
  routes(){
    this.namespace = 'api';
    this.get('transactions',()=>{
      return[
        {
          id:1,
          ttile:'Transaction1',
          amount:400,
          type:'deposit',
          category:'Foood',
          createAt:new Date()
        }

      ]
    })
    this.post('/transactions',(schema,request)=>{
        const data = JSON.parse( request.requestBody)

        return data;
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
