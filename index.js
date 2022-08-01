// split section
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.choice')
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
)

right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
)
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
)

// toggle menu
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
toggle.addEventListener('click', function() {
    nav.classList.toggle('active')
    $('body').toggleClass('navigation-open')

})

function closeNav() {
  $('#nav').removeClass('active')
  $('body').removeClass('navigation-open')
}

// set width of the animated text to match container
let parent = document.querySelectorAll('.animate-text');
for(let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px"; 
};


// show years of experience
$('#techstack > div').hover(function() {
  let years = $(this).attr('data-time')
  let name = $(this).attr('data-name')
  document.getElementById('exp_years').innerHTML = years
  document.getElementById('techexp_name').innerHTML = name
})


// mail hover
$('#copy-mail').click(function() {
  navigator.clipboard.writeText('e19101990@gmail.com');
  $(this).addClass('copied')
  setTimeout(function() {
    $('#copy-mail.copied').removeClass('copied')
  }, 1500);
})


if (window.matchMedia('(min-width: 979px)').matches) {
  const about = document.querySelector('.about__all');
  const observer1 = new IntersectionObserver(entries => {
    about.classList.toggle( 'animate', entries[0].isIntersecting );
  });
  observer1.observe( about );
}


// adjust menu to sections
const intro = document.querySelector('#intro');
const about2 = document.querySelector('#about');
const split = document.querySelector('#choice');
const contact = document.querySelector('#contact');
const body = document.body
let options = {
  root: document.body,
  rootMargin: '0px',
  threshold: 1.0
}

const observe_intro = new IntersectionObserver(entries => {
  body.classList.toggle( 'intro-section', entries[0].isIntersecting );
}, options);
const observe_about = new IntersectionObserver(entries => {
  body.classList.toggle( 'about-section', entries[0].isIntersecting );
}, options);
const observe_choice = new IntersectionObserver(entries => {
  body.classList.toggle( 'choice-section', entries[0].isIntersecting );
}, options);
const observe_contact = new IntersectionObserver(entries => {
  body.classList.toggle( 'contact-section', entries[0].isIntersecting );
}, options);


observe_intro.observe( intro );
observe_about.observe( about2 );
observe_choice.observe( split );
observe_contact.observe( contact );


if (window.matchMedia('(max-width: 978px)').matches) {
  const education = document.createElement('section');
  education.setAttribute('id','education');
  $(education).append($('.split.right'))
  $('#choice').after($(education))
  
  
  const education_section = document.querySelector('#education');
  const observe_education = new IntersectionObserver(entries => {
    body.classList.toggle( 'education-section', entries[0].isIntersecting );
  }, options);
  observe_education.observe( education_section );
}