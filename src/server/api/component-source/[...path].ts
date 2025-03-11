import { promises as fs } from 'fs'
import { resolve } from 'path'
import { defineEventHandler, createError } from 'h3'

export default defineEventHandler(async (event) => {
    try {
        const path = event.context.params.path
        const componentPath = resolve(process.cwd(), 'src/components/UI', `${path}.vue`)

        const content = await fs.readFile(componentPath, 'utf-8')
        return content
    } catch (error) {
        console.error('Error reading component file:', error)
        throw createError({
            statusCode: 404,
            message: 'Component not found',
            cause: error,
        })
    }
})
