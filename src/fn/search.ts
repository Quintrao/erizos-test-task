import { CustomFile, CustomFolder } from "../types/types"
import data from '../../Data.json'

type IndexedFile = {
    file: CustomFile
    path: string
}

export const getProcessedDataFromJson = (): IndexedFile[] | null=> {
    const result: IndexedFile[] = []
    if (!Array.isArray(data)) return null
    const typedData = data as CustomFolder[]
    const processFolder = (folder: CustomFolder, path: string) => {
        folder.children?.forEach((node) => {
            if (node.type === 'FILE') {
                result.push({ 
                    file: node, 
                    path: `${path}/${node.name}` 
                })
            }
            else if (node.type === 'FOLDER') {
                processFolder(node, `${path}/${node.name}`)
            }
        })
    }
    typedData.forEach((folder) => {
        processFolder(folder, `/${folder.name}`)
    })
    return result
    }

const indexed = getProcessedDataFromJson()

export const getFilesPathByFileName = (fileName: string): string[] => {
    if (!indexed) return []
    const filtered = indexed.filter((file) => file.file.name.includes(fileName)).map((file) => file.path)
    return filtered
}