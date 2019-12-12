/*
*
*Unhcr p2p
*
*/
let pageLanguage;

let enOurEvent = 'It only takes two minutes to set up your fundraising page. Decide what to do and choose in which global campaign you want to get involved in. Pick a name, a photo and just like that, you’ll be ready to start raising money to help people who have been forced to flee.'
window.onload=function(){
  /*
  *mobile header
  */
  let translations = {
    en:{
      homepage:{
        contactUsTitle:'Still not sure what to do?',
        contactUsSubtitle: 'Get in touch. We’ll be happy to help you define your campaign and set up your fundraising page.',
        contactUs: 'CONTACT US'
      },
      eventPage:{
        title:'Start your campaign today.',
        subTitle:'It only takes two minutes to set up your fundraising page. Decide what to do and choose in which global campaign you want to get involved in. Pick a name, a photo and just like that, you’ll be ready to start raising money to help people who have been forced to flee.'
      },
      shared:{
        seeAllCampaigns: 'see all campaigns',
        searchForGlobalCamp: 'Search for a global campaign',
        copyLink: 'Copy link',
        donateNow: 'DONATE NOW',
        shareThisCampaign: ' Share this campaign',
        setupMyFundpage: 'Setup my fundraising page',
        shareThisFundPage: 'Share this fundraising page'
      }
    },
    hk:{
      homepage:{
        contactUsTitle:'還未肯定應該做甚麼？',
        contactUsSubtitle: '與我們聯繫吧。我們樂意幫你為籌款項目找到定位，以及協助你創建籌款專頁。',
        contactUs: '聯絡我們'
      },
      eventPage:{
        title:'今日就建立你的籌款專頁',
        subTitle:'創建你的籌款專頁只需兩分鐘。先決定你想開設的項目類型並選擇其中一個全球項目。為活動起一個名字以及挑選一張相片，就這麼簡單，你就準備好建立籌款專頁，協助被迫逃離家園的難民。'
      },
      shared:{
        seeAllCampaigns: '查看所有籌款活動',
        searchForGlobalCamp: '搜尋全球項目',
        copyLink: '複製連結',
        donateNow: '立即捐款',
        shareThisCampaign: '分享此籌款活動',
        setupMyFundpage: '設置我的籌款頁面',
        shareThisFundPage:'分享此籌款專頁'
      }
    }
  }
  pageLanguage = document.querySelector('html').lang;
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
    //  el.getContext('2d').strokeStyle="#0072BC";
      //el.getContext('2d').stroke();
    })
    let ShareLinkComponent = `
      <div class="share-link">
        <h6>${document.getElementById('events-show')? translations[pageLanguage].shared.shareThisFundPage:translations[pageLanguage].shared.shareThisCampaign}</h6>
        <div class="share-link__wrapper">
        <input type="text" value="${window.location}" />
        <button>${translations[pageLanguage].shared.copyLink}</button>
        </div>
      </div>
    `
    if(document.getElementById('events-show')){
      console.log(translations[pageLanguage].shared)
      console.log(translations[pageLanguage].shared.setupMyFundPage)
        console.log(translations['en'].shared.setupMyFundpage)
      document.querySelector('#events-show #widget-new-project a').innerText = translations[pageLanguage].shared.setupMyFundpage;
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
      document.querySelector('#events-index .first-section h1').innerText = translations[pageLanguage].eventPage.title;
      document.querySelector('.first-section h1').insertAdjacentHTML('afterEnd',`<p class="subtext">${translations[pageLanguage].eventPage.subTitle}</p>`)
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
<h2>${translations[pageLanguage].homepage.contactUsTitle}</h2>

<p>${translations[pageLanguage].homepage.contactUsSubtitle}</p>
<a class="custom__button-main button-blue-border" href="http://unhcrhk.igive.iraiser.eu/contact_forms/new">${translations[pageLanguage].homepage.contactUs}</a>
</div></section>`
    document.querySelector('.examples-wrapper-inner ul').insertAdjacentHTML('beforeEnd',contactUsComponent)
  }
  //change search placeholder
  [...document.querySelectorAll('[placeholder="Search"]')].map(el=>el.placeholder = 'Search for a campaign')
  if(document.querySelector('#front-search-filter .field-auto-search'))
    document.querySelector('#front-search-filter .field-auto-search').placeholder = translations[pageLanguage].shared.searchForGlobalCamp;
  //change see all button text
  if(document.querySelector('.section-home-projects .button'))
    document.querySelector('.section-home-projects .button').innerText = translations[pageLanguage].shared.seeAllCampaigns;
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

  Array.from(document.querySelectorAll('.link-to-user')).map(el=>{
   if(el.childNodes[0].nodeName =='#text'){
  el.childNodes[0].remove();
    if(el.querySelector('.fa-play'))
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
  if(document.getElementById('projects-show')&&window.innerWidth >=768){
    let height = document.querySelector('.project-detail-data').clientHeight
    document.querySelector('.project_boutons_give'). innerText = translations[pageLanguage].shared.donateNow;
    Array.from(document.querySelectorAll('.bxslider .maybevideocontainer')).map(el=>{
      el.style.height = height+'px'
    });

  }
  document.querySelector('footer .left>li:last-child ul').insertAdjacentHTML('afterBegin','<li class="nodropdown footer-link-menu"><a>© UNHCR</a> </li>')
  document.querySelector('footer').insertAdjacentHTML('afterBegin','<img class="iraiser-logo" src="https://donate.unhcr.org/themes/default/img/icons/powered-iraiser.png">')
  document.querySelector('body').insertAdjacentHTML('afterBegin','<div class="mobile-personal-nav"><ul>'+document.querySelector('header ul.left .dropdown').innerHTML+'</ul></div>')
  document.querySelector('#header-header .top-bar .left>li:last-child').addEventListener('click',()=>{
  document.querySelector('.mobile-personal-nav').classList.add('mobile-personal-nav-visible')
})
document.querySelector('.mobile-personal-nav .title.back').addEventListener('click',()=>{
  document.querySelector('.mobile-personal-nav').classList.remove('mobile-personal-nav-visible')
})

}
