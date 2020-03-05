/**
* Class replaces search input text in the header
* and inserts a mobile menu node into the dom
**/
import { ITranslationsDictionary } from "../../types/general"
export default class AbUi_Header {
	translations: ITranslationsDictionary
	header: HTMLElement | null
	mobileNav: HTMLElement
	body: HTMLBodyElement | null
	langList: Array<Element>
	navItems: HTMLCollection | undefined
	logoWrapper: HTMLElement | null
	searchInput: HTMLInputElement | null
	lang: string

	constructor(translations: ITranslationsDictionary, lang: string) {
		this.translations = translations
		this.lang = lang
		this.header = document.querySelector('#header-header>.row>div:nth-child(2)')
		this.mobileNav = document.createElement('div')
		this.body = document.querySelector('body')
		this.langList = []
		this.navItems = document.querySelector('#main-nav section>ul') ?.children
    let langList = document.querySelector('.top-bar-section>:nth-child(2) .has-dropdown>ul')

		/**
		* check if lang list is defined
		**/
		if (langList) {

			this.langList = Array.from(langList.children)

			/**
			* HTML collection contains a back button as first child used shift to remove
			**/
			this.langList.shift()
		} else {

			console.error('.top-bar-section>:nth-child(2) .has-dropdown>ul not defined')
		}

		this.logoWrapper = document.querySelector('#header-header>div.row>div.small-12.medium-12.large-4.columns');
		this.searchInput = document.querySelector('[placeholder="Search"]')
	}



	/**
	* construct mobile nav string
	**/
	private _setMobileNavItems() {

		if (this.navItems) {
			/**
			* adds nav items into mobile menu
			**/
			for (let i = 0; i < this.navItems.length; i++) {

				/**
				* if menuItem has a submenu add a icon
				**/
				if (this.navItems[i].classList.contains('has-dropdown'))
					this.navItems[i].insertAdjacentHTML('beforeend', '<i class="fa fa-chevron-right"></i>')

				if (this.mobileNav) {
					/**
					* add mobile nav items into a node
					**/
					this.mobileNav.innerHTML = Array.from(this.navItems).map((menuItem: any) => {
						return menuItem.outerHTML
					}).join('');
				}
			}
		} else
			console.warn('no mobile menu items')
	}

	/**
	* get menu items and render into mobile nav wrapper
	**/
	private _renderMobileNavigation() {

		let menuIcon = '<img class="menu__icon-mobile" src="https://libs.iraiser.eu/users/unhcr-crowdfunding/public/assets/icon__menu.svg" />';

		/**
		* add menuIcon into logo wrapper
		**/
		if (this.logoWrapper)
			this.logoWrapper.insertAdjacentHTML('beforeend', menuIcon);
		else
			console.error('logoWrapper not defined')

		/**
		* add lang list to mobile navigation
		**/
		this.mobileNav.innerHTML += `
			<ul class="lang-mobile">
				${this.langList.map(langItem => {
				return langItem.outerHTML
			}).join('')
			}
			</ul>`;

		if (this.body) {

			/**
			* add mobile navigation to body
			**/
			this.body.insertAdjacentHTML('afterbegin',
				`<div id="mobileNav">
          <img class="icon__close" src="https://libs.iraiser.eu/users/unhcr-crowdfunding/public/assets/icon_close.svg" />
          <ul>${this.mobileNav.innerHTML}</ul>
        </div>`);
		}
	}

	/**
	* attach event listeners to the newly created mobile menu
	**/
	private _attachEventListeners() {

		let mobileNav = document.querySelector('#mobileNav')
		if (!mobileNav) {
			console.error('mobilenav not defined')
			return
		}

		document ?.querySelector('.menu__icon-mobile') ?.addEventListener('click', () => {
			document ?.querySelector('#mobileNav') ?.classList.add('nav-mobile-open')
    });
		document ?.querySelector('.icon__close') ?.addEventListener('click', () => {
			document ?.querySelector('#mobileNav') ?.classList.remove('nav-mobile-open')
    });

		Array.from(document.querySelectorAll('#mobileNav>ul>.has-dropdown>a')).map((el: Element) => {

			/**
			add open event listener for mobile multilevel menu item
			**/
			el.addEventListener('click', (ev: any) => {
				ev.preventDefault()
				ev.currentTarget.parentElement ?.querySelector('.dropdown').classList.add('open')
	      })
			/**
			add close event listener for mobile multilevel menu item
			**/
			el.parentElement ?.querySelector('.dropdown>.title') ?.addEventListener('click', (ev: any) => {
				ev.currentTarget.parentElement.classList.remove('open')
			})
      })
	}

	render() {
		this._setMobileNavItems()
		this._renderMobileNavigation()
		this._attachEventListeners()
	}
}
