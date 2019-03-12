
describe('Bank', function () {
  let account;

  beforeEach(function () {
    account = new Bank
  })


it('is initialised with a balance of 0', function () {
  expect(account.balance).toEqual(0)
 })

 it('should be able to make a deposit', function () {
   account.deposit(100.00)
   expect(account.balance).toEqual(100.00)
 })

 it('should be able to make a withdrawal', function () {
   account.deposit(100.00)
   account.withdraw(25.00)
   expect(account.balance).toEqual(75.00)
 })
})
