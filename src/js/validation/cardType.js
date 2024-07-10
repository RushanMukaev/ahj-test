export default function cardPaymentSystem(value) {
  let paySystem = 'no-found';
  const a = String(value);
  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(a)) {
    paySystem = 'visa';
  }

  if (/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/.test(a)) {
    paySystem = 'master';
  }

  if (/^220(0|4)[0-9]{12}$/.test(a)) {
    paySystem = 'mir';
  }

  return paySystem;
}
