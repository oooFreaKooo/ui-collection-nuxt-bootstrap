<template>
    <div class="d-flex flex-column min-vh-100">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <NuxtLink
                    class="navbar-brand fw-bold"
                    to="/"
                >
                    <i class="bi bi-collection me-2" />UI Collection
                </NuxtLink>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span class="navbar-toggler-icon" />
                </button>
                <div
                    id="navbarNav"
                    class="collapse navbar-collapse"
                >
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <NuxtLink
                                class="nav-link"
                                to="/"
                            >Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="https://github.com/your-repo"
                                target="_blank"
                            >
                                <i class="bi bi-github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="flex-grow-1">
            <NuxtPage />
        </div>

        <footer class="bg-dark text-light py-4 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="mb-3">
                            UI Collection
                        </h5>
                        <p class="text-muted mb-0">
                            A modern collection of Bootstrap 5 components.
                        </p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <div class="social-links">
                            <a
                                href="#"
                                class="text-light me-3"
                            ><i class="bi bi-twitter" /></a>
                            <a
                                href="#"
                                class="text-light me-3"
                            ><i class="bi bi-github" /></a>
                            <a
                                href="#"
                                class="text-light"
                            ><i class="bi bi-linkedin" /></a>
                        </div>
                    </div>
                </div>
                <hr class="my-4">
                <div class="text-center text-muted">
                    <small>&copy; {{ new Date().getFullYear() }} UI Collection. All rights reserved.</small>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.social-links a {
  font-size: 1.25rem;
  transition: opacity 0.2s;
}

.social-links a:hover {
  opacity: 0.8;
}
</style>
