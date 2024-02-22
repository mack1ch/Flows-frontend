export interface IAchievement {
    id: number;
    currentProgress: number;
    achievementType: TAchievementType;
}

export type TAchievementType = {
    id: number;
    name: string;
    cover: string;
    description: string;
    points: number;
    totalProgress: number;
};
