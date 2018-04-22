HealthyCoin
=======

### **Ethereum** based smart contract application implementing a health based reward system. **WIP**


## How to build
```sh
  yarn # or yarn install
  yarn compile
  yarn dev
```

> `yarn compile` compiles the smart contract and yields an json version ready to use with `web3` in `ethereum/build`

## How to use

>In order to use the application, you must deploy the contract in your favourite ethereum network and you have to have an account in that to be able to make a deployment (that is trivial using truffle with ganache). 

Once deployed, the deploying account will have '_Owner_' role, and you will be able to add more accounts and play around with the application and the contract.

## Contract model

The contract class diagram is as follows. You can check the implemented roles (which are Owner, Admin, Doctor and Patient sorted by granted privileges).

![Class diagram](https://i.imgur.com/vcjfmM8.png)
