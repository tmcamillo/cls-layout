const header = document.querySelector('header');
const dropdownsTriggers = document.querySelectorAll('.dropdown > button');
const dropdownsList = document.querySelectorAll('.dropdown');

window.addEventListener('scroll', function () {
  paintedHeader();
  createParallax();
});

dropdownsList.forEach((container) => {
  container.addEventListener('click', function (element) {
    toggleDropdownState(element);
  });
});

function paintedHeader() {
  if (document.documentElement.scrollTop == 0) {
    header.classList.remove('bg-painted');
    toggleTriggersClass('remove');
  } else {
    header.classList.add('bg-painted');
    toggleTriggersClass('add');
  }
}

function toggleTriggersClass(action) {
  dropdownsTriggers.forEach((trigger) => {
    action === 'remove'
      ? trigger.classList.remove('bg-painted')
      : trigger.classList.add('bg-painted');
  });
}

function toggleDropdownState(element) {
  const trigger = element.target;
  const menu = trigger.parentNode.querySelector('.menu__itemDropdown');

  let isOpen = trigger.getAttribute('aria-expanded');
  let iconDropDown = trigger.querySelector('.fa-solid');

  if (isOpen === 'true') {
    iconDropDown.classList.remove('fa-chevron-up');
    iconDropDown.classList.add('fa-chevron-down');
    trigger.setAttribute('aria-expanded', 'false');
    menu.style.visibility = 'hidden';
    menu.style.opacity = '0';
  } else {
    iconDropDown.classList.remove('fa-chevron-down');
    iconDropDown.classList.add('fa-chevron-up');
    trigger.setAttribute('aria-expanded', 'true');
    menu.style.visibility = 'visible';
    menu.style.opacity = '1';
  }
}

function createParallax() {
  const target = document.querySelectorAll(
    '.highlight__text, .highlight__button'
  );
  target.forEach((_item, index) => {
    const pos = window.pageYOffset * target[index].dataset.rate;
    target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
  });
}
