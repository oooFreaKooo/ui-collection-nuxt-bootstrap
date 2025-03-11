<template>
    <div class="">
        <!-- Hero Section -->
        <div class="bg-primary text-white py-5 mb-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h1 class="display-4 fw-bold mb-3">
                            Modern UI Components
                        </h1>
                        <p class="lead mb-4">
                            A carefully crafted collection of beautiful Bootstrap 5 components ready for your next project.
                        </p>
                        <div class="d-flex gap-3">
                            <button class="btn btn-light btn-lg">
                                Get Started
                            </button>
                            <button class="btn btn-outline-light btn-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 d-none d-md-block text-center">
                        <i class="bi bi-collection-fill display-1" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Search and Filter Section -->
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-6">
                    <div class="input-group input-group-lg">
                        <span class="input-group-text bg-white border-end-0">
                            <i class="bi bi-search" />
                        </span>
                        <input
                            v-model="searchQuery"
                            type="text"
                            class="form-control border-start-0 ps-0"
                            placeholder="Search components..."
                        >
                    </div>
                </div>
                <div class="col-md-4">
                    <select
                        v-model="selectedCategory"
                        class="form-select form-select-lg"
                    >
                        <option value="">
                            All Categories
                        </option>
                        <option
                            v-for="category in categories"
                            :key="category"
                            :value="category"
                        >
                            {{ category }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- Components Grid -->
            <div class="row g-4">
                <div
                    v-for="component in filteredComponents"
                    :key="component.id"
                    class="col-md-3"
                >
                    <div class="card h-100 border-0 shadow hover-shadow">
                        <div class="card-body p-4">
                            <div class="d-flex align-items-center mb-3">
                                <i class="bi bi-puzzle-fill text-primary fs-4 me-2" />
                                <h5 class="card-title mb-0">
                                    {{ component.name }}
                                </h5>
                            </div>
                            <p class="card-text text-muted">
                                {{ component.category }}
                            </p>
                            <NuxtLink
                                :to="'/components/' + component.category.toLowerCase() + '/' + component.id"
                                class="btn btn-primary w-100"
                            >
                                View Component
                                <i class="bi bi-arrow-right ms-2" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div
                v-if="filteredComponents.length === 0"
                class="text-center py-5"
            >
                <i class="bi bi-search display-1 text-muted mb-3" />
                <h3>No components found</h3>
                <p class="text-muted">
                    Try adjusting your search or filter criteria
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const selectedCategory = ref('')

const { components, categories } = useUIComponents()

const filteredComponents = computed(() => {
    return components.filter((component) => {
        const matchesSearch = component.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        const matchesCategory = !selectedCategory.value || component.category === selectedCategory.value
        return matchesSearch && matchesCategory
    })
})
</script>

<style scoped>
.hover-shadow {
  transition: transform 0.2s, box-shadow 0.2s;
}

.hover-shadow:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.input-group-text {
  color: #6c757d;
}
</style>
