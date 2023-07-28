import { metaActivationPlatformId } from "@/settings/campaignSelection";
import { Lang } from "@/types/lang";

export default <Lang>{
  allThePeriod: "All the period",
  applyFilters: "Apply criteria below to find desired occasion.",
  approximationDisk: "Approximation Disk",
  availableLineItems: (platformName: string, platformSubject: string, isYoutube?: boolean): string =>
    `2. Select a Placement (${isYoutube ? "YouTube" : platformName}: ${platformSubject})`,

  availableLineItemsSubject: (platformId: string, isPlural = false): string => {
    switch (platformId) {
      case metaActivationPlatformId:
        return isPlural ? "Ad Sets" : "Ad Set";
      case "dv360":
        return isPlural ? "Line Items" : "Line Item";
      default:
        return "";
    }
  },

  authorizePlacementsDuplication:
    "In order to support multiple time zones, large geographic footprint, and varying temporal patterns, please authorize placement duplication. You will need to check the budget allocation among the placements of the insertion order and, if needed, to change it via DV360.",

  availableOccasions: "1. Select Occasions Set",
  availableOccasionsInSection: "2. Select Occasions Set",
  availableSections: "1. Available Sections",
  brand: "Brand",
  campaign: "Campaign",
  campaignName: "Campaign Name",
  campaignStatus: "Campaign Status",
  campaignSelection: "Select Campaign",
  client: "Advertiser",
  confirmOccasionDeletion: (num: number): string => `Confirm ${num} occasions deletion`,
  confirmStrategyDeletion: (name: string): string => `Confirm delete strategy '${name}'`,
  confirmDeleteMediaProperty: "Confirm delete media property?",
  confirmDeleteMediaPropertyText: (name: string): string => `Media Property "${name}" will be deleted.`,
  confirmDeleteSection: "Confirm delete section?",
  confirmDeleteSectionText: (name: string): string => `Section "${name}" will be deleted.`,
  changeOccasionStrategyWarning:
    "You have some unsaved changes in current selected strategy. Do you want to discard them and continue?",
  date: "Date",
  defaultApp: "Occasion Graph",
  discardChanges: "Do you want to discard changes?",
  doYouConfirmCancel: "Do you confirm the cancellation?",
  editSection: "Edit Section",
  editMediaProperty: "Edit Media Property",
  defineOccasionStrategy: "Define Occasion Strategy",
  activateInPaidMedia: "Activate in Paid Media",
  activateInOwnedMedia: "Activate in Owned Media",
  explorer: "Define Occasion Strategy",
  forceUnlink: "Force Unlink",
  forceUnlinkConfirm: "Please confirm you would like to initiate occasion unlink",
  geographyForm: "Markets",
  homeGreeting: (username: string): string => `Hello, ${username}.  What would you like to do?`,
  index: "Index",
  inputStrategicParams: "What you select here will impact an Occasion’s reach.",
  keywords: "Search",

  linkingOccasionsToLineItems: (name: string, isYoutube?: boolean): string =>
    `Send Occasion Targeting Parameters to ${name} Platform${isYoutube ? " (YouTube)" : ""}`,

  linkedOccasionsAndLineItems: (platformName: string, platformSubject: string, isYoutube?: boolean): string =>
    `3. Review Linked Occasions & Placements (${isYoutube ? "YouTube" : platformName}: ${platformSubject})`,

  linkedOccasionsAndLineItemsSubtitle: (platformName: string): string =>
    `Note: budget, dates, and final activation needs to be managed in ${platformName}.`,

  linkedOccasionsAndSections: "3. Review Linked Occasions & Sections",
  linkingSectionsToOccasions: "Linking Sections to Occasions",
  login: "Sign In",
  macroOccasion: "Macro-Occasion",
  macroLocation: "Macro-Location",
  makeSelection: "Please Make selections on the left side",
  manageColumns: "Manage columns",
  manageOwnMedia: "Manage Owned Media",
  myMediaProperties: "My Owned Media",
  myOccasions: "My Occasions Sets",
  media: "Media",
  newSection: "New Section",
  notAvailable: "N/A",
  occasionType: "Occasion Type",
  occasionsGraph: "Occasions Graph",
  occasionSelection: "Select Base Occasions",
  ownMediaManagerFull: "Activate Occasion Strategy in Owned Media",
  paidMediaManager: "Manage Paid Media",
  paidMediaManagerFull: "Activate Occasion Strategy in Paid Media",
  placementDuplication: "Placement Duplication",
  product: "Product",
  reach: "Reach",
  relevantOccasions: "Add Occasions to Occasions Set",
  releaseVersion: "Release version",
  reviewOccasion: "Review Occasion",
  refineOccasion: "Refine occasion",
  finalizeOccasionsSet: "Finalize Occasions Set",
  selectFromManyRelevantOccasions: (min: number, max: number, current: number): string =>
    `Choose ${min}-${max} occasions from ${current} relevant occasions.`,
  selectFromRelevantOccasions: (min: number, max: number): string =>
    `Choose ${min}-${max} occasions from relevant occasions.`,
  finalizeOccasionsSetSubtitle: "Review, refine and save occasions set.",
  startEndDates: "Start & End Dates",
  startEndDatesLabel: "Will be available after Campaign Selection",
  strategy: "Strategy",
  strategySelection: "Input Key Parameters",
  searchNoResults: "The search criteria returns no results",
  selectRelevantOccasions: "Please choose occasion from the relevant occasions above",
  settingMediaProperty: "Setting Up a New Media Property",
  sections: "Sections",
  time: "Time",
  unknown: "Unknown",
  validate: "Validate",
  validationConfirm: "Make sure you have uploaded SDF to DV360 before Validation",
  occasionSet: "Occasion Set",
  changeOccasionSet:
    "You have some unsaved changes in current selected Occasions Set. Do you want to discard them and continue?",
  service: "Service",
  strategyTool: "Strategy",
  catalogTool: "Catalog",
};
