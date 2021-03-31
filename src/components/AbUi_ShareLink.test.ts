declare var global: any
import { JSDOM } from 'jsdom'
import { TEST_TRANSLATIONS } from '../mocks'
import AbUi_ShareLink from './AbUi_ShareLink'
let abShareLinkComponentObj: any
console.warn = jest.fn((errmsg: string) => {
	throw errmsg
})
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
/**
this.newProjectWidgetButton = document.querySelector('#events-show #widget-new-project a')
this.newProjectWidgetContainer = document.querySelector('#widget-new-project')
this.projectDataContainer = document.querySelector('.p2p-detail-data>div')
**/
describe('AbUi_ShareLink', () => {

	describe('getShareLinkComponent', () => {

		it('should match en snapshot', () => {
			global.document.documentElement.innerHTML = new JSDOM(``)
			abShareLinkComponentObj = new AbUi_ShareLink(TEST_TRANSLATIONS, 'en')
			expect(abShareLinkComponentObj.getShareLinkComponent()).toMatchSnapshot()
		})

		it('should match hk snapshot', () => {
			global.document.documentElement.innerHTML = new JSDOM(``)
			abShareLinkComponentObj = new AbUi_ShareLink(TEST_TRANSLATIONS, 'hk')
			expect(abShareLinkComponentObj.getShareLinkComponent()).toMatchSnapshot()
		})
	})



	describe('_attachEventListener', () => {

		it('should show throw share link does not exist', () => {
			global.document.documentElement.innerHTML = new JSDOM(`<body id="events-show"></body>`).serialize()
			abShareLinkComponentObj = new AbUi_ShareLink(TEST_TRANSLATIONS, 'en')

			expect(() => { abShareLinkComponentObj.attachEventListener() }).toThrow('Share link button not found')
		})


	})
	// describe('_shareLinkButtonClickHandler', () => {
	// 	it('should throw share link Button does not exist', () => {
	// 		global.document.documentElement.innerHTML = new JSDOM(``).serialize()
	// 		abShareLinkComponentObj = new AbUi_ShareLink(TEST_TRANSLATIONS, 'en')
	// 		abShareLinkComponentObj._shareLinkButtonClickHandler(document.createEvent('click'))
	// 		let shareLinkButton: HTMLButtonElement | null = document.querySelector('.share-link button')
	// 		expect(() => { shareLinkButton ?.click() }).toThrow('Share link input not found')
	// 	})
	// })
})
