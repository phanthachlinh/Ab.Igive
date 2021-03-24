/**
* Class contains methods that should be called on every page
**/
import { ITranslationsDictionary } from "../types/general"
export default class AbUi_General {

	translations: ITranslationsDictionary
	language: string
	projectsButton: HTMLAnchorElement | null
	teamcountWrapper: Array<HTMLDivElement>
	newProjectWidgetButton: HTMLAnchorElement | null
	projectDonateNowButton: HTMLDivElement | null
	buttonsPageCreate: NodeListOf<HTMLAnchorElement>
	eventsThumbnailContainer: HTMLUListElement | null

	constructor(translations: ITranslationsDictionary, language: string) {

		this.translations = translations
		this.language = language
		this.projectsButton = document.querySelector('.section-home-projects .button')
		this.teamcountWrapper = Array.from(document.querySelectorAll('.event-description .teamcount'))
		this.translations = translations
		this.newProjectWidgetButton = document.querySelector('#events-show #widget-new-project a')
		this.projectDonateNowButton = document.querySelector(".project_boutons_give")
		this.buttonsPageCreate = document.querySelectorAll('.button.page-create')
		this.eventsThumbnailContainer = document.querySelector('.examples-wrapper-inner ul')
	}
	/**
	* rename button that shows all projects
	**/
	private _renameProjectButton(): void {
		if (this.projectsButton)
			this.projectsButton.innerText = this.translations[this.language].shared.seeAllCampaigns;
		else
			console.warn('Project button (.section-home-projects .button) not found')
	}

	/**
	* rename project/projects to Pages in event thumbnails
	**/
	private _renameProjectToPages(): void {

		this.teamcountWrapper.map(el => {
			el.innerHTML = el.innerHTML.replace('projects', 'Pages')
			el.innerHTML = el.innerHTML.replace('project', 'Pages')
		})
	}


	private _changeCtaButtonText(): void {
		if (document.getElementById('events-show'))
			if (this.newProjectWidgetButton)
				this.newProjectWidgetButton.innerText = this.translations[this.language].shared.setupMyFundpage;
			else
				console.warn('No new Project button found')


		if (document.getElementById('projects-show'))
			if (this.projectDonateNowButton)
				this.projectDonateNowButton.innerText = this.translations[this.language].shared.donateNow;
			else
				console.warn('No donate now button found')
	}
	/**
	* remove name of the project owner and play icon from project thumbnails
	**/
	private _removeNameAndPlayIcon(): void {

		Array.from(document.querySelectorAll('.section-home-projects .link-to-user')).map(el => {
			if (el.childNodes[0].nodeName == '#text') {
				el.childNodes[0].remove()
				el.querySelector('.fa-play') ?.remove()
			}
		})

		Array.from(document.querySelectorAll('.link-to-user')).map(el => {
			if (el.childNodes[0].nodeName == '#text') {
				el.childNodes[0].remove();
				if (el.querySelector('.fa-play'))
					el.querySelector('.fa-play') ?.remove()
			}
		});
	}
	private _changeCreateFundPageText() {
		if (this.buttonsPageCreate.length === 0)
			console.warn('No button found (.button.page-create)')
		else {
			for (let i = 0; i < this.buttonsPageCreate.length; i++) {
				this.buttonsPageCreate[i].innerText = this.translations[this.language].shared.createMyFundPage
			}
		}
	}
	private _renderContactUsThumbnail(): void {

		if (this.eventsThumbnailContainer) {

			let contactUsComponent =
				`<section class="content-contact-us">
					<div class="content-contact-us-inner">
						<h2>${this.translations[this.language].homepage.additionalEventListItem.title}</h2>
						<p>${this.translations[this.language].homepage.additionalEventListItem.subtitle}</p>
						<a class="custom__button-main button-blue-border" href="${this.translations[this.language].homepage.additionalEventListItem.buttonLink}">
							${this.translations[this.language].homepage.additionalEventListItem.buttonText}
							</a>
					</div>
				</section>`
			this.eventsThumbnailContainer.insertAdjacentHTML('beforeend', contactUsComponent)
		} else
			console.warn('Event thumbnail container not found')
	}

	render() {

		this._renameProjectButton()
		this._renameProjectToPages()
		this._removeNameAndPlayIcon()
		this._changeCtaButtonText()
		this._changeCreateFundPageText()
		this._renderContactUsThumbnail()
	}
}
