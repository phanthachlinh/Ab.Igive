/**
* Class renders changes on the Event page (/events/:event-name)
**/
import { ITranslationsDictionary } from "../../types/general"
import AbUi_ShareLink from "../../components/Ab_ShareLink/AbUi_ShareLink"
export default class AbUiEventPage {
	translations: ITranslationsDictionary
	pageLanguage: string
	createFundPageButton: HTMLElement | null
	newProjectWidget: HTMLDivElement | null
	constructor(translations: ITranslationsDictionary, pageLanguage: string) {

		this.translations = translations
		this.pageLanguage = pageLanguage
		this.createFundPageButton = document.querySelector('#events-show #widget-new-project a')
		this.newProjectWidget = document.querySelector('#widget-new-project')
	}
	/**
	* renders share link component
	**/
	private _renderShareLinkComponent(): void {

		let ShareLinkComponent = new AbUi_ShareLink(this.translations, this.pageLanguage)
		if (this.newProjectWidget) {

			this.newProjectWidget.insertAdjacentHTML('afterend', ShareLinkComponent.getShareLinkComponent());
			ShareLinkComponent.attachEventListener()
		} else
			console.error('New project widget not found')

		document ?.querySelector('.share-link button') ?.addEventListener('click', ev => {

			ev.preventDefault();
			(<HTMLInputElement>document ?.querySelector('.share-link input')) ?.select();
			document.execCommand('copy');
		})
  }

	/**
	* changes the text in the create project button
	**/
	private _changeCreateFundraisingButtonText(): void {

		if (this.createFundPageButton)
			this.createFundPageButton.innerText = this.translations[this.pageLanguage].shared.setupMyFundpage;
		else
			console.error('Create fund page button not found')
	}

	render() {

		this._changeCreateFundraisingButtonText();
		this._renderShareLinkComponent()
	}
}
