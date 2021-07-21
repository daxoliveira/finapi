## FinAPI - A simple mock-up of a bank account

### Requirements

The user should be able to:
- [x] Create an account
- [x] Request account statement
- [x] Deposit money
- [x] Withdraw money
- [x] Access an account statement filtered by date
- [] Update account information
- [] Retrieve account information
- [] Delete an account

### Business Rules

The API should not be allowed to:
- [x] Create an account with existing CPF
- [x] Request an account statement from a non-existing account
- [x] Make a deposit in a non-existing account
- [x] Withdraw with a negative balance
- [x] Withdraw from a non-existing account
- [] Delete a non-existing account