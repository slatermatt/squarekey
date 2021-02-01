<template>
	<router-link
		:class="[
			'relative block w-full max-w-logo',
			'xl:max-w-logo-xl',
		]"
		to="/"
	>
		<placeholder ratio="pt-logo">
			<img
				src="/static/img/logo-trans.png"
				alt="Squarekey"
			>
		</placeholder>
	</router-link>
</template>
