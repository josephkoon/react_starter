import React, { Component } from 'react';
import './customers.css'

class Customers extends Component {
  
  //empty customers
  constructor(){
  	super();
  	this.state = {
  		customers:[]
  	}
  }

  //fetch customers from api
  componentDidMount(){
  	fetch('/api/customers')
  		.then(res => res.json())
  		.then(customers => this.setState({customers}))
  }


  //render
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        	{this.state.customers.map(customer => 
				<li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        	)}
        </ul>
      </div>
    );
  }

}

export default Customers;