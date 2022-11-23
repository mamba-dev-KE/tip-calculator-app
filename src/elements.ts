export const billValueInput = document.querySelector<HTMLInputElement>(
  '.calculator-bill input'
)!;
export const noOfPeopleInput = document.querySelector<HTMLInputElement>(
  '.calculator-people input'
)!;
export const tipBtns = document.querySelectorAll<HTMLButtonElement>(
  '.calculator-tip-btns button'
)!;
export const tipAmountOutput = document.querySelectorAll<HTMLParagraphElement>(
  '.calculator-output p'
)[0]!;
export const amountPerPersonOutput =
  document.querySelectorAll<HTMLParagraphElement>('.calculator-output p')[1]!;
export const errorLabel = document.querySelector<HTMLLabelElement>(
  '.calculator-people-labels label:last-child'
)!;
