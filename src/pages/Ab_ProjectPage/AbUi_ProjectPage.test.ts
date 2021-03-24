import AbUi_ProjectPage from './AbUi_ProjectPage'
import { TEST_TRANSLATIONS } from '../../mocks'
import { JSDOM } from 'jsdom'
declare var global: any
let abUiProjectPageObj: any
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
describe('AbUi_ProjectPage', () => {
	describe('_renderShareLinkComponent', () => {
		it('should throw projectInfoContainer not defined', () => {
			global.document.documentElement.innerHTML = new JSDOM(``)
			abUiProjectPageObj = new AbUi_ProjectPage(TEST_TRANSLATIONS, 'en')
			expect(() => { abUiProjectPageObj._renderShareLinkComponent() }).toThrow('Div project info container was not found')
		})
		it('should match snapshot', () => {
			global.document.documentElement.innerHTML = new JSDOM(`<div class="p2p-detail-data"><div></divu></div>`).serialize()
			abUiProjectPageObj = new AbUi_ProjectPage(TEST_TRANSLATIONS, 'en')
			abUiProjectPageObj._renderShareLinkComponent()
			expect(document.documentElement.innerHTML).toMatchSnapshot()
		})
	})
	describe('_adaptVideoHeight', () => {

	})
})
