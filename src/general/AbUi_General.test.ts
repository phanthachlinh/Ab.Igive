import AbUi_General from './AbUi_General'
import { TEST_TRANSLATIONS } from '../mocks';
import { JSDOM } from 'jsdom';
declare var global: any
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
let generalObj: any;
console.warn = jest.fn((errmsg: string) => {
	throw errmsg
})
describe('AbUi General', () => {
	describe('_renameProjectButton', () => {
		it('should fail no translations provided', () => {
			generalObj = new AbUi_General({}, 'en')
			expect(() => { generalObj._renameProjectButton() }).toThrow('Project button (.section-home-projects .button) not found')
		})
	})
	describe('_changeCtaButtonText', () => {
		describe('Setup my fundraising page button', () => {
			it('should fail no new project button found', () => {
				global.document.documentElement.innerHTML = new JSDOM(`
				<body id="events-show">
				</body>
				`).serialize()
				generalObj = new AbUi_General(TEST_TRANSLATIONS, 'en')
				expect(() => { generalObj._changeCtaButtonText() }).toThrow('No new Project button found')
			})
			it('should change button text', () => {
				global.document.documentElement.innerHTML = new JSDOM(`
				<body id="events-show">
					<div id="widget-new-project">
						<a>
						</a>
						</div>
				</body>
				`).serialize()
				generalObj = new AbUi_General(TEST_TRANSLATIONS, 'en')
				generalObj._changeCtaButtonText()
				expect((<HTMLElement>document.querySelector('#events-show #widget-new-project a')) ?.innerText).toBe(TEST_TRANSLATIONS.en.shared.setupMyFundpage)
			})
		})
		describe('Donate Now Button', () => {
			it('should fail no new project button found', () => {
				global.document.documentElement.innerHTML = new JSDOM(`
				<body id="projects-show">
				</body>
				`).serialize()
				generalObj = new AbUi_General(TEST_TRANSLATIONS, 'en')
				expect(() => { generalObj._changeCtaButtonText() }).toThrow('No donate now button found')
			})
			it('should change button text', () => {
				global.document.documentElement.innerHTML = new JSDOM(`
				<body id="projects-show">
					<div class="project_boutons_give">

						</div>
				</body>
				`).serialize()
				generalObj = new AbUi_General(TEST_TRANSLATIONS, 'en')
				generalObj._changeCtaButtonText()
				expect((<HTMLElement>document.querySelector('.project_boutons_give')) ?.innerText).toBe(TEST_TRANSLATIONS.en.shared.donateNow)
			})
		})
	})
	describe('_changeCreateFundPageText', () => {
		it('should fail no buttons found', () => {
			generalObj = new AbUi_General(TEST_TRANSLATIONS, 'en')
			expect(() => { generalObj._changeCreateFundPageText() }).toThrow('No button found (.button.page-create)')
		})
		it('should contain translated text', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
				<a class="button page-create">
				</a>
				`).serialize()
			generalObj = new AbUi_General(TEST_TRANSLATIONS, 'en')
			generalObj._changeCreateFundPageText()
			let button: HTMLAnchorElement | null = document.querySelector('.button.page-create')
			expect(button ?.innerText).toBe(TEST_TRANSLATIONS.en.shared.createMyFundPage)
		})
	})
	describe('_renderContactUsThumbnail', () => {
		it('should render contact us thumbnail', () => {
			global.document.documentElement.innerHTML = new JSDOM(``)
			generalObj = new AbUi_General(TEST_TRANSLATIONS, 'en')
			expect(() => { generalObj._renderContactUsThumbnail() }).toThrow('Event thumbnail container not found')
		})
		it('should match snapshot', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
        <div class="examples-wrapper-inner">
          <ul>
          </ul>
        </div>
        `).serialize()
			generalObj = new AbUi_General(TEST_TRANSLATIONS, 'en')
			generalObj._renderContactUsThumbnail()
			expect(document.documentElement.innerHTML).toMatchSnapshot()
		})
	})

})
