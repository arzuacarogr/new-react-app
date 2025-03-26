export interface WidgetDetail {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string | null;
  backgroundColor: string | null;
  link: string | null;
  linkText: string | null;
  secondLink: string | null;
  secondLinkText: string | null;
  thirdLink: string | null;
  thirdLinkText: string | null;
  linkTarget: string | null;
  displayOrder: number;
  bankIdForBanksApps: string;
  buttonIsActive: boolean;
  secondButtonIsActive: boolean;
  secondButtonText: string | null;
  popUpText: string | null;
  imagePath: string;
  createdOn: string;
  updatedOn: string | null;
}

export interface Widget {
  id: number;
  name: string;
  shortDescription: string;
  type: number;
  link: string | null;
  linkText: string | null;
  details: WidgetDetail[];
}

export interface Slider {
  id: number;
  name: string;
  link: string;
  imagePath: string;
  alternateText: string | null;
  displayOrder: number;
  linkTarget: string | null;
  isSendEvent: boolean;
  isShowPopUp: boolean;
  popUpTitle: string | null;
  popUpDescription: string | null;
  popUpButtonText: string | null;
  popUpButtonColor: string | null;
}

export interface CreditAnalysisCard {
  amountMinimum: number;
  amountMaximum: number;
  maturityMinimum: number;
  maturityMaximum: number;
  minimumAnnualCostRate: number;
  maximumAnnualCostRate: number;
  financeType: number;
  suggested: {
    amount: number;
    annualCostRate: number;
    interestRate: number;
    maturity: number;
    monthlyInstallment: number;
    totalAmountWithoutExpense: number;
    totalExpense: number;
    totalAmount: number;
  };
}

export interface NativeCardPictures {
  desktopImagePath: string | null;
  mobileImagePath: string | null;
  tabletImagePath: string | null;
  qrImagePath: string | null;
  altTitle: string | null;
}

export interface NativeCardOfferCampaign {
  description: string;
  displayOrder: number;
  type: number;
}

export interface NativeCard {
  id: number;
  pageId: number;
  type: number;
  name: string;
  deviceStatus: number;
  redirectionType: number;
  categoryId: number;
  productId: number;
  bankId: number;
  bankName: string | null;
  bankLogoPath: string | null;
  link: string | null;
  linkType: number;
  target: string | null;
  listViewOrder: number;
  isActiveRecourse: boolean;
  recourseLink: string;
  wenUnitRevenue: number;
  appUnitRevenue: number;
  maturityMinimum: number | null;
  maturityMaximum: number | null;
  amountMinimum: number | null;
  amountMaximum: number | null;
  alternativeCategoryId: number;
  alternativeProductId: number;
  alternativeProductIsShowSponsor: boolean;
  alternativeProductSponsorText: string | null;
  rate: string | null;
  maturity: number | null;
  amount: number | null;
  productType: number;
  productTypeText: string | null;
  isOfferPopUp: boolean;
  offerRateText: string | null;
  offerAmountText: string | null;
  offerCTAText: string | null;
  offerProductName: string | null;
  offerSpecialDescription: string | null;
  isShowSponsor: boolean;
  conditions: string | null;
  isConditionActive: boolean;
  nativeCardOfferCampaigns: NativeCardOfferCampaign[] | null;
  nativeCardPictures: NativeCardPictures;
  nativeCardAttributes: NativeCardAttribute[];
  isActiveInformationTooltip: boolean;
  informationTooltipText: string | null;
  informationTooltipLeftToRight: boolean | null;
  informationTooltipTopToDown: boolean | null;
}

export interface Page {
  id: number;
  code: string;
  name: string;
  category: string;
  midCategory: string;
  subCategory: string;
  type: string;
  pageType: string | null;
  sharingType: string;
  heroButtonText: string | null;
  whatIsTitle: string | null;
  desktopImagePath1: string | null;
  mobileImagePath1: string | null;
  desktopImagePath2: string | null;
  mobileImagePath2: string | null;
  mobileAdvertisementRefresh: string | null;
  webAdvertisementRefresh: string | null;
}

export interface SeoInfo {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  headingTitle: string;
  heroDescription: string | null;
  friendlyUrl: string | null;
  entity: string | null;
  entityId: string | null;
  statusParameters: number;
  image: string;
  badge: string | null;
  shortDesc: string | null;
  page: string | null;
}

export interface Advertisement {
  id: number;
  type: number;
  deviceType: number;
  elementId: string;
  height: number | null;
  width: number | null;
  advertisementScript: {
    id: number;
    name: string;
    headerCode: string;
    bodyCode: string;
  };
  isLazyStatus: boolean;
}

export interface BreadCrumb {
  item: string;
  url: string;
}

export interface NativeCardAttribute {
  id: number;
  name: string;
  value: string;
}

export interface BankPartner {
  id: number;
  name: string;
  logoPath: string;
  link: string;
}

export interface ParityBand {
  id: number;
  name: string;
  value: number;
  change: number;
}

export interface Data {
  widgets: Widget[];
  sliders: Slider[];
  creditAnalysisCard: CreditAnalysisCard;
  nativeCards: NativeCard[];
  pageId: number;
  page: Page;
  seoInfo: SeoInfo;
  advertisements: Advertisement[];
  bankPartners: BankPartner[];
  breadCrumb: BreadCrumb[];
  parityBandModule: ParityBand[];
} 