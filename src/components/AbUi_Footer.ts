/**
* Class renders the iraiser logo and the organization name into the footer
**/
export default class AbUi_Footer {

	footer: HTMLElement | null;
	footerMenu: HTMLUListElement | null;
	organizationName: string;

	constructor(organizationName: string) {

		this.organizationName = organizationName
		this.footer = document.getElementsByTagName('footer')[0]
		this.footerMenu = document.querySelector('footer .left>:last-child>ul')
	}

	/**
	* renders iraiser logo
	**/
	private _renderIraiserLogo(): void {

		if (this.footer)
			this.footer.insertAdjacentHTML('afterbegin', '<img class="iraiser-logo" src="https://donate.unhcr.org/themes/default/img/icons/powered-iraiser.png">')
		else
			console.error('Footer not found')
	}

	/**
	* renders organization name into the footer
	**/
	private _renderFooterMenu(): void {

		if (this.footerMenu)
			this.footerMenu.insertAdjacentHTML('afterbegin', '<li class="nodropdown footer-link-menu"><a>© ' + this.organizationName + '</a> </li>')
		else
			console.error('Footer menu not found (.left>li:last-child ul)')
	}

	render() {

		this._renderIraiserLogo()
		this._renderFooterMenu()
	}
}
