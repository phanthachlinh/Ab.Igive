import AbUi_Footer from "./AbUi_Footer"
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
let abFooterObj: any
describe('AbUi_Footer', () => {
	describe('_renderIraiserLogo', () => {
		it('should fail footer no found', () => {
			abFooterObj = new AbUi_Footer('UNHCR')
			expect(() => { abFooterObj._renderIraiserLogo() }).toThrow('Footer not found')
		})
	})
	describe('_renderFooterMenu', () => {
		it('should fail footer no found', () => {
			abFooterObj = new AbUi_Footer('UNHCR')
			expect(() => { abFooterObj._renderFooterMenu() }).toThrow('Footer menu not found (.left>li:last-child ul)')
		})
	})
})
