declare var global: any
import { JSDOM } from 'jsdom'
import AbUi_Header from './AbUi_Header'
import { TEST_TRANSLATIONS } from '../../mocks'
let abHeaderObj: any
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
console.warn = jest.fn((errmsg: string) => {
	throw errmsg
})
describe('AbUi_Header', () => {

	describe('AbUi_Header contructor', () => {

		it('should throw .top-bar-section>:nth-child(2) .has-dropdown>ul is undefined', () => {
			global.document.innerHTML = new JSDOM(``).serialize()
			expect(() => { new AbUi_Header(TEST_TRANSLATIONS, 'en') }).toThrow('.top-bar-section>:nth-child(2) .has-dropdown>ul not defined')
		})

		it('should not throw', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
          <div class="top-bar-section">
            <div></div>
            <div>
              <div class="has-dropdown">
                <ul></ul>
              </div>
            </div>
          </div>
      `).serialize()

			expect(() => { new AbUi_Header(TEST_TRANSLATIONS, 'en') }).not.toThrow()
		})

	})

	describe('_setMobileNavItems', () => {
		it('should fail no mobile nav items in dom', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
          <section class="top-bar-section">
                <a class="button left" href="/users/sign_in">Sign in</a>
                <ul class="right">
                  <li class="has-dropdown not-click">
                    <a href="#">
                      English
                    </a>
                    <ul class="dropdown"><li class="title back js-generated"><h5><a href="javascript:void(0)">Back</a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="#">
                      English
                    </a></li>
                          <li>
                            <a href="/set_language/hk" class="highlighted">
                              香港粵語
                            </a>
                          </li>
                    </ul>
                  </li>
                </ul>
            </section>`).serialize();
			abHeaderObj = new AbUi_Header(TEST_TRANSLATIONS, 'en')
			expect(() => { abHeaderObj._setMobileNavItems() }).toThrow('no mobile menu items')
		})
	})
	describe('_renderMobileNavigation', () => {

		it('should fail no topbar wrapper defined', () => {
			/**
			* removed <div class="small-12 medium-12 large-4 columns"> in #header-header>div.row>div.small-12.medium-12.large-4.columns
			**/
			global.document.documentElement.innerHTML = new JSDOM(`
	      <header class="main-header">
	  <section id="header-header">
	    <div class="row">


	      <div class="small-12 medium-12 large-8 columns">
	        <div class="rows header-spacer">
	          <div class="small-12 medium-push-6 medium-6 large-reset-order large-6 columns">
	            <form accept-charset="UTF-8" action="/search" class="navbar-search" method="post"><div style="display:none"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Lkc1Va/CnM3zLH03JJEJK7TZJExUIsLNublkYFP/Pbw=" /></div>
	              <div class="row">
	                <div class="search-query">
	                  <input class="icon-search field-auto-search"
	                         name="search" type="text"
	                         data-old-search-value=""
	                         value=""
	                         placeholder="Search" />
	                </div>
	              </div>
	</form>          </div>

	          <div class="small-12 medium-pull-6 medium-6 large-reset-order large-6 columns">

	            <nav class="top-bar left" data-topbar role="navigation">

	              <section class="top-bar-section">
	                  <a class="button left" href="/users/sign_in">Sign in</a>
	                  <ul class="right">
	                    <li class="has-dropdown not-click">
	                      <a href="#">
	                        English
	                      </a>
	                      <ul class="dropdown">
	                            <li>
	                              <a href="/set_language/hk"
	                                 class="highlighted">
	                                香港粵語
	                              </a>
	                            </li>
	                      </ul>
	                    </li>
	                  </ul>
	              </section>
	            </nav>
	          </div>
	        </div>
	      </div>
	    </div>
	  </section>
	  <!-- navigation -->
	    <nav class="top-bar" data-topbar id="main-nav" role="navigation">
	      <ul class="title-area">
	        <!-- Title Area -->
	        <li class="name">
	        </li>
	        <!-- Remove the class "menu-icon" to get rid of menu icon. Take
	             out "Menu" to just have icon alone -->
	        <li class="toggle-topbar menu-icon">
	          <a href="#"><span>Menu</span></a>
	        </li>
	      </ul>
	      <section class="top-bar-section">
	        <ul class="center">
					<li class="nodropdown">
						<a href="https://mycause.unhcr.org/pages/about-en">ABOUT UNHCR</a>
					</li>
					<li class="nodropdown">
						<a href="http://unhcrhk.igive.iraiser.eu/events">START A CAMPAIGN</a>
					</li>
					<li class="nodropdown">
						<a href="https://mycause.unhcr.org/pages/fundraising-tips-en">FUNDRAISING TIPS</a>
					</li>
					<li class="nodropdown">
						<a href="https://mycause.unhcr.org/pages/the-difference-you-make-en">THE DIFFERENCE YOU MAKE</a>
					</li>
	</ul>

	      </section>
	    </nav>
	</header>
	      `).serialize();
			abHeaderObj = new AbUi_Header(TEST_TRANSLATIONS, 'en')
			expect(() => { abHeaderObj._renderMobileNavigation() }).toThrow('logoWrapper not defined')
		})
	})
	describe('_attachEventListeners', () => {
		it('should fail mobile nav not defined', () => {
			global.document.documentElement.innerHTML = new JSDOM(
				`
        <div class="top-bar-section">
          <div></div>
          <div>
            <div class="has-dropdown">
              <ul></ul>
            </div>
          </div>
        </div>
        `).serialize()
			abHeaderObj = new AbUi_Header(TEST_TRANSLATIONS, 'en')
			expect(() => { abHeaderObj._attachEventListeners() }).toThrow('mobilenav not defined')
		})
	})
})
//<div class="top-bar-section"><div></div><div><div class"has-dropdown"><ul></ul></div></div>
// describe('footer', () => {
// 	beforeEach(() => {
// 		global.document.documentElement.innerHTML = new JSDOM(`
//         <footer>
//           <div class="row">
//            <nav class="top-bar bottom-bar" data-topbar role="navigation">
//              <ul class="title-area">
//                <li class="name"></li>
//                <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
//                <li class="toggle-topbar menu-icon" >
//                  <a href="#"><span>Menu</span></a>
//                </li>
//              </ul>
//              <section class="top-bar-section">
//                <!-- Right Nav Section -->
//                <ul class="left">
//                  <li>
//                    <a href="#">
//                      Back to top
//                    </a>
//                  </li>
//                  <li>
//                    <a href="/contact_forms/new">Contact</a>
//                  </li>
//                  <li>
//                      <ul class="center">
//                      </ul>
//
//                  </li>
//                </ul>
//                <!-- Left Nav Section -->
//                <ul class="right">
//                  <li>
//                    <a href="http://www.iraiser.eu/">
//                      <img alt="Powered iraiser" src="/assets/powered-iraiser-908e9f7a84d71215ce39cebf2ba145e0.png" />
//                      </a>
//                   </li>
//                </ul>
//              </section>
//            </nav>
//           </div>
//         </footer>
//       `).serialize()
// 		abHeaderObj = new AbUi_Header(TEST_TRANSLATIONS, 'en')
//
//
// 	})
// 	it('should copyright container', () => {
// 		abHeaderObj._renderFooter()
// 		expect(document.querySelector('.nodropdown.footer-link-menu')).toBeDefined()
// 	})
// 	it('should find iraiser logo', () => {
// 		abHeaderObj._renderFooter()
// 		expect(document.querySelector('.iraiser-logo')).toBeDefined()
// 	})
//
// 	it('should throw footer not defined', () => {
// 		global.document.documentElement.innerHTML = new JSDOM(`<div></div>`).serialize()
// 		abHeaderObj = new AbUi_Header(TEST_TRANSLATIONS, 'en')
//
// 		expect(() => { abHeaderObj._renderFooter() }).toThrow('footer is undefined')
//
// 	})
// 	it('should throw footer copyright container not defined', () => {
// 		global.document.documentElement.innerHTML = new JSDOM(`<footer></footer>`).serialize()
// 		abHeaderObj = new AbUi_Header(TEST_TRANSLATIONS, 'en')
//
// 		expect(() => { abHeaderObj._renderFooter() }).toThrow('footer .left>li:last-child ul is undefined')
// 	})
// 	it('should match snapshot', () => {
// 		abHeaderObj._renderFooter()
// 		expect(document.documentElement.innerHTML).toMatchSnapshot()
// 	})
// })
// describe('convert langlist dom children to array', () => {
// 	beforeEach(() => {
// 		abHeaderObj = new AbUi_Header(TEST_TRANSLATIONS, 'en')
// 	})
// 	it('should fail no list defined', () => {
// 		global.document.documentElement.innerHTML = new JSDOM(`<div></div>`).serialize();
// 		expect(() => { abHeaderObj._initLanguageSelector() }).toThrow('langList not defined')
// 	})
// 	it('should generate a list of langItems', () => {
// 		global.document.documentElement.innerHTML = new JSDOM(`
//       <section class="top-bar-section">
//                   <a class="button left" href="/users/sign_in">Sign in</a>
//                   <ul class="right">
//                     <li class="has-dropdown not-click">
//                       <a href="#">
//                         English
//                       </a>
//                       <ul class="dropdown"><li class="title back js-generated"><h5><a href="javascript:void(0)">Back</a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="#">
//                         English
//                       </a></li>
//                             <li>
//                               <a href="/set_language/hk" class="highlighted">
//                                 香港粵語
//                               </a>
//                             </li>
//                       </ul>
//                     </li>
//                   </ul>
//               </section>`).serialize();
// 		abHeaderObj = new AbUi_Header(TEST_TRANSLATIONS, 'en')
// 		abHeaderObj._initLanguageSelector()
// 		expect(abHeaderObj.langList.length).toBe(2)
// 	})
// })
