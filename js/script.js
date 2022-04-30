"use-strict";

const btn = document.querySelector(".advice-btn");
const quote = document.querySelector(".advice-quote");
const adviceNumber = document.querySelector(".advice-number");

const roll = async () => {
  try {
    const number = Math.floor(Math.random() * 200 + 1);
    const res = await fetch(`https://api.adviceslip.com/advice/${number}`);
    const data = await res.json();
    // console.log(data);

    const {
      slip: { id, advice },
    } = data;

    adviceNumber.textContent = `Advice #${id}`;
    quote.textContent = `"${advice}"`;
  } catch (err) {
    // console.log(err);
  }
};

roll();

btn.addEventListener("click", roll);
