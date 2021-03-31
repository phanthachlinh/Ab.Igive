/**
* Class renders change on the home page (/)
**/
import { ITranslationsDictionary } from "../types/general"
export default class AbUi_HomePage {

	translations: ITranslationsDictionary
	pageLanguage: string

	constructor(translations: ITranslationsDictionary, pageLanguage: string) {

		this.translations = translations
		this.pageLanguage = pageLanguage

	}


	render() {

	}

}
