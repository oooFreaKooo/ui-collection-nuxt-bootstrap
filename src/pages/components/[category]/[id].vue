<template>
    <div class="container py-5">
        <nav
            aria-label="breadcrumb"
            class="mb-4"
        >
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <NuxtLink
                        to="/"
                        class="text-decoration-none"
                    >
                        <i class="bi bi-house-door me-1" />Home
                    </NuxtLink>
                </li>
                <li class="breadcrumb-item">
                    {{ component?.category }}
                </li>
                <li
                    class="breadcrumb-item active"
                    aria-current="page"
                >
                    {{ component?.name }}
                </li>
            </ol>
        </nav>

        <div class="row mb-4">
            <div class="col">
                <h1 class="display-6 mb-0">
                    {{ component?.name }}
                </h1>
                <p class="text-muted mt-2">
                    Category: {{ component?.category }}
                </p>
            </div>
        </div>

        <!-- Preview Section -->
        <div class="border rounded-4 mb-4 bg-white shadow-sm">
            <div class="d-flex justify-content-between align-items-center mb-4 p-3">
                <h3 class="mb-0">
                    Preview
                </h3>
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-primary btn-sm me-2">
                        <i class="bi bi-phone me-1" />Mobile
                    </button>
                    <button class="btn btn-outline-primary btn-sm me-2">
                        <i class="bi bi-tablet me-1" />Tablet
                    </button>
                    <button class="btn btn-outline-primary btn-sm">
                        <i class="bi bi-laptop me-1" />Desktop
                    </button>
                    <!-- Code Section -->
                    <AppPopover
                        trigger-text="View Code"
                        overlay
                        padding="0"
                        :header="false"
                        class="ms-2"
                    >
                        <VueCodeHighlighter
                            v-if="componentCode"
                            :title="component?.name"
                            :code="componentCode"
                            lang="ts"
                            :max-height="700"
                        />
                    </AppPopover>
                </div>
            </div>
            <div class="preview-content border p-3">
                <ClientOnly>
                    <component
                        :is="componentToRender"
                        v-if="componentToRender"
                    />
                </ClientOnly>
            </div>
        </div>

        <div class="mt-5 pt-3">
            <h3 class="h4 mb-4">
                Related Components
            </h3>
            <div class="row g-4">
                <div
                    v-for="relatedComponent in relatedComponents"
                    :key="relatedComponent.id"
                    class="col-md-4"
                >
                    <div class="card h-100 border-0 shadow-sm hover-shadow">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ relatedComponent.name }}
                            </h5>
                            <p class="card-text text-muted">
                                {{ relatedComponent.category }}
                            </p>
                            <NuxtLink
                                :to="'/components/' + relatedComponent.category.toLowerCase() + '/' + relatedComponent.id"
                                class="btn btn-outline-primary"
                            >
                                View Component
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { VueCodeHighlighter } from 'vue-code-highlighter'

const route = useRoute()
const { getComponentById, getRelatedComponents } = useUIComponents()

const component = computed(() =>
    getComponentById(String(route.params.id)),
)

const componentToRender = computed(() =>
    component.value?.component,
)

const { data: componentCode } = useFetch(`/api/component-source/${component.value?.path}`)

const relatedComponents = computed(() =>
    getRelatedComponents(String(route.params.id)),
)
</script>

<style scoped lang="scss">
.hover-shadow {
  transition: transform 0.2s, box-shadow 0.2s;
}

.hover-shadow:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.preview-content {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.hljs) {
  color: var(--bs-dark);
  background-color: var(--bs-light);
  border-radius: 0.5rem;
}

:deep(.hljs-comment),
:deep(.hljs-quote) {
  color: var(--bs-info);
  font-style: italic;
}

:deep(.hljs-doctag),
:deep(.hljs-keyword),
:deep(.hljs-formula) {
  color: var(--bs-info);
}

:deep(.hljs-section),
:deep(.hljs-name),
:deep(.hljs-selector-tag),
:deep(.hljs-deletion),
:deep(.hljs-subst) {
  color: var(--bs-danger);
}

:deep(.hljs-literal) {
  color: var(--bs-success);
}

:deep(.hljs-string),
:deep(.hljs-regexp),
:deep(.hljs-addition),
:deep(.hljs-attribute),
:deep(.hljs-meta .hljs-string) {
  color: var(--bs-success);
}

:deep(.hljs-attr),
:deep(.hljs-variable),
:deep(.hljs-template-variable),
:deep(.hljs-type),
:deep(.hljs-selector-class),
:deep(.hljs-selector-attr),
:deep(.hljs-selector-pseudo),
:deep(.hljs-number) {
  color: var(--bs-info);
}

:deep(.hljs-symbol),
:deep(.hljs-bullet),
:deep(.hljs-link),
:deep(.hljs-meta),
:deep(.hljs-selector-id),
:deep(.hljs-title) {
  color: var(--bs-info);
}

:deep(.hljs-built_in),
:deep(.hljs-title.class_),
:deep(.hljs-class .hljs-title) {
  color: var(--bs-warning);
}

:deep(.hljs-emphasis) {
  font-style: italic;
}

:deep(.hljs-strong) {
  font-weight: 700;
}

:deep(.hljs-link) {
  text-decoration: underline;
  color: var(--bs-info);
}

:deep(pre) {
  margin: 0;
  border-radius: 0 0 0.75rem 0.75rem;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--bs-light);
    border-radius: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--bs-dark);
    border-radius: 0;

    &:hover {
      background-color: var(--bs-dark);
    }
  }

  code {
    padding: 1rem;
    line-height: 1.5;
  }
}

:deep(.wrapper-code-highlight) {
  border-radius: 1rem;
  border: 2px solid var(--bs-primary);
  overflow: hidden;
  box-shadow: 0 4px 6px 4px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

:deep(.header-code-highlight) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  color: var(--bs-light);
}

:deep(.wrapper-title-code-highlight) {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--bs-light);
  background-color: var(--bs-secondary);
}

:deep(.wrapper-copy-code-highlight) {
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--bs-info);

  &:hover {
    background-color: var(--bs-dark);
    color: var(--bs-light);
  }
}
</style>
