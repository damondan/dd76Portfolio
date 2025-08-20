<!-- src/lib/components/LanguageSelector.svelte -->
<script lang="ts">
  import { locale } from 'svelte-i18n';
  import { changeLanguage } from '$lib/i18n';
  
  export let isMobile = false;
  
  let showDropdown = false;
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];
  
  $: currentLang = languages.find(lang => lang.code === $locale) || languages[0];
  
  function selectLanguage(langCode: string) {
    changeLanguage(langCode);
    showDropdown = false;
  }
  
  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
</script>

<div class="relative inline-block text-left">
  <!-- Language Toggle Button -->
  <button
    class={`${isMobile 
      ? 'w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
      : 'inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
    }`}
    on:click={toggleDropdown}
  >
    <span class="mr-2">{currentLang.flag}</span>
    <span class="mr-1">{currentLang.name}</span>
    <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d={showDropdown ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
    </svg>
  </button>

  <!-- Dropdown Menu -->
  {#if showDropdown}
    <div class={`${isMobile 
      ? 'mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5'
      : 'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50'
    }`}>
      <div class="py-1">
        {#each languages as language}
          <button
            class={`${$locale === language.code 
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' 
              : 'text-gray-700 dark:text-gray-200'
            } group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white`}
            on:click={() => selectLanguage(language.code)}
          >
            <span class="mr-3">{language.flag}</span>
            <span>{language.name}</span>
            {#if $locale === language.code}
              <svg class="ml-auto h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<!-- Close dropdown when clicking outside -->
{#if showDropdown}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div 
    class="fixed inset-0 z-10" 
    on:click={() => showDropdown = false}
  ></div>
{/if}