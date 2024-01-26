
export interface IAchievement {
    id: number;
    current_progress: number;
    achievement_type: TAchievementType
}

export type TAchievementType = {
    id: number;
    name: string;
    cover: string;
    description: string;
    points: number;
    total_progress: number;
}