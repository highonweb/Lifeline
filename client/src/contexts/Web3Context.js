import React,{createContext,useState} from 'react';
import RequestOrgan from '../contracts/RequestOrgan.json';
import getWeb3 from '../getWeb3';

export const Web3Context = createContext();

async function Web3ContextProvider(props) {
    const [web3, setweb3] = useState({});
    const [accts, setaccts] = useState({});
    const [ins, setins] = useState({});

    const web3Instance = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = RequestOrgan.networks[networkId];
    const instance = new web3.eth.Contract(
        RequestOrgan.abi,
      deployedNetwork && deployedNetwork.address
    );

    setins(instance);
    setweb3(web3Instance);
    setaccts(accounts);

    return (
       <Web3Context.Provider value ={{web3,accts,ins}} >
           {props.chidren}
       </Web3Context.Provider>
    )
}

export default Web3ContextProvider
