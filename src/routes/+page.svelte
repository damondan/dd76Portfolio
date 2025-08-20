<script lang="ts">
  import Layout from '$lib/components/Layout.svelte';
  import LanguageSelector from '$lib/components/LanguageSelector.svelte';
  import { _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$_('hero.title')} - DD76Portfolio</title>
  <meta name="description" content={$_('hero.subtitle')} />
</svelte:head>

<Layout>
  <!-- Navigation Links -->
  <div slot="nav-links" class="flex space-x-4">
    <a href="#home" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
      {$_('nav.home')}
    </a>
    <a href="#about" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
      {$_('nav.about')}
    </a>
    <a href="#projects" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
      {$_('nav.projects')}
    </a>
    <a href="#contact" class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
      {$_('nav.contact')}
    </a>
  </div>
  
  <!-- Desktop Language Selector -->
  <div slot="language-selector">
    <LanguageSelector />
  </div>
  
  <!-- Mobile Navigation Links -->
  <div slot="mobile-nav-links">
    <a href="#home" class="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
      {$_('nav.home')}
    </a>
    <a href="#about" class="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
      {$_('nav.about')}
    </a>
    <a href="#projects" class="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
      {$_('nav.projects')}
    </a>
    <a href="#contact" class="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium">
      {$_('nav.contact')}
    </a>
  </div>
  
  <!-- Mobile Language Selector -->
  <div slot="mobile-language-selector">
    <LanguageSelector isMobile={true} />
  </div>
  
  <!-- Main Content -->
  <div class="space-y-20">
    
    <!-- Hero Section -->
    <section id="home" class="text-center py-20">
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
        {$_('hero.title')}
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        {$_('hero.subtitle')}
      </p>
      <a 
        href="#projects" 
        class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        {$_('hero.cta')}
      </a>
    </section>
    
    <!-- About Section -->
    <section id="about" class="py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {$_('about.title')}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          {$_('about.description')}
        </p>
        
        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div class="text-3xl font-bold text-blue-600 mb-2">3+</div>
            <div class="text-gray-600 dark:text-gray-300">{$_('about.experience')}</div>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div class="text-3xl font-bold text-blue-600 mb-2">20+</div>
            <div class="text-gray-600 dark:text-gray-300">{$_('about.projects')}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Projects Section -->
    <section id="projects" class="py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {$_('projects.title')}
        </h2>
      </div>
      
      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Example Project Card - Replace with your actual projects -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <div class="text-white text-center">
              <h3 class="text-xl font-bold">Chat Application</h3>
              <p class="text-sm opacity-90">Real-time messaging</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Real-time Chat App
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Full-stack chat application built with React, Socket.io, and MongoDB Atlas.
            </p>
            <div class="mb-4">
              <span class="text-sm text-gray-500 dark:text-gray-400">{$_('projects.technologies')}:</span>
              <div class="flex flex-wrap gap-2 mt-1">
                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
                <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Socket.io</span>
                <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">MongoDB</span>
              </div>
            </div>
            <div class="flex justify-between">
              <a 
                href="https://your-chat-app.vercel.app" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {$_('projects.viewProject')} →
              </a>
              <a 
                href="https://github.com/yourusername/chat-app" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {$_('projects.viewCode')} →
              </a>
            </div>
          </div>
        </div>

        <!-- Add more project cards here -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <div class="text-white text-center">
              <h3 class="text-xl font-bold">E-commerce Site</h3>
              <p class="text-sm opacity-90">Online shopping platform</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              E-commerce Platform
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Complete online store with cart, payments, and admin dashboard.
            </p>
            <div class="mb-4">
              <span class="text-sm text-gray-500 dark:text-gray-400">{$_('projects.technologies')}:</span>
              <div class="flex flex-wrap gap-2 mt-1">
                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Svelte</span>
                <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">Node.js</span>
                <span class="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">Stripe</span>
              </div>
            </div>
            <div class="flex justify-between">
              <a 
                href="https://your-store.vercel.app" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {$_('projects.viewProject')} →
              </a>
              <a 
                href="https://github.com/yourusername/ecommerce" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {$_('projects.viewCode')} →
              </a>
            </div>
          </div>
        </div>

        <!-- Placeholder for third project -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <div class="text-white text-center">
              <h3 class="text-xl font-bold">Coming Soon</h3>
              <p class="text-sm opacity-90">Next project</p>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Your Next Project
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Description of your upcoming project...
            </p>
            <div class="flex justify-between">
              <span class="text-gray-400">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {$_('contact.title')}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {$_('contact.subtitle')}
        </p>
        
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-600 dark:text-blue-400 text-xl">📧</span>
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{$_('contact.email')}</h3>
              <a href="mailto:your.email@example.com" class="text-blue-600 dark:text-blue-400 hover:underline">
                your.email@example.com
              </a>
            </div>
            
            <div class="text-center">
              <div class="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-600 dark:text-blue-400 text-xl">📱</span>
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{$_('contact.phone')}</h3>
              <a href="tel:+1234567890" class="text-blue-600 dark:text-blue-400 hover:underline">
                +1 (234) 567-8900
              </a>
            </div>
            
            <div class="text-center">
              <div class="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-600 dark:text-blue-400 text-xl">📍</span>
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">{$_('contact.location')}</h3>
              <span class="text-gray-600 dark:text-gray-300">
                Your City, Country
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Footer Content -->
  <div slot="contact-info" class="space-y-2">
    <p class="text-gray-600 dark:text-gray-400">your.email@example.com</p>
    <p class="text-gray-600 dark:text-gray-400">+1 (234) 567-8900</p>
    <p class="text-gray-600 dark:text-gray-400">Your City, Country</p>
  </div>

  <div slot="quick-links" class="space-y-2">
    <a href="#about" class="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
      {$_('nav.about')}
    </a>
    <a href="#projects" class="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
      {$_('nav.projects')}
    </a>
    <a href="#contact" class="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
      {$_('nav.contact')}
    </a>
  </div>

  <div slot="social-links" class="flex justify-center md:justify-end space-x-4">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
       class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
      GitHub
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
       class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
      LinkedIn
    </a>
    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
       class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
      Twitter
    </a>
  </div>
</Layout>