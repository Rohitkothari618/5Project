const reviews = [
  {
    id: 1,
    name: "Buvan bam",
    job: "Youtuber",
    img: "2.jpg",
    review:
      "Bhuvan Avnindra Shankar Bam is an Indian comedian, writer, singer, songwriter, and YouTube personality from Delhi, India. He is known for his comedy channel on YouTube named BB Ki Vines.",
  },
  {
    id: 2,
    name: "Carry minati",
    job: "Roast perosn",
    img: "3.jpg",
    review:
      "Rohit is my best friend. He is Webdevloper and work with his friend Pranjal soni .And they made my youtube website very good and fully loaded website ,i used to upload content on the website ,so i am very happy to thier work. ",
  },
  {
    id: 3,
    name: "Emaiway bantai",
    job: "Rapper",
    img: "4.jpg",
    review:
      "Born as Bilal Shaikh, more commonly known as Emiway Bantai, was born on 13 November 1995. While his hometown is Mumbai, his birthplace was Bengaluru. A few years after he was born, his family shifted to Mumbai. Apart from Bengaluru and Mumbai, his roots also lie in Karnataka",
  },
  {
    id: 4,
    name: "Sandeep maheshawri",
    job: "Motivation speaker",
    img: "5.jpg",
    review:
      "Vikrant Rona is a 2022 Indian Kannada-language action-adventure thriller film written and directed by Anup Bhandari. It stars Sudeep as the titular character alongside Nirup Bhandari,",
  },
];

const img = document.getElementById("image");
const person = document.getElementById("Name");
const job = document.getElementById("job");
const info = document.getElementById("info");
console.log(img, person, job, info);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const randombutton = document.querySelector(".btn2");
console.log(prevButton, nextButton, randombutton);

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showname(currentItem);
});

function showname(currentname) {
  let item = reviews[currentname];
  img.src = item.img;
  person.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.review;
}

nextButton.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showname(currentItem);
});
prevButton.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showname(currentItem);
});

randombutton.addEventListener("click", () => {
  currentItem = randomNumber();
  showname(currentItem);
});

function randomNumber() {
  return Math.floor(Math.random() * reviews.length);
}
