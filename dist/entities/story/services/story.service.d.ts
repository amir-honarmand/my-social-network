import { BaseError } from "../../../utils/error-handler";
import { AddStoryDto } from "../dto/add-story.dto";
declare const _default: {
    addStory: (addStoryDto: AddStoryDto, file: Express.Multer.File, userId: number) => Promise<boolean | BaseError>;
};
export default _default;
