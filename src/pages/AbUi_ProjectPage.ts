/**
* Class renders changes on the project page
**/
import { ITranslationsDictionary } from "../types/general";
import AbUi_ShareLink from "../components/AbUi_ShareLink";
export default class AbUi_ProjectPage {

	translations: ITranslationsDictionary;
	language: string;
	AbUiShareLink: AbUi_ShareLink
	projectInfoContainer: HTMLDivElement | null;

	constructor(translations: ITranslationsDictionary, language: string) {

		this.translations = translations
		this.language = language
		this.AbUiShareLink = new AbUi_ShareLink(this.translations, this.language)
		this.projectInfoContainer = document.querySelector('.p2p-detail-data>div:first-child')
	}
	/**
	* renders the share link component
	**/
	private _renderShareLinkComponent(): void {
		if (!this.projectInfoContainer) {
			console.error('Div project info container was not found');
			return
		}
		let shareLinkHtmlString: string = this.AbUiShareLink.getShareLinkComponent();
		this.projectInfoContainer.insertAdjacentHTML('beforeend', shareLinkHtmlString);
		this.AbUiShareLink.attachEventListener()

	}

	/**
	* changes the video height
	**/
	private _adaptVideoHeight() {
		if (window.innerWidth >= 768) {
			let height = document.querySelector('.project-detail-data') ?.clientHeight
      let videoContainers: Array<HTMLUListElement> = Array.from(document.querySelectorAll('.bxslider .maybevideocontainer'))
			videoContainers.map((el: HTMLUListElement) => {
				el.style.height = height + 'px'
			});
		}
	}

	render() {
		this._renderShareLinkComponent()
		this._adaptVideoHeight()
	}
}
