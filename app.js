const question = document.querySelectorAll('[data-question]');

question.forEach(question => {
  question.addEventListener('click', (e) => {
    e.target.classList.toggle('bold');
    e.target.nextElementSibling.classList.toggle('visible');
    e.target.parentElement.parentElement.lastElementChild.classList.toggle('rotate')
  })
})
