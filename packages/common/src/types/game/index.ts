import type {
  LEADERBOARD_MODES,
  MEDIA_TYPES,
  QUESTION_TYPES,
  SCORING_MODES,
} from "@razzia/common/constants"

export type QuestionType = (typeof QUESTION_TYPES)[keyof typeof QUESTION_TYPES]

export type ScoringMode = (typeof SCORING_MODES)[keyof typeof SCORING_MODES]

export interface MultiQuestionOptions {
  scoringMode: ScoringMode
}

export type QuestionOptions = MultiQuestionOptions

export interface Player {
  id: string
  clientId: string
  connected: boolean
  username: string
  points: number
  streak: number
}

export interface Answer {
  playerId: string
  answerIds: number[]
  points: number
}

export type QuestionMediaType =
  | (typeof MEDIA_TYPES)[keyof typeof MEDIA_TYPES]
  | undefined

export interface QuestionMedia {
  type?: QuestionMediaType
  url: string
}

export interface Question {
  type: QuestionType
  question: string
  media?: QuestionMedia
  answers: string[]
  solutions: number[]
  cooldown: number
  time: number
  maxPoints?: number
  penalty?: number
  options?: QuestionOptions
}

export type LeaderboardMode =
  (typeof LEADERBOARD_MODES)[keyof typeof LEADERBOARD_MODES]

export interface QuizzSettings {
  /** How often the leaderboard interrupts the game. */
  leaderboard: LeaderboardMode
}

export interface Quizz {
  subject: string
  settings: QuizzSettings
  questions: Question[]
}

export type QuizzWithId = Quizz & { id: string }

export interface QuizzMeta {
  id: string
  subject: string
}

export interface GameUpdateQuestion {
  current: number
  total: number
}

export interface PlayerAnswerRecord {
  playerName: string
  answerIds: number[] | null
}

export type QuestionResult = Question & {
  playerAnswers: PlayerAnswerRecord[]
}

export interface GameResultPlayer {
  username: string
  points: number
  rank: number
}

export interface GameResult {
  id: string
  subject: string
  date: string
  players: GameResultPlayer[]
  questions: QuestionResult[]
}

export interface GameResultMeta {
  id: string
  subject: string
  date: string
  playerCount: number
}
