import type { Component } from 'vue'

interface UIComponent {
    id: string
    name: string
    category: string
    component: Component
    path: string
}

export function useUIComponents () {
    const components = reactive<UIComponent[]>([])

    // Use relative path for glob to ensure it works in production
    const modules = import.meta.glob('../components/UI/**/*.vue', { eager: true })

    // Process each component file
    for (const path in modules) {
        const match = path.match(/\/UI\/(.+?)\/(.+?)\.vue$/)
        if (match) {
            const [
                , category, filename,
            ] = match
            const id = filename
            // Convert component name from kebab-case to proper display name
            const name = filename
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')

            const mod = modules[path] as { default: Component }

            components.push({
                id,
                name,
                category,
                component: mod.default,
                path: `${category}/${filename}`,
            })
        }
    }

    // Get unique categories
    const categories = computed(() =>
        [...new Set(components.map(c => c.category))],
    )

    // Get components by category
    const getComponentsByCategory = (category: string) =>
        components.filter(c => c.category === category)

    // Get a specific component by ID
    const getComponentById = (id: string) =>
        components.find(c => c.id === id)

    // Get related components (same category, excluding the current component)
    const getRelatedComponents = (currentId: string, limit = 3) => {
        const current = getComponentById(currentId)
        if (!current) { return [] }

        return components
            .filter(c => c.category === current.category && c.id !== currentId)
            .slice(0, limit)
    }

    return {
        components,
        categories,
        getComponentsByCategory,
        getComponentById,
        getRelatedComponents,
    }
}
