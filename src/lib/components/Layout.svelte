<!-- src/lib/components/Layout.svelte -->
<script lang=ts>
  import { onMount } from 'svelte';
  
  export let currentLang = 'en';
  let isMobileMenuOpen = false;
  
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
  
 onMount(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (target && target instanceof Element) {
        if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
          isMobileMenuOpen = false;
        }
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<!-- Navigation Header -->
<nav class="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Logo/Brand -->
      <div class="flex-shrink-0">
        <h1 class="text-xl font-bold text-gray-900 dark:text-white">
          Your Portfolio
        </h1>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <slot name="nav-links" />
          <slot name="language-selector" />
        </div>
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button 
          class="menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          on:click={toggleMobileMenu}
        >
          <span class="sr-only">Open main menu</span>
          <!-- Hamburger icon -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile Navigation Menu -->
  {#if isMobileMenuOpen}
    <div class="mobile-menu md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <slot name="mobile-nav-links" />
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <slot name="mobile-language-selector" />
        </div>
      </div>
    </div>
  {/if}
</nav>

<!-- Main Content Area -->
<main class="min-h-screen bg-gray-50 dark:bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <slot />
  </div>
</main>

<!-- Footer -->
<footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Contact Info -->
      <div class="text-center md:text-left">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
        <slot name="contact-info" />
      </div>
      
      <!-- Quick Links -->
      <div class="text-center">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
        <slot name="quick-links" />
      </div>
      
      <!-- Social Links -->
      <div class="text-center md:text-right">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
        <slot name="social-links" />
      </div>
    </div>
    
    <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
      <p class="text-gray-600 dark:text-gray-400">
        © 2025 Your Portfolio. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<style>
  /* Ensure smooth transitions */
  .mobile-menu {
    transition: all 0.2s ease-in-out;
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    :global(html) {
      color-scheme: dark;
    }
  }
</style>