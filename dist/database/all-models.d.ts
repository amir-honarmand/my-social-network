import { Comment } from "../entities/story/models/comment.model";
import { StoryDetails } from "../entities/story/models/story-details.model";
import { Story } from "../entities/story/models/story.model";
import { Storyboard } from "../entities/storyboard/models/storyboard.model";
import { Tag } from "../entities/tag/models/tag.model";
import { UserSession } from "../entities/user/models/user-session.model";
import { User } from "../entities/user/models/user.model";
declare const _default: (typeof User | typeof UserSession | typeof Comment | typeof Story | typeof StoryDetails | typeof Storyboard | typeof Tag)[];
export default _default;
