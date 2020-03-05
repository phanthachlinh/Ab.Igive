import { ITranslationsDictionary } from "../../types/general"
/**
* Class constructs the share link html and attaches event listeners
**/
export default class AbUi_ShareLink {

	translations: ITranslationsDictionary
	lang: string
	newProjectWidgetButton: HTMLAnchorElement | null
	newProjectWidgetContainer: HTMLDivElement | null
	projectDataContainer: HTMLDivElement | null
	projectDonateNowButton: HTMLDivElement | null

	constructor(translations: ITranslationsDictionary, lang: string) {

		this.translations = translations
		this.lang = lang
		this.newProjectWidgetButton = document.querySelector('#events-show #widget-new-project a')
		this.newProjectWidgetContainer = document.querySelector('#widget-new-project')
		this.projectDataContainer = document.querySelector('.p2p-detail-data>div')
		this.projectDonateNowButton = document.querySelector(".project_boutons_give")
	}

	/**
	* get Share link html string with translations
	**/
	public getShareLinkComponent(): string {

		return `
      <div class="share-link">
        <h6>${document.getElementById('events-show') ? this.translations[this.lang].shared.shareThisFundPage : this.translations[this.lang].shared.shareThisCampaign}</h6>
        <div class="share-link__wrapper">
        <input type="text" value="${window.location}" />
        <button>${this.translations[this.lang].shared.copyLink}</button>
        </div>
      </div>
    `
	}


	public attachEventListener(): void {
		let shareLinkButton = document.querySelector('.share-link button')
		if (shareLinkButton) {
			shareLinkButton.addEventListener('click', this._shareLinkButtonClickHandler)
		} else {
			console.error('Share link button not found')
		}
	}
	private _shareLinkButtonClickHandler(ev: Event): void {

		ev.preventDefault();
		let shareLinkInput: HTMLInputElement | null = document.querySelector('.share-link input')
		if (shareLinkInput) {
			shareLinkInput.select();
			document.execCommand('copy');
		} else
			console.error('Share link input not found')
	}
}
