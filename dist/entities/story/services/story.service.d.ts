import { BaseError } from "../../../utils/error-handler";
import { AddStoryDto } from "../dto/add-story.dto";
import { DeleteStoryDto } from "../dto/delete-story.dto";
import { EditStoryDto } from "../dto/edit-story.dto";
import { GetAllStoryDto } from "../dto/get-all-story.dto";
import { GetStoryDto } from "../dto/get-story.dto";
declare const _default: {
    addStory: (addStoryDto: AddStoryDto, file: Express.Multer.File, userId: number) => Promise<boolean | BaseError>;
    getStory: (getStoryDto: GetStoryDto) => Promise<object | BaseError>;
    getAllStory: (getAllStoryDto: GetAllStoryDto) => Promise<object | BaseError>;
    editStory: (editStoryDto: EditStoryDto, userId: number) => Promise<boolean | BaseError>;
    deleteStory: (deleteStoryDto: DeleteStoryDto, userId: number) => Promise<boolean | BaseError>;
};
export default _default;
