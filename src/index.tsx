import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "freelance de website",
          category: "dev",
          type:'deposit',
          amount: 6000,
          createdAt: new Date("2021-02-21 09:00:00"),
        },
        {
          id: 2,
          title: "aluguel",
          category: "casa",
          type:'withdraw',
          amount: 1100,
          createdAt: new Date("2021-03-14 11:00:00"),
        },
        {
          id: 3,
          title: "Mercado",
          category: "Alimentação",
          type:'withdraw',
          amount: 800,
          createdAt: new Date("2021-03-14 18:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
