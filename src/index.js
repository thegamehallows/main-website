function load(page) {
	// Page wrapper
	const navbar = document.querySelector('#navigation');
	navbar.classList.add('flex', 'z-100', 'bg-blue-600', 'border-b', 'border-b-2', 'border-b-slate-100/25', 'w-full', 'h-16', 'px-8', 'fixed', 'top-0', 'md:px-36', 'dark:bg-blue-800'); 
	const navbarContent = `
	<button class="h-full py-auto"><a href="/"><img src="/static/assets/logo.png" class="w-10 h-auto rounded-md shadow-lg" /></a></button>
	<button class="h-full"><button class="bg-white text-sm font-medium h-8 px-7 mx-3 my-auto rounded-full shadow-lg"><a class="bg-gradient-to-br from-blue-600 via-indigo-500 to-fuchsia-600 bg-clip-text text-transparent" href="./join.html">Join</a></button></button>
	<button class="h-full px-2 py-auto hover:bg-slate-50/5 md:hidden hover:border-b-4 hover:border-b-blue-500"><a href="./about.html"><img src="/static/icons/users.svg" class="w-8" /></a></button>
	<button class="h-full px-2 py-auto hover:bg-slate-50/5 md:hidden hover:border-b-4 hover:border-b-blue-500"><a href="./terms.html"><img src="/static/icons/terms.svg" class="w-8" /></a></button>
	<button class="h-full px-2 py-auto hover:bg-slate-50/5 md:hidden hover:border-b-4 hover:border-b-blue-500"><a href="./infos.html"><img src="/static/icons/info.svg" class="w-8" /></a></button>
	<button class="hidden h-full px-4 py-auto md:block hover:bg-slate-50/5 hover:border-b-4 hover:border-b-blue-500"><a href="./about.html" class="text-sm font-medium">About</a></button>
	<button class="hidden h-full px-4 py-auto md:block hover:bg-slate-50/5 hover:border-b-4 hover:border-b-blue-500"><a href="./terms.html" class="text-sm font-medium">Terms</a></button>
	<button class="hidden h-full px-4 py-auto md:block hover:bg-slate-50/5 hover:border-b-4 hover:border-b-blue-500"><a href="./infos.html" class="text-sm font-medium">Informations</a></button>`
	navbar.innerHTML = navbarContent;
	
	// App
	const app = document.querySelector('#content');
	app.classList.add('mt-16');
	
	// Footer
	const footer = document.createElement('footer'); // Creates the element
	footer.id = 'footer'; // Sets the ID to 'footer'
	footer.classList.add('text-center', 'p-8'); // Tailwind classes
	const footerContent = '©2023 - happex' // Creates content
	footer.innerText = footerContent; // Sets footer's inner text to created content
	document.body.appendChild(footer); // Add the element to HTML page
	
	// Head
	const docHead = document.head;
	const descriptions = {
		about:"Just a group of gamers who stream and make games with the resources they have. It's that easy to join us, you just have to go on the joining page and then choose your platform. We are open to any gamer. Mobile, desktop, Xbox, Nintendo Switch... There is a specified comfortable place for each gamer no matter where he plays.",
		infos:"Informations about The Game Hallows.",
		join:"Join the Game Hallows. It's open to everyone and it's free :) Everyone will welcome you as a king.",
		terms:"Read the Game Hallows' terms."
	}
	const headContent = `
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>The Game Hallows - ${page}</title>
	
	<link rel="favicon" href="/static/assets/favicon.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
	<script src="https://cdn.tailwindcss.com"></script>
	<script>
		tailwind.config = {
			theme: {
				fontFamily: {
					'sans': ["'Lexend'", "sans-serif"],
				} 
			} 
		} 
	</script>
	<meta property="og:title" content="The Game Hallows - ${page}" />
	<meta property="og:description" content="${descriptions[page]}" />
	<meta property="og:image" content="/static/assets/banner.png" />
	<meta property="og:color" content="#a21caf" />
	<meta property="og:author" content="happex, Vanxdium" />`
	docHead.innerHTML = headContent;
}
