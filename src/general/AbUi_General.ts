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

	constructor(translations: ITranslationsDictionary, language: string) {

		this.translations = translations
		this.language = language
		this.projectsButton = document.querySelector('.section-home-projects .button')
		this.teamcountWrapper = Array.from(document.querySelectorAll('.event-description .teamcount'))
		this.translations = translations
		this.newProjectWidgetButton = document.querySelector('#events-show #widget-new-project a')
		this.projectDonateNowButton = document.querySelector(".project_boutons_give")

	}
	/**
	* rename button that shows all projects
	**/
	private _renameProjectButton(): void {
		if (this.projectsButton)
			this.projectsButton.innerText = this.translations[this.language].shared.seeAllCampaigns;
		else
			console.error('Project button (.section-home-projects .button) not found')
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
				console.error('No new Project button found')


		if (document.getElementById('projects-show'))
			if (this.projectDonateNowButton)
				this.projectDonateNowButton.innerText = this.translations[this.language].shared.donateNow;
			else
				console.error('No donate now button found')
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

	render() {

		this._renameProjectButton()
		this._renameProjectToPages()
		this._removeNameAndPlayIcon()
		this._changeCtaButtonText()
	}
}
