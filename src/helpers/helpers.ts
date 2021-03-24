/**
* Class contains helper methods
**/
import { ITranslationsDictionary } from "../types/general";
/**
* helper method object
**/
export default {

	/**
	* language validation
	**/
	getLanguage: (language: string | undefined, translations: ITranslationsDictionary): string => {

		/**
		* checks if language is defined/else return en
		**/
		if (!language) {
			console.error('lang is undefined')
			return 'en'
		}

		/**
		* checks if language contains current language/else return en as fallback
		**/
		if (!Object.keys(translations).includes(language)) {
			console.error('translations do not contain a key of ' + language)
			return 'en'
		}

		return language
	},

	/**
	* translation validation
	**/
	isTranslationsAndPageLangValid: (translations: ITranslationsDictionary): boolean => {

		/**
		* checks if translations object has 0 keys(languages)
		**/
		if (Object.keys(translations).length === 0) {
			console.error('translations is empty')
			return false
		}

		/**
		* check if translations contains en
		**/
		if (!translations['en']) {
			console.warn('translations does not contain fallback language of en')
		}
		return true
	}
}
