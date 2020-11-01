import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Web3ContextProvider from './contexts/Web3Context';
import getWeb3 from './getWeb3';
import RequestOrgan from './contracts/RequestOrgan.json';
import ListOrgan from './components/listOrgan/ListOrgan';

function App() {
  return (
    <Router>
      <Web3ContextProvider>
        <Navbar />
      </Web3ContextProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/inventory">
          <Web3ContextProvider> 
             <ListOrgan />
          </Web3ContextProvider>
        </Route>
        <Route exact path="/inventory/:organ">
          {/* list of organ */}
        </Route>
        <Route exact path="/donate">
          {/* list of organ */}
        </Route>
        <Route path="/organisation">{/* organisation */}</Route>
      </Switch>
    </Router>
  );
}

export default App;

// class App extends Component {
//   state = {storageValue: 0, web3: null, accounts: null, contract: null};

//   componentDidMount = async () => {
//     try {
//       // Get network provider and web3 instance.
//       const web3 = await getWeb3();

//       // Use web3 to get the user's accounts.
//       const accounts = await web3.eth.getAccounts();

//       // Get the contract instance.
//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = SimpleStorageContract.networks[networkId];
//       const instance = new web3.eth.Contract(
//         SimpleStorageContract.abi,
//         deployedNetwork && deployedNetwork.address
//       );

//       // Set web3, accounts, and contract to the state, and then proceed with an
//       // example of interacting with the contract's methods.
//       this.setState({web3, accounts, contract: instance}, this.runExample);
//     } catch (error) {
//       // Catch any errors for any of the above operations.
//       alert(
//         `Failed to load web3, accounts, or contract. Check console for details.`
//       );
//       console.error(error);
//     }
//   };

//   runExample = async () => {
//     const {accounts, contract} = this.state;

//     // Stores a given value, 5 by default.
//     await contract.methods.set(5).send({from: accounts[0]});

//     // Get the value from the contract to prove it worked.
//     const response = await contract.methods.get().call();

//     // Update state with the result.
//     this.setState({storageValue: response});
//   };

//   render() {
//     if (!this.state.web3) {
//       return <div>Loading Web3, accounts, and contract...</div>;
//     }
//     return (
//       <div className="App">
//         <h1>Good to Go!</h1>
//         <p>Your Truffle Box is installed and ready.</p>
//         <h2>Smart Contract Example</h2>
//         <p>
//           If your contracts compiled and migrated successfully, below will show
//           a stored value of 5 (by default).
//         </p>
//         <p>
//           Try changing the value stored on <strong>line 40</strong> of App.js.
//         </p>
//         <div>The stored value is: {this.state.storageValue}</div>
//       </div>
//     );
//   }
// }

// export default App;
