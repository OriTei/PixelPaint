import { Tile } from './Tile.model'

export interface Preset {
    difficulty: number
    name: string
    highlighted: Tile[]
}