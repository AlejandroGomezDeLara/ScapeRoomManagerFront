import { GameReview } from "./GameReview"

export interface GameReviewSummary {
    avgStars: number,
    fiveStars: number,
    fourStars: number,
    oneStars: number,
    reviewsCount: number,
    threeStars: number,
    firstReview:GameReview,
    twoStars: number
}