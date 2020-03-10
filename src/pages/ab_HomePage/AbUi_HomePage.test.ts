import { JSDOM } from "jsdom"
import { TEST_TRANSLATIONS } from "../../mocks"
import AbUi_HomePage from "./AbUi_HomePage"
declare var global: any
let abUiHomePageObj: any
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
describe('AbUi_HomePage', () => {
	describe('_renderContactUsThumbnail', () => {
		it('should render contact us thumbnail', () => {
			global.document.documentElement.innerHTML = new JSDOM(``)
			abUiHomePageObj = new AbUi_HomePage(TEST_TRANSLATIONS, 'en')
			expect(() => { abUiHomePageObj._renderContactUsThumbnail() }).toThrow('Event thumbnail container not found')
		})
		it('should match snapshot', () => {
			global.document.documentElement.innerHTML = new JSDOM(`
        <div class="examples-wrapper-inner">
          <ul>
          </ul>
        </div>
        `).serialize()
			abUiHomePageObj = new AbUi_HomePage(TEST_TRANSLATIONS, 'en')
			abUiHomePageObj._renderContactUsThumbnail()
			expect(document.documentElement.innerHTML).toMatchSnapshot()
		})
	})

})
/*
global.document.documentElement.innerHTML = new JSDOM(`
  <div class="examples-wrapper-inner">
    <ul>
    </ul>
  </div>
  `)
*/
