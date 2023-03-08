import { BaseError } from "../../../utils/error-handler";
import { AddStoryDto } from "../dto/add-story.dto";
declare const _default: {
    addStory: (addStoryDto: AddStoryDto) => Promise<boolean | BaseError>;
};
export default _default;
