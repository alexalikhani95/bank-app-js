describe('Statement', function () {
  let statement1

  beforeEach(function () {
    statement1 = new Statement()
  })

  it('is initialized with transaction log', function () {
  expect(statement1.transactionsLog).toEqual([])
 })
})
