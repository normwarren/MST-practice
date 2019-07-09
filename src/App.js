import React, { Component } from "react";
import { observer } from "mobx-react";
import Item from "./Item";
import "./App.css";

class App extends Component {
  render() {
    const { invoice } = this.props;

    return (
      <div className="App">
        <h1>{invoice.status()}</h1>
        {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}
        <form
          className="myForm"
          onSubmit={e => {
            e.preventDefault();
            invoice.itemList.add({
              item: this.nameInput.value,
              priority: this.priInput.value,
              status: this.statusInput.value
            });
            e.target.reset();
            this.nameInput.focus();
          }}
        >
          <label htmlFor="">
            ToDo Item
            <input
              type="text"
              ref={input => (this.nameInput = input)}
              id="name"
            />
          </label>
          <label htmlFor="">
            Priority A-C
            <input
              type="text"
              ref={input => (this.priInput = input)}
              id="priority"
            />
          </label>
          <label htmlFor="">
            Notes - Status
            <input
              type="text"
              ref={input => (this.statusInput = input)}
              id="status"
            />
          </label>
          <button className="button" type="submit">
            Add
          </button>
        </form>
        <ul>
          {invoice.itemList.items.map((item, i) => (
            <Item item={item} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

export default observer(App);
