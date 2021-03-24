/**
* class render user navigation (appears when logged in)
**/
export default class AbUi_MobileUserNavigation {

	body: HTMLBodyElement | null
	userMenu: HTMLUListElement | null
	userMenuContainer: HTMLUListElement | null
	userMenuBackElement: HTMLUListElement | null

	constructor() {

		this.body = document.querySelector("body")
		this.userMenu = document.querySelector("header ul.left .dropdown")
		this.userMenuContainer = document.querySelector("#header-header .top-bar .left>li:last-child")
		this.userMenuBackElement = document.querySelector(".mobile-personal-nav .title.back")
	}

	/**
	* renders mobile user navigation
	**/
	private _renderMobileUserNavigation(): void {

		if (!this.body) {
			console.error('Body not found')
			return
		}
		if (!this.userMenu) {
			console.error('User menu not found (header ul.left .dropdown)')
			return
		}
		this.body.insertAdjacentHTML("afterbegin", '<div class="mobile-personal-nav"><ul>' + this.userMenu.innerHTML + "</ul></div>")
	}

	/**
	* attaches event listeners for opening and closing the manu
	**/
	private _attachEventListeners(): void {

		if (!this.userMenuContainer) {

			console.error('User menu container not found (#header-header .top-bar .left>li:last-child)')
			return
		}

		let mobileUserNav = document.querySelector(".mobile-personal-nav")
		this.userMenuContainer.addEventListener("click", () => {

			let mobileUserNav = document.querySelector(".mobile-personal-nav")
			mobileUserNav ?.classList.add("mobile-personal-nav-visible")
		})
		let userMenuBackElement = document.querySelector(".mobile-personal-nav .title.back")
		if (!userMenuBackElement) {
			console.error('Back element is not defined (.mobile-personal-nav .title.back)')
			return
		}


		userMenuBackElement.addEventListener("click", () => {

			mobileUserNav ?.classList.remove("mobile-personal-nav-visible")
    })
	}
	render() {
		this._renderMobileUserNavigation()
		this._attachEventListeners()
	}
}
