import { Lang } from "@/types/lang";

export default <Lang>{
  activationPlatform: "Activation Platform",
  platforms: "Platforms",
  campaignWithName: (name: string): string => `Campaign (${name})`,
  date: "Date",
  dayParts: "Day Parts",
  insertionOrder: (name: string): string => `Insertion Order (${name})`,
  noKeyword: "No Keyword/Label",
  noSections: "No Sections",
  noIabCategory: "No IAB Category",
  optional: "(Optional)",
  selectAll: "Select All",
  url: "URL",
  uniqueId: "Unique ID",
  weekDays: "Week Days",
  createNewStrategy: "Create New Strategy",
  isForceUpdate: "Is Force Update",
};
