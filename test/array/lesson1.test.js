import telComb from '../../code/array/lesson1'

test('telComb:23', () => {
  expect(telComb('234')).toEqual([
    'adg', 'adh', 'adi',
    'aeg', 'aeh', 'aei',
    'afg', 'afh', 'afi',
    'bdg', 'bdh', 'bdi',
    'beg', 'beh', 'bei',
    'bfg', 'bfh', 'bfi',
    'cdg', 'cdh', 'cdi',
    'ceg', 'ceh', 'cei',
    'cfg', 'cfh', 'cfi'
  ])
})
