/**
* Class renders change on the home page (/)
**/
import { ITranslationsDictionary } from "../../types/general"
export default class AbUi_HomePage {

	eventsThumbnailContainer: HTMLUListElement | null
	translations: ITranslationsDictionary
	pageLanguage: string

	constructor(translations: ITranslationsDictionary, pageLanguage: string) {

		this.translations = translations
		this.pageLanguage = pageLanguage
		this.eventsThumbnailContainer = document.querySelector('.examples-wrapper-inner ul')
	}

	/**
	* renders contact us element into last position in the list of projects
	**/
	private _renderContactUsThumbnail(): void {

		if (this.eventsThumbnailContainer) {

			let contactUsComponent =
				`<section class="content-contact-us">
					<div class="content-contact-us-inner">
						<h2>${this.translations[this.pageLanguage].homepage.contactUsTitle}</h2>
						<p>${this.translations[this.pageLanguage].homepage.contactUsSubtitle}</p>
						<a class="custom__button-main button-blue-border" href="${window.location.origin}/contact_forms/new">
							${this.translations[this.pageLanguage].homepage.contactUs}
							</a>
					</div>
				</section>`
			this.eventsThumbnailContainer.insertAdjacentHTML('beforeend', contactUsComponent)
		} else
			console.error('Event thumbnail container not found')
	}

	render() {

		this._renderContactUsThumbnail()
	}

}
