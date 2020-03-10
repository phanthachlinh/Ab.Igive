export interface ITranslationsDictionary {
	[key: string]: ITranslation
}
export interface ITranslation {
	homepage: {
		additionalEventListItem: {
			title: string,
			subtitle: string,
			buttonText: string,
			buttonLink: string
		}
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
		createMyFundPage: string
	}
}
