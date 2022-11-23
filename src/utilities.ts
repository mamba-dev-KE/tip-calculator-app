export function calculateBill(
  value: number,
  tipPercent: number,
  noOfPeople: number
): number[] {
  const tipAmount = ((value / noOfPeople) * tipPercent) / 100;
  const amoutPerPerson = value / noOfPeople + tipAmount;
  return [Number(tipAmount.toFixed(2)), Number(amoutPerPerson.toFixed(2))];
}

export function toggleBillError(bill: number, input: HTMLInputElement): void {
  if (bill >= 1) {
    input?.setAttribute('data-error', 'false');
  } else {
    input?.setAttribute('data-error', 'true');
  }
}

export function togglePeopleErrorLabel(
  number: number,
  label: HTMLLabelElement
): void {
  if (number < 1) {
    label?.classList.add('error');
    label.textContent = `Can't be zero`;
  } else {
    label.textContent = ``;
  }
}

export function createOutput(
  tip: number,
  amount: number,
  tipOutputEl: HTMLParagraphElement,
  amountOutputEl: HTMLParagraphElement
): void {
  if (isFinite(Number(tip)) && isFinite(Number(amount))) {
    tipOutputEl.textContent = `$${tip}`;
    amountOutputEl.textContent = `$${amount}`;
  } else {
    tipOutputEl.textContent = `$0.00`;
    amountOutputEl.textContent = `$0.00`;
  }
}
