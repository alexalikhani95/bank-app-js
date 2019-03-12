describe('Transaction', function () {
  let account;

  beforeEach(function () {
    tran = new Transaction(new Date(2019, 11, 10), 100)
  })

  it('should be initialised with a date', function () {
    tran = new Transaction(new Date(2019, 11, 10))
    expect(tran.date).toEqual('10/12/2019')
  })

  it('should show the amount of a transaction', function () {
    expect(tran.amount).toEqual(100)
  })
})
