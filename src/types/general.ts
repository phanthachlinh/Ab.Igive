export interface ITranslationsDictionary {
	[key: string]: ITranslation
}
export interface ITranslation {
	homepage: {
		contactUsTitle: string,
		contactUsSubtitle: string,
		contactUs: string
	},
	eventPage: {
		title: string,
		subTitle: string
	},
	shared: {
		seeAllCampaigns: string,
		searchForGlobalCamp: string,
		copyLink: string,
		donateNow: string,
		shareThisCampaign: string,
		setupMyFundpage: string,
		shareThisFundPage: string,
	}
}
