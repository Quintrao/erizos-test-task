export type NodeType = 'FILE' | 'FOLDER'

export type CustomFile = {
    name: string
    mime: string
    type: 'FILE'
}

export type CustomFolder = {
    name: string
    children?: (CustomFile | CustomFolder)[]
    type: 'FOLDER'
}