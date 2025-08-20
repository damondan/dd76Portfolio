<script lang="ts">
	import '../app.css';
	import '$lib/i18n';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { locale, waitLocale } from 'svelte-i18n';
	import { changeLanguage } from '$lib/i18n';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	// Wait for locale to load
	onMount(async () => {
		if (browser) {
			// Get saved language from localStorage
			const savedLocale = localStorage.getItem('locale');
			if (savedLocale) {
				changeLanguage(savedLocale);
			}
		}
		await waitLocale();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Wait for i18n to load before showing content -->
{#if $locale}
	{@render children?.()}
{:else}
	<!-- Loading screen -->
	<div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
		<div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
	</div>
{/if}