import '@fontsource/space-mono/700.css';
import './styles/style.scss';

const tipBtns = document.querySelectorAll<HTMLButtonElement>(
  '.calculator-tip-btns button'
)!;
const noOfPeopleInput = document.querySelector('.calculator-people input');
const tipAmountOutput = document.querySelectorAll<HTMLParagraphElement>(
  '.calculator-output p'
)[0]!;
const amountPerPersonOutput = document.querySelectorAll<HTMLParagraphElement>(
  '.calculator-output p'
)[1]!;

function calculateBill(value: number, tipPercent: number, noOfPeople: number) {
  const tipAmount = ((value / noOfPeople) * tipPercent) / 100;
  const amoutPerPerson = value / noOfPeople + tipAmount;
  return [tipAmount.toFixed(2), amoutPerPerson.toFixed(2)];
}

let tipPercent: number;

tipBtns.forEach((btn) => {
  btn?.addEventListener('click', () => {
    tipPercent = Number(btn.value);
  });
});

noOfPeopleInput?.addEventListener('keyup', () => {
  const billValue = Number(
    document.querySelector<HTMLInputElement>('.calculator-bill input')!.value
  );
  const noOfPeople = Number(
    document.querySelector<HTMLInputElement>('.calculator-people input')!.value
  );

  const [tipAmount, amoutPerPerson] = calculateBill(
    billValue,
    tipPercent,
    noOfPeople
  );

  if (tipAmount && amoutPerPerson) {
    tipAmountOutput.textContent = `$${tipAmount}`;
    amountPerPersonOutput.textContent = `$${amoutPerPerson}`;
  }
});
