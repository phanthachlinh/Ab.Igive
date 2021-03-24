import AbHelpers from './helpers'
import { JSDOM } from 'jsdom'
import { ITranslationsDictionary } from '../types/general'
import { TEST_TRANSLATIONS } from '../mocks'
console.error = jest.fn((errmsg: string) => {
	throw errmsg
})
console.warn = jest.fn((errmsg: string) => {
	throw errmsg
})
declare var global: any
describe('getLanguage helper', () => {
	it('should fail lang undefined', () => {
		expect(() => { AbHelpers.getLanguage(undefined, TEST_TRANSLATIONS) }).toThrow('lang is undefined')
	})
	it('should throw language not is translations', () => {
		expect(() => { AbHelpers.getLanguage('ts', TEST_TRANSLATIONS) }).toThrow('translations do not contain a key of ts')
	})
	it('should not throw', () => {
		expect(() => { AbHelpers.getLanguage('hk', TEST_TRANSLATIONS) }).not.toThrow()
	})
	it('should return hk', () => {
		expect(AbHelpers.getLanguage('hk', TEST_TRANSLATIONS)).toBe('hk')
	})
})
describe('isTranslationsAndPageLangValid helper', () => {
	it('should throw contains no translations/keys', () => {
		expect(() => { AbHelpers.isTranslationsAndPageLangValid({}) }).toThrow('translations is empty')
	})
	it('should throw missing fallback language of en', () => {
		expect(() => { AbHelpers.isTranslationsAndPageLangValid({ hk: { ...TEST_TRANSLATIONS.hk } }) }).toThrow('translations does not contain fallback language of en')
	})
})
