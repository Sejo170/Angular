export interface InfoApiDisney {
    info: Info
    data: CharacterDS[]
}

export interface Info {
    count: number
    totalPages: number
    previousPage: any
    nextPage: string
}

export interface CharacterDS {
    _id: number
    films: string[]
    shortFilms: string[]
    tvShows: string[]
    videoGames: string[]
    parkAttractions: string[]
    allies: any[]
    enemies: any[]
    name: string
    imageUrl?: string
    url: string
}