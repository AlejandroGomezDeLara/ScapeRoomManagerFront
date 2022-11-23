import { GameReview } from "./GameReview"

export interface GameReviewSummary {
    avgStars: number,
    fiveStars: number,
    fiveStarsPercentage: number,
    fourStars: number,
    fourStarsPercentage: number,
    threeStars: number,
    threeStarsPercentage: number,
    twoStars: number,
    twoStarsPercentage: number,
    oneStars: number,
    oneStarsPercentage: number,
    reviewsCount: number,
    firstReview:GameReview,
}