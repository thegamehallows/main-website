function load(page) {
	// Page wrapper
	const navbar = document.querySelector('#navigation');
	const navbarContent = `
	<button class="h-full py-auto"><a href="/"><img src="/static/assets/logo.png" class="w-10 h-auto rounded-md shadow-lg" /></a></button>
	<button class="h-full"><button class="bg-gradient-to-br from-blue-600 via-indigo-500 to-fuchsia-600 text-white text-sm font-medium h-8 px-5 mx-4 my-auto rounded-full"><a href="./join.html">Join</a></button></button>
	<button class="h-full px-2 py-auto hover:bg-slate-50/5 md:hidden hover:border-b-4 hover:border-b-blue-500"><a href="./about.html"><img src="/static/icons/users.svg" class="w-8" /></a></button>
	<button class="h-full px-2 py-auto hover:bg-slate-50/5 md:hidden hover:border-b-4 hover:border-b-blue-500"><a href="./terms.html"><img src="/static/icons/terms.svg" class="w-8" /></a></button>
	<button class="h-full px-2 py-auto hover:bg-slate-50/5 md:hidden hover:border-b-4 hover:border-b-blue-500"><a href="./infos.html"><img src="/static/icons/info.svg" class="w-8" /></a></button>
	<button class="hidden h-full px-4 py-auto md:block hover:bg-slate-50/5 hover:border-b-4 hover:border-b-blue-500"><a href="./about.html" class="text-sm font-medium">About</a></button>
	<button class="hidden h-full px-4 py-auto md:block hover:bg-slate-50/5 hover:border-b-4 hover:border-b-blue-500"><a href="./terms.html" class="text-sm font-medium">Terms</a></button>
	<button class="hidden h-full px-4 py-auto md:block hover:bg-slate-50/5 hover:border-b-4 hover:border-b-blue-500"><a href="./infos.html" class="text-sm font-medium">Informations</a></button>`
	navbar.innerHTML = navbarContent;
	
	// Footer
	const footer = document.createElement('footer'); // Creates the element
	footer.id = 'footer'; // Sets the ID to 'footer'
	footer.classList.add('bg-black', 'text-center', 'p-8'); // Tailwind classes
	const footerContent = '©2023 - happex' // Creates content
	footer.innerText = footerContent; // Sets footer's inner text to created content
	document.body.appendChild(footer); // Add the element to HTML page
	
	// Meta tags
	const descriptions = {
		about:"Just a group of gamers who stream and make games with the resources they have. It's that easy to join us, you just have to go on the joining page and then choose your platform. We are open to any gamer. Mobile, desktop, Xbox, Nintendo Switch... There is a specified comfortable place for each gamer no matter where he plays.",
		infos:"Informations about The Game Hallows.",
		join:"Join the Game Hallows. It's open to everyone and it's free :) Everyone will welcome you as a king.",
		terms:"Read the Game Hallows' terms."
	}
	let meta   = document.createElement('meta'),
	     title = meta,
	      desc = meta,
	     image = meta,
	     color = meta,
	    author = meta;
	
	title.property = 'og:title';
	title.content = 'The Game Hallows - ${page}';
	desc.property = 'description';
	desc.content = descriptions.[page];
	image.property = 'og:image';
	image.content = '/static/assets/banner.png';
	color.property = 'og:color';
	color.content = '#a21caf';
	author.property = 'og:author';
	author.content = 'happex, Vxnadium';

	document.head.appendChild(title, desc, image, color, author);
}
