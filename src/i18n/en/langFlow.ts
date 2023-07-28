import { Status, YoutubeStatus } from "@/types/flowTypes";
import { Lang } from "@/types/lang";

export default <Lang>{
  status: {
    youtube: {
      [YoutubeStatus.LinkSuccess]: "Linked",
      [YoutubeStatus.PushStarted]: "Generating SDF",
      [YoutubeStatus.PushSuccess]: "SDF is Ready",
      [YoutubeStatus.PushError]: "Generate SDF Failed",
      [YoutubeStatus.PushValidationStarted]: "Validating In-Platform",
      [YoutubeStatus.PushValidationSuccess]: "In-Platform Validated",
      [YoutubeStatus.PushValidationError]: "In-Platform Failed",
      [YoutubeStatus.RecallStarted]: "Generating Recall SDF",
      [YoutubeStatus.RecallSuccess]: "Recall SDF is Ready",
      [YoutubeStatus.RecallError]: "Recall SDF Failed",
      [YoutubeStatus.RecallValidationStarted]: "Validating Recall",
      [YoutubeStatus.RecallValidationSuccess]: "Recall Validated",
      [YoutubeStatus.RecallValidationError]: "Recall SDF Failed",
    },

    [Status.PushedError]: "Push Failed",
    [Status.RecallError]: "Recall Failed",
  },

  toast: {
    youtube: {
      [YoutubeStatus.PushStarted]: "Generating Push SDF",
      [YoutubeStatus.PushSuccess]: "Push SDF was generated",
      [YoutubeStatus.PushError]: "Push SDF was not generated",
      [YoutubeStatus.RecallStarted]: "Generating Recall SDF",
      [YoutubeStatus.RecallSuccess]: "Recall SDF was generated",
      [YoutubeStatus.PushValidationStarted]: "In-Platform validation has been started",
      [YoutubeStatus.PushValidationSuccess]: "In-Platform validation has been finished",
      [YoutubeStatus.PushValidationError]: "In-Platform validation has been failed",
      [YoutubeStatus.RecallValidationStarted]: "Recall validation has been started",
      [YoutubeStatus.RecallValidationSuccess]: "Recall validation has been finished",
      [YoutubeStatus.RecallValidationError]: "Recall validation has been failed",
    },
    link_success: "Occasion was linked successfully",
    link_error: "Occasion was not linked",
    unlink_success: "Occasion was unlinked successfully",
    unlink_error: "Occasion was not unlinked",
  },
};
