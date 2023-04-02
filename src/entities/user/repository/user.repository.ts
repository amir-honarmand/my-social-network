import { GetUserDto } from "./../dto/getUser.dto";
import { postgres } from "../../../database/postgres";
import {
  HttpStatusCodes,
  HttpStatusMessages,
} from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { User } from "../models/user.model";

export const UserRepository = (() => {
  async function getUser(getUserDto: GetUserDto): Promise<User | null> {
    const findUser: User = await postgres.getRepository(User).findOne({
      where: {
        id: getUserDto.userId,
      },
      select: [
        "id",
        "avatar",
        "createdAt",
        "email",
        "first_name",
        "last_name",
        "favorites_id",
        "user_name",
      ],
    });
    if (!findUser) {
      throw new BaseError(
        HttpStatusMessages.NOT_FOUND,
        HttpStatusCodes.NOT_FOUND,
        ""
      );
    }

    return findUser;
  }

  return {
    getUser,
  };
})();
