import {
  calculateBill,
  toggleBillError,
  togglePeopleErrorLabel,
  createOutput,
} from './utilities';
import {
  billValueInput,
  noOfPeopleInput,
  tipBtns,
  tipAmountOutput,
  amountPerPersonOutput,
  errorLabel,
} from './elements';
import '@fontsource/space-mono/700.css';
import './styles/style.scss';

/* create  bill function */
function createBill(): void {
  const billValue = Number(billValueInput.value);
  const noOfPeople = Number(noOfPeopleInput.value);

  /* calculate bill */
  const [tipAmount, amoutPerPerson] = calculateBill(
    billValue,
    tipPercent,
    noOfPeople
  );

  /* toggle error label */
  togglePeopleErrorLabel(noOfPeople, errorLabel);

  if (billValue === 0) {
    billValueInput?.setAttribute('data-error', 'true');
  } else {
    billValueInput?.setAttribute('data-error', 'false');
  }

  if (noOfPeople === 0) {
    noOfPeopleInput?.setAttribute('data-error', 'true');
  } else {
    noOfPeopleInput?.setAttribute('data-error', 'false');
  }

  /* tip and amount per person output */
  createOutput(
    tipAmount,
    amoutPerPerson,
    tipAmountOutput,
    amountPerPersonOutput
  );
}

let tipPercent: number;
const listeners: string[] = ['change', 'focus'];

tipBtns.forEach((btn) => {
  btn?.addEventListener('click', () => {
    tipPercent = Number(btn.value);
  });
});

listeners.forEach((listener) => {
  billValueInput.addEventListener(listener, () => {
    toggleBillError(Number(billValueInput.value), billValueInput);
  });
  noOfPeopleInput.addEventListener(listener, () => {
    createBill();
  });
});
