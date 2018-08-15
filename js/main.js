/*
* This javascript file is made for accordion functionality
*
* - Table of contents
* -
* - Variables
* - Functions
* - Event Listeners
*/



(function () {

  // =========================== Variables ==============================
  var accordionTogglers = document.querySelectorAll('.js-accordion-toggler'),
      config = {
        'accordionActiveClass': 'accordion__item--active'
      };



  // =========================== Functions ==============================
  function toggleAccordion(toggler) {
    var prevAccordion = document.querySelectorAll( ('.' + config.accordionActiveClass) )[0],
        currentItem = toggler.closest('.js-accordion-item'),
        currentValue = currentItem.querySelector('.js-accordion-value'),
        activeClass = config.accordionActiveClass;

    // Make previous active item inactive
    if(prevAccordion && prevAccordion !== currentItem ) {
      prevAccordion.classList.remove(activeClass);
      prevAccordion.querySelector('.js-accordion-value').style.maxHeight = '0px';
    }

    currentItem.classList.toggle(activeClass);

    // Change item height
    if( currentItem.classList.contains(activeClass) ) {
      currentValue.style.maxHeight = currentValue.scrollHeight + 'px';
    } else {
      currentValue.style.maxHeight = '0px';
    }
  }



  // ======================== Event Listeners ===========================
  for(var togglerIndex = 0; togglerIndex < accordionTogglers.length; togglerIndex++) {

    accordionTogglers[togglerIndex].addEventListener('click', function () {
      toggleAccordion(this);
    });

  }

})();
