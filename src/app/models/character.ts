export interface Character {
    name: string
    deceased: boolean
}

export interface CharacterQuery {
    hasNext: boolean
    characters: Character[]
}