# Project Description

**Deployed Frontend URL:** [https://program-da8y01-1-deploy1.vercel.app/](https://program-da8y01-1-deploy1.vercel.app/)

**Solana Program ID:** CUGjLcbsRdVcathaUNNSPfzXpGder7pRkMgADzsHji29

## Project Overview

### Description
This is a Solana blockchain smart contract with the basic features of an auction. It has functions to initialize an auction, place a bid for an active auction, and end/finalize/terminate an auction.

The solana program or smart contract has the basic validations for interact with an auction, to place a bid on the auction, and to finalize it. To interact with an auction the auction must be active, the bid amount to place on an auction must be greater than the highest bid placed, and only the owner of the auction can end/finalize/terminate it.

### Key Features
- **Initialize auction**: Initialize a new auction
- **Place bid**: Place a new bid for an auction
- **End auction**: End an auction
  
### How to Use the dApp
1. **Connect Wallet** - Connect your Solana wallet
2. **Initialize auction** - Input the start bid and click "Initialize" to create the new auction
3. **Place bid** - Input auction id and bid, then click "Place bid" to place the new bid for the auction
4. **End auction** - Input auction id and click "End auction" to end an auction

## Program Architecture
The Auctions on-chain dApp uses a simple architecture with one main account type and three core instructions (initialize, place bid and end auction).

### PDA Usage
The program uses Program Derived Addresses to create deterministic auction accounts for owner.

**PDAs Used:**
- ToDo

### Program Instructions
**Instructions Implemented:**
- **Initialize**: Creates a new auction for the signer user with the start bid provided
- **Place bid**: Places a new bid for the auction
- **End auction**: Ends the auction setting it's `is_active` value to false

### Account Structure
```rust
#[account]
pub struct Auction {
    pub owner: Pubkey,
    pub highest_bid: u64,
    pub highest_bidder: Pubkey,
    pub is_active: bool,
}
```

## Testing

### Test Coverage
Basic test suite covering used instructions to ensure program security and reliability.

**Happy Path Tests:**
- **Initialize auction**: Successfully creates a new auction with correct initial values
- **Place bid**: Properly places bid for the auction, and updates necessary properties
- **End auction**: Ends auction updating the `is_active` property

**Unhappy Path Tests:**
- ToDo

### Running Tests
```bash
yarn install    # install dependencies
anchor test     # run tests
```

### Additional Notes for Evaluators

This is a initial version for the Auctions on-chain dApp. The biggest challenges were dealing with PDAs and write some use cases tests.