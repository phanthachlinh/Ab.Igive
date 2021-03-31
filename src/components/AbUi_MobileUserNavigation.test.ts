import AbUi_MobileUserNavigation from "./AbUi_MobileUserNavigation"
import { JSDOM } from "jsdom"
let abUiMobileUserNavigationObj: any
declare var global: any
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
describe('AbUi_MobileUserNavigation', () => {
	describe('_renderMobileUserNavigation', () => {
		it('should throw user menu is not defined', () => {
			abUiMobileUserNavigationObj = new AbUi_MobileUserNavigation()
			expect(() => { abUiMobileUserNavigationObj._renderMobileUserNavigation() })
				.toThrow('User menu not found (header ul.left .dropdown)')
		})
	})
	describe('_attachEventListeners', () => {
		it('should throw user menu is not defined', () => {
			abUiMobileUserNavigationObj = new AbUi_MobileUserNavigation()
			expect(() => { abUiMobileUserNavigationObj._attachEventListeners() })
				.toThrow('User menu container not found (#header-header .top-bar .left>li:last-child)')
		})
		it('should throw user menu is not defined', () => {
			'User menu container not found (#header-header .top-bar .left>li:last-child)'
			global.document.documentElement.innerHTML = new JSDOM(`
					<div id="header-header">
						<div class="top-bar">
							<ul class="left">
							<li></li>
							</ul>
						</div>
					</div>
			`).serialize()
			abUiMobileUserNavigationObj = new AbUi_MobileUserNavigation()
			expect(() => { abUiMobileUserNavigationObj._attachEventListeners() })
				.toThrow('Back element is not defined (.mobile-personal-nav .title.back)')
		})
	})
})
