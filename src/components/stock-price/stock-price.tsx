import { Component, h, State, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'my-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})

export class StockPrice {
  render() {
    return [
      <form>
        <input id='stock-symbol'/>
        <button type='submit'>Fetch</button>
      </form>,
      <div>
        <strong>Price:{0}</strong>
      </div>
    ];
  }
}