function load() {
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
}
