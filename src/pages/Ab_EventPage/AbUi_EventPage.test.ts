import AbUi_EventPage from './AbUi_EventPage';
declare var global: any
import { JSDOM } from 'jsdom'
import { ITranslationsDictionary } from '../../types/general';
import { TEST_TRANSLATIONS } from '../../mocks';
let abEventPage: any
declare var global: any
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})

describe('AbUi_EventPage', () => {
	describe('_renderShareLinkComponent', () => {
		it('should throw', () => {
			global.document.documentElement.innerHTML = new JSDOM(``)
			abEventPage = new AbUi_EventPage(TEST_TRANSLATIONS, 'en')
			expect(() => { abEventPage._renderShareLinkComponent() }).toThrow('New project widget not found')
		})
		it('should match snapshot', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
				<div id="widget-new-project">
				</div>
				`).serialize()
			abEventPage = new AbUi_EventPage(TEST_TRANSLATIONS, 'en')
			abEventPage._renderShareLinkComponent()
			expect(document.documentElement.innerHTML).toMatchSnapshot()
		})
		describe('_changeCreateFundraisingButtonText', () => {

			it('should fail no create fundraising button found', () => {
				global.document.documentElement.innerHTML = new JSDOM(``)
				abEventPage = new AbUi_EventPage(TEST_TRANSLATIONS, 'en')
				expect(() => { abEventPage._changeCreateFundraisingButtonText() }).toThrow('Create fund page button not found')
			})
			it('should container changed text', () => {
				global.document.documentElement.innerHTML = new JSDOM(`
					<body id="events-show">
						<div id="widget-new-project">
							<a>
							</a>
						</div>
					</body>
					`).serialize()
				abEventPage = new AbUi_EventPage(TEST_TRANSLATIONS, 'en')
				abEventPage._changeCreateFundraisingButtonText()
				expect(document.querySelector('a') ?.innerText).toBe(TEST_TRANSLATIONS.en.shared.setupMyFundpage)
			})
		})
	})
	// it('should throw Create fund page button not found', () => {
	// 	global.document.documentElement.innerHTML = new JSDOM(`
	//     <body id="events-show"></body>
	//     `).serialize()
	// 	abShareLink = new AbUi_EventPage(TEST_TRANSLATIONS, 'en')
	// 	expect(() => { abShareLink._renderShareLinkComponent() }).toThrow('New project widget not found')
	// })
	// it('should match snapshot', () => {
	// 	global.document.documentElement.innerHTML = new JSDOM(`
	//     <body id="events-show"><div id="widget-new-project"></div></body>
	//     `).serialize()
	// 	abShareLink = new AbUi_EventPage(TEST_TRANSLATIONS, 'en')
	// 	abShareLink._renderShareLinkComponent()
	// 	expect(document.documentElement.innerHTML).toMatchSnapshot()
	// })
	// it('should not throw', () => {
	// 	global.document.documentElement.innerHTML = new JSDOM(`
	//     <body id="events-show"><div id="widget-new-project"><a></a></div></body>
	//     `).serialize()
	// 	abShareLink = new AbUi_EventPage(TEST_TRANSLATIONS, 'en')
	// 	expect(() => { abShareLink.render() }).not.toThrow()
	// })
	// it('should not throw', () => {
	// 	global.document.documentElement.innerHTML = new JSDOM(`
	//     <body id="events-show"><div id="widget-new-project"><a></a></div></body>
	//     `).serialize()
	// 	abShareLink = new AbUi_EventPage(TEST_TRANSLATIONS, 'en')
	// 	abShareLink.render()
	// 	expect(document.documentElement.innerHTML).toMatchSnapshot()
	// })
	// it('should match Create fund button snapshot',()=>{
	//   global.document.documentElement.innerHTML = new JSDOM( `
	//     <body id="events-show"></body>
	//     `).serialize()
	//   new AbUi_EventPage(TEST_TRANSLATIONS,'en').render()
	//   expect(()=>{new AbUi_EventPage(TEST_TRANSLATIONS,'en').render()}).toMatchSnapshot();
	// })
})
