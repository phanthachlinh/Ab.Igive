declare var window: IWindow
interface IWindow extends Window {
	pageData: {
		TRANSLATIONS: ITranslationsDictionary
		ORGANIZATION_NAME: string
	}
}
import AbUi_General from './general/AbUi_General'
import AbHelpers from './helpers/helpers'
import { ITranslationsDictionary } from './types/general';
import AbUi_Header from './components/Ab_Header/AbUi_Header';
import AbUi_HomePage from './pages/ab_HomePage/AbUi_HomePage';
import AbUi_AllEventsPage from './pages/Ab_AllEventsPage/AbUi_AllEventsPage';

import AbUi_EventPage from './pages/Ab_EventPage/AbUi_EventPage';
import AbUi_ProjectPage from './pages/Ab_ProjectPage/AbUi_ProjectPage';
import AbUi_Footer from './components/Ab_Footer/AbUi_Footer';
const { TRANSLATIONS, ORGANIZATION_NAME } = window.pageData

enum PageTypes {
	HomePage = 'indexs-index',
	AllEventsPage = 'events-index',
	EventPage = 'events-show',
	ProjectPage = "projects-show"
}


let pageLanguage: string = AbHelpers.getLanguage(document ?.querySelector('html') ?.lang, TRANSLATIONS);


window.onload = function() {
	let pageType = document.getElementsByTagName('body')[0].id
	if (AbHelpers.isTranslationsAndPageLangValid(TRANSLATIONS)) {
		new AbUi_General(TRANSLATIONS, pageLanguage).render()
		new AbUi_Header(TRANSLATIONS, pageLanguage).render()
		new AbUi_Footer(ORGANIZATION_NAME).render()
	}
	switch (pageType) {
		case PageTypes.HomePage:
			new AbUi_HomePage(TRANSLATIONS, pageLanguage).render()
			break
		case PageTypes.AllEventsPage:
			new AbUi_AllEventsPage(TRANSLATIONS, pageLanguage).render()
			break
		case PageTypes.EventPage:
			new AbUi_EventPage(TRANSLATIONS, pageLanguage).render()
			break
		case PageTypes.ProjectPage:
			new AbUi_ProjectPage(TRANSLATIONS, pageLanguage).render();
			break;
		default:
			console.error('nothing called')
	}



	// new AbUi_Header().render()
	// new AbUi_EventPage(translations,pageLanguage).render()
}
