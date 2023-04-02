import { postgres } from "../../../database/postgres";
import { Storyboard } from "../models/storyboard.model";

export const storyboardRepository = (() => {
    async function addNewDay(): Promise<void> {
        await postgres.getRepository(Storyboard).insert({});
    }

    /* find current day in storyboard */
    async function findCurrentDay(): Promise<number> {
        const currentDay = await postgres.getRepository(Storyboard).find({
            select: {id: true},
            take: 1,
            order: {
                createdAt: 'DESC'
            }
        });

        return currentDay[0].id;
    }

    return {
        addNewDay,
        findCurrentDay
    };
})();