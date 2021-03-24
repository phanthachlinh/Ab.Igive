import { JSDOM } from "jsdom"
import { TEST_TRANSLATIONS } from "../../mocks"
import AbUi_HomePage from "./AbUi_HomePage"
declare var global: any
let abUiHomePageObj: any
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
describe('AbUi_HomePage', () => {

})
/*
global.document.documentElement.innerHTML = new JSDOM(`
  <div class="examples-wrapper-inner">
    <ul>
    </ul>
  </div>
  `)
*/
