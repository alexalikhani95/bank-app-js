
describe('Bank', function () {
  let account = new Bank


it('is initialised with a balance of 0', function () {
  expect(account.balance).toEqual(0)
 })

 it('should be able to make a deposit', function () {
   account.deposit(100.00)
   expect(account.balance).toEqual(100.00)
 })
})
