import { factory } from './factory';

let count: (() => number) = factory(0, 1);

function update_count_and_reset_counter() : void {
  const start_at_value: number = Number((document.getElementById('start_at') as HTMLInputElement)?.value);
  const step_value: number = Number((document.getElementById('step') as HTMLInputElement)?.value);

  count = factory(start_at_value, step_value);
  update_count();
}

const start_at_control: HTMLInputElement | null = document.getElementById('start_at') as HTMLInputElement;

const step_control: HTMLInputElement | null = document.getElementById('step') as HTMLInputElement;

start_at_control?.addEventListener('change', update_count_and_reset_counter);

step_control?.addEventListener('change', update_count_and_reset_counter);

const count_button: HTMLButtonElement | null = document.querySelector('.count_button') as HTMLButtonElement;

const current_count: HTMLSpanElement | null = document.querySelector('.current_count') as HTMLSpanElement;

function update_count(): void {
  if (current_count) {
    const currentCount: number = count();
    current_count.innerText = currentCount.toString();
  }
}

update_count();

if (count_button) {
  count_button.addEventListener('click', update_count);
}
