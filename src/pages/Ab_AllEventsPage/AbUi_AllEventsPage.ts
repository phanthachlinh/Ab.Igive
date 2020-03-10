/**
* Class renders changes on the All events page (/events)
**/
import { ITranslationsDictionary } from "../../types/general"
export default class AbUi_AllEventsPage {

	campaignSearchInput: HTMLInputElement | null
	translations: ITranslationsDictionary
	pageLanguage: string
	pageHeadingContainerNode: HTMLDivElement | null
	pageHeading: HTMLHeadingElement | null | undefined
	events: NodeListOf<HTMLUListElement>

	constructor(translations: ITranslationsDictionary, pageLanguage: string) {

		this.translations = translations
		this.pageLanguage = pageLanguage
		this.campaignSearchInput = document.querySelector('#front-search-filter .field-auto-search')
		this.pageHeadingContainerNode = document.querySelector('.first-section>:first-child>:first-child>:first-child>:first-child')
		this.pageHeading = this.pageHeadingContainerNode ?.querySelector('h1')
		this.events = document.querySelectorAll('.event-item')
	}

	/**
	* Changes title of the page (under the banner)
	**/
	private _changePageTitle(): void {

		if (!this.pageHeading) {
			console.error('Page title not found')
			return
		}
		this.pageHeading.innerText = this.translations[this.pageLanguage].eventPage.title
	}

	/**
	* add a <p> under the title
	**/
	private _changePageSubtitle(): void {

		if (!this.pageHeadingContainerNode) {
			console.error('Page heading container not found')
			return
		}

		this.pageHeadingContainerNode.insertAdjacentHTML('beforeend', `
			<p>${this.translations[this.pageLanguage].eventPage.subTitle}</p>
		`)
	}

	/**
	* changes the placeholder of the search input
	**/
	private _changeEventSearchInputPlaceholder(): void {

		if (this.campaignSearchInput)
			this.campaignSearchInput.placeholder = this.translations[this.pageLanguage].shared.searchForGlobalCamp;
		else
			console.error('Campaign search input not found')
	}

	render() {

		this._changePageTitle();
		this._changePageSubtitle()
		this._changeEventSearchInputPlaceholder()
	}
}
