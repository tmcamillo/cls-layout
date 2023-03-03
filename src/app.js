const header = document.querySelector('header');
const dropdownsList = document.querySelectorAll('.dropdown');
const highlightsElements = document.querySelectorAll('.move');

window.addEventListener('scroll', function () {
  toggleHeaderBgColor();
  createParallax();
});

dropdownsList.forEach((container) => {
  container.addEventListener('click', function (element) {
    toggleDropdownState(element);
  });
});

function toggleHeaderBgColor() {
  if (document.documentElement.scrollTop === 0) {
    header.classList.remove('bg-painted');
  } else {
    header.classList.add('bg-painted');
  }
}

function toggleDropdownState(element) {
  const trigger = element.target;

  let isOpen = trigger.getAttribute('aria-expanded');
  let iconDropDown = trigger.querySelector('.fa-solid');

  if (isOpen === 'true') {
    iconDropDown.classList.remove('fa-chevron-up');
    iconDropDown.classList.add('fa-chevron-down');
    trigger.setAttribute('aria-expanded', 'false');
  } else {
    iconDropDown.classList.remove('fa-chevron-down');
    iconDropDown.classList.add('fa-chevron-up');
    trigger.setAttribute('aria-expanded', 'true');
  }
}

function createParallax() {
  highlightsElements.forEach((item) => {
    const position = window.pageYOffset * item.dataset.rate;
    item.style.transform = `translate3d(0px, ${position}px, 0px)`;
  });
}
