import '@fontsource/space-mono/700.css';
import './styles/style.scss';

const calculatorTipBtns = document.querySelectorAll<HTMLButtonElement>(
  '.calculator-tip-btns button'
)!;

calculatorTipBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('click');
  });
});
