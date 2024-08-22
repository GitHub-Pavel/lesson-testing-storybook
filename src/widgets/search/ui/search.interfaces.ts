export interface SearchInterface {
    filterCallback: (value: string, item: any) => boolean
    onSearching: (isSearching: boolean) => void
    onSearched: (items: any[]) => void
    items: any[]
}