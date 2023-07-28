import { Lang } from "@/types/lang";

export default <Lang>{
  allChangesWillBeDiscarded: "All the changes will be discarded.",
  availableSections: "Available Sections",
  browserNotSupportVideo: "Your browser does not support the video tag.",
  makeSelectionOfBrand: "Please make selection of the Strategy",
  mediaProperty: "Media Property",
  createStrategy: "Create Strategy",
  updateStrategy: "Update Strategy",
  deleteStrategy: "Delete Strategy",
  newMediaProperty: (property: string): string => `Media Property "${property}" created successfully`,
  noDataAvailable: "No Data Available",
  noLinkedOccasions: "Nothing linked yet",
  noPermissions: "You do not have permission to work with this application or your session is expired.",
  noSavedOccasions: "Please make selection of the Occasions Set",
  noOccasionsForSelectedSection: "No occasions available for selected section",
  occasion: "Occasion",
  updateMediaProperty: (property: string): string => `Media Property "${property}" updated successfully`,
  createOccasionsSet: "Create Occasions Set",
  updateOccasion: "Update occasion",
  updateOccasionsSet: "Update Occasions Set",
};
