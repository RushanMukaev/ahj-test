import cardPaymentSystem from '../js/validation/cardType';

test.each([
  ['mir for 2********', '2200123456789010', 'mir'],
  ['visa for 4********', '4000001234588889', 'visa'],
  ['master for 5********', '5467929858067895', 'master'],
  ['no-found for 1********', '1712349876543219', 'no-found'],
  ['no-found for 7********', '7712349876543219', 'no-found'],
  ['no-found for 8********', '8712349876543219', 'no-found'],
  ['no-found for 9*********', '975709876543219', 'no-found'],
])('it should be %s', (_, input, expected) => {
  expect(cardPaymentSystem(input)).toBe(expected);
});