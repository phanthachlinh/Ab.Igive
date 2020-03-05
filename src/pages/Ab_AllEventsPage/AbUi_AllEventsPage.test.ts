import AbUi_AllEventsPage from "./AbUi_AllEventsPage"
declare var global: any
import { TEST_TRANSLATIONS } from "../../mocks"
import { JSDOM } from "jsdom"
let abUiProjectsPageObj: any
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
describe('AbUi_AllEventsPage', () => {
	describe('_changePageTitle', () => {
		it('should throw page title not found', () => {
			abUiProjectsPageObj = new AbUi_AllEventsPage(TEST_TRANSLATIONS, 'en')
			expect(() => { abUiProjectsPageObj._changePageTitle() }).toThrow('Page title not found')
		})
		it('should change the page title', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
				<div class="first-section">
					<div>
						<div>
							<div>
								<div>
									<h1></h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			`).serialize()
			abUiProjectsPageObj = new AbUi_AllEventsPage(TEST_TRANSLATIONS, 'en')
			abUiProjectsPageObj._changePageTitle()
			expect(document.querySelector('h1') ?.innerText).toBe(TEST_TRANSLATIONS.en.eventPage.title)
		})
	})
	describe('_changePageSubTitle', () => {
		it('should fail page heading container not found', () => {
			global.document.documentElement.innerHTML = new JSDOM(``)
			abUiProjectsPageObj = new AbUi_AllEventsPage(TEST_TRANSLATIONS, 'en')
			expect(() => { abUiProjectsPageObj._changePageSubtitle() }).toThrow('Page heading container not found')
		})
		it('should change the page title', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
				<div class="first-section">
					<div>
						<div>
							<div>
								<div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`).serialize()
			abUiProjectsPageObj = new AbUi_AllEventsPage(TEST_TRANSLATIONS, 'en')
			abUiProjectsPageObj._changePageSubtitle()
			expect(document.querySelector('p') ?.outerHTML).toBe('<p>' + TEST_TRANSLATIONS.en.eventPage.subTitle + '</p>')
		})
	})
	describe('_changeEventSearchInputPlaceholder', () => {
		it('should throw search input not found', () => {
			abUiProjectsPageObj = new AbUi_AllEventsPage(TEST_TRANSLATIONS, 'en')
			expect(() => { abUiProjectsPageObj._changeEventSearchInputPlaceholder() }).toThrow('Campaign search input not found')
		})
	})
})
