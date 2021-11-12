'use strict';

const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('navi-list');
const subnavDaily = document.getElementById('subnav-daily');
const subnavSports = document.getElementById('subnav-sports');
const daily = document.querySelector('.daily');
const sports = document.querySelector('.sports');
const hamburgerIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times');

toggleButton.addEventListener('click', () => {
  naviList.classList.toggle('active');
  document.getElementById('nav-icon3').classList.toggle('open');
});

daily.addEventListener('click', () => {
  subnavDaily.classList.toggle('active');
});

sports.addEventListener('click', () => {
  subnavSports.classList.toggle('active');
});

//////////
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
