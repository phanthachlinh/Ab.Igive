/*
*
*Unhcr p2p
*
*/
let enOurEvent = 'It only takes two minutes to set up your fundraising page. Decide what to do and choose in which global campaign you want to get involved in. Pick a name, a photo and just like that, you’ll be ready to start raising money to help people who have been forced to flee.'
window.onload=function(){
  /*
  *mobile header
  */
  let nav = document.querySelector('#main-nav');
  let header = document.querySelector('#header-header>.row>div:nth-child(2)');
  let mobileNav = document.createElement('div');
  let body = document.querySelector('body');
  let langList = []
  if(document.querySelector('.top-bar-section>:nth-child(2) .has-dropdown>ul')!== null)
  langList = [...document.querySelector('.top-bar-section>:nth-child(2) .has-dropdown>ul').children];
  langList.shift();

    let mobileNavItems
  if(nav.querySelector('section>ul'))
    mobileNavItems = [...nav.querySelector('section>ul').children];
  for(let i = 0; i<mobileNavItems.length; i++){

    if(mobileNavItems[i].classList.contains('has-dropdown'))
      mobileNavItems[i].insertAdjacentHTML('beforeEnd','<i class="fa fa-chevron-right"></i>')
  }
  let menuIcon = '<img class="menu__icon-mobile" src="https://libs.iraiser.eu/users/unhcr-crowdfunding/public/assets/icon__menu.svg" />';
  let topBar = document.querySelector('#header-header>div.row>div');
  topBar.insertAdjacentHTML('beforeEnd', menuIcon);
  mobileNav.innerHtml  = mobileNavItems.map(menuItem=>{
    return menuItem.outerHTML
  }).join('');
  mobileNav.innerHtml += '<ul class="lang-mobile">'+langList.map(langItem=>{
    return langItem.outerHTML
  }).join('')+'</ul>';
  body.insertAdjacentHTML('afterBegin',
  `<div id="mobileNav">
    <img class="icon__close" src="https://libs.iraiser.eu/users/unhcr-crowdfunding/public/assets/icon_close.svg" />


    <ul>${mobileNav.innerHtml}</ul></div>`);
    //set event listener for menu icon
    document.querySelector('.menu__icon-mobile').addEventListener('click',()=>{
      document.querySelector('#mobileNav').classList.add('nav-mobile-open')
    });
    document.querySelector('.icon__close').addEventListener('click',()=>{
      document.querySelector('#mobileNav').classList.remove('nav-mobile-open')
    });
    /*
    * 
    */
    [...document.getElementsByTagName('canvas')].map(el=>{
      el.getContext('2d').strokeStyle="#0072BC";
      el.getContext('2d').stroke();
    })
    let ShareLinkComponent = `
      <div class="share-link">
        <h6>${document.getElementById('events-show')? 'Share this campaign':'Share this fundraising page'}</h6>
        <div class="share-link__wrapper">
        <input type="text" value="${window.location}" />
        <button>Copy Link</button>
        </div>
      </div>
    `
    if(document.getElementById('events-show')){
      document.querySelector('#events-show #widget-new-project a').innerText = 'SET UP MY FUNDRAISING PAGE';
        document.querySelector('#widget-new-project').insertAdjacentHTML('afterEnd', ShareLinkComponent);
    }
    if(document.getElementById('projects-show'))
      document.querySelector('.p2p-detail-data>div').insertAdjacentHTML('beforeEnd', ShareLinkComponent);
    if(document.querySelector('.share-link button'))
      document.querySelector('.share-link button').addEventListener('click',ev=>{
        ev.preventDefault();
        document.querySelector('.share-link input').select();
        document.execCommand('copy');
      })
    if(document.getElementById('events-index')){
      document.querySelector('#events-index .first-section h1').innerText = "Start your campaign today."
      document.querySelector('.first-section h1').insertAdjacentHTML('afterEnd',`<p class="subtext">${enOurEvent}</p>`)
    }//has dropdown event addEventListener
    Array.from(document.querySelectorAll('#mobileNav .has-dropdown')).map(el=>{

      el.addEventListener('click',(ev)=>{
        if(document.querySelector('.dropdown-mobile-open'))
          return
        let dropdown = ev.target.querySelector('.dropdown')
        dropdown.classList.add('dropdown-mobile-open');
        setTimeout(()=>{
          dropdown.classList.add('dropdown-mobile-fade-in');
        },50);
    });
    })
    Array.from(document.querySelectorAll('#mobileNav .dropdown .back')).map(el=>{

      el.addEventListener('click',(ev)=>{
        ev.target.parentElement.parentElement.parentElement.classList.remove('dropdown-mobile-fade-in');
        setTimeout(()=>{
          ev.target.parentElement.parentElement.parentElement.classList.remove('dropdown-mobile-open');
        },100);
    });

  })
  if(document.querySelector('#indexs-index')){
    let contactUsComponent = `<section class="content-contact-us">
    <div class="content-contact-us-inner">
<h2>Not sure how to do it?</h2>

<p>Please feel free to contact us, we will be really happy to help you to define your campaign and set up your fundraising page.</p>
<a class="custom__button-main button-blue-border" href="http://unhcrhk.igive.iraiser.eu/contact_forms/new">CONTACT US</a>
</div></section>`
    document.querySelector('.examples-wrapper-inner ul').insertAdjacentHTML('beforeEnd',contactUsComponent)
  }
  //change search placeholder
  [...document.querySelectorAll('[placeholder="Search"]')].map(el=>el.placeholder = 'Search for a campaign')
  if(document.querySelector('#front-search-filter .field-auto-search'))
    document.querySelector('#front-search-filter .field-auto-search').placeholder = 'Search for a global campaign'
  //change see all button text
  if(document.querySelector('.section-home-projects .button'))
    document.querySelector('.section-home-projects .button').innerText = "See all campaign"
  Array.from(document.querySelectorAll('.event-description .teamcount')).map(el=>{
    el.innerHTML =el.innerHTML.replace('projects', 'Pages')
    el.innerHTML =el.innerHTML.replace('project', 'Pages')
  })
  Array.from(document.querySelectorAll('.section-my-event .link-to-user')).map(el=>{
   if(el.childNodes[0].nodeName =='#text'){
  el.childNodes[0].remove()
     el.querySelector('.fa-play').remove()
   }
  })

  Array.from(document.querySelectorAll('.section-home-projects .link-to-user')).map(el=>{
   if(el.childNodes[0].nodeName =='#text'){
  el.childNodes[0].remove()
     el.querySelector('.fa-play').remove()
   }
 });
  Array.from(document.querySelectorAll(' #projects-index #projects .link-to-user')).map(el=>{
   if(el.childNodes[0].nodeName =='#text'){
  el.childNodes[0].remove()
     el.querySelector('.fa-play').remove()
   }
  })
  if(document.getElementById('projects-index')){
    document.querySelector('.first-section h1').innerText = "All fundraising pages"
  }
  if(document.getElementById('projects-show')){
    document.querySelector('.project_boutons_give'). innerText = 'DONATE NOW'
  }
}
