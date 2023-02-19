import { header, footer } from 'components.js'
const pages = {
	main: `<header class="p-8 text-white h-screen md:px-0 md:pt-16 md:text-center">
		<div class="space-y-8 md:w-1/2 md:h-1/2 md:m-auto">
			<h1 class="text-5xl font-bold ms:text-7xl">The Game Hallows</h1>
			<p class="bg-gradient-to-br from-blue-500 via-fuchsia-500 to-yellow-600 bg-clip-text text-transparent">Welcome! Meet with other gamers like you within an expanded cross-platforms community. We are available in three languages: French, Spanish & English.</p>
			<div class="space-y-2 md:space-y-0 md:space-x-4">
				<button class="bg-inherit text-sm font-medium pr-2 py-3 duration-200 hover:bg-gradient-to-br hover:from-blue-400 hover:via-indigo-500 hover:to-purple-500 hover:px-9 hover:rounded-full"><a href="/pages/join.html">Join</a></button>
				<button class="decoration-transparent text-sm font-medium px-2 py-3 duration-200"><a href="/pages/about.html" class="hover:underline hover:underline-offset-4 hover:decoration-solid hover:decoration-blue-500 hover:decoration-4">About</a></button>
				<button class="decoration-transparent text-sm font-medium px-2 py-3 duration-200"><a href="/pages/terms.html" class="hover:underline hover:underline-offset-4 hover:decoration-solid hover:decoration-blue-500 hover:decoration-4">Terms</a></button>
			</div>
		</div>
	</header>`,
	about:`${header}
	<div id="content" class="p-8 space-y-8 md:text-center md:px-36">
		<p class="text-xl font-bold md:text-3xl">We are a group founded on 2023 by <a href="https://reddit.com/user/ha2pex" class="underline decoration-3 decoration-indigo-600 decoration-offset-2" target="_blank">happex</a> and <a href="https://github.com/Vxnadium" class="underline decoration-3 decoration-yellow-600 decoration-offset-2" target="_blank">Vanadium</a>...</p>
		<p class="bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Just a group of gamers who stream and make games with the resources they have. It's that easy to <a href="./join.html" class="underline decoration-3 decoration-offset-2" target="_blank">join us</a>, you just have to go on the joining page and then choose your platform.</p>
		<p>We are open to any gamer. Mobile, desktop, Xbox, Nintendo Switch... There is a specified comfortable place for each gamer no matter where he plays.</p>
		<h2 class="text-xl font-bold md:text-2xl">Why should you join ?</h2>
		<div>
			<p><strong class="bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Firstly</strong> we are available in three languages: English, French, Spanish. Naturally, we can create inter-server events for more fun :D</p>
			<p><strong class="bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Secondly</strong> you can stream your games freely on each server. All you will need is a Discord account and an amount of less than a tenth of messages on the server.</p>
			<p><strong class="bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">As two comes with three,</strong> your first week on the server will come with exclusive features that you will find with our <a href="./infos.html#chromatic_gamer" class="bg-gradient-to-br from-pink-600 via-red-400 to-amber-400 bg-clip-text text-transparent">Chromatic Gamer</a> role..</p>
		</div>
	</div>
	${footer}`,
	infos:`${header}
	<div id="content" class="p-8 space-y-8 md:text-center md:px-36">
		<div class="bg-gradient-to-br from-pink-400 via-red-400 to-amber-400 text-sm font-medium p-8 space-y-8 rounded-lg shadow-xl">
			<div class="w-full aspect-5/3 overflow-x-auto rounded-lg shadow-xl sm:overflow-hidden sm:w-1/2 sm:mx-auto">
				<div class="flex">
					<img src="/static/premium/cover.png" class="h-full w-auto sm:w-full" />
					<img src="/static/premium/experience.png" class="h-full w-auto sm:hidden" />
					<img src="/static/premium/royalplace.png" class="h-full w-auto sm:hidden" />
					<img src="/static/premium/advertise.png" class="h-full w-auto sm:hidden" />
					<img src="/static/premium/streaming.png" class="h-full w-auto sm:hidden" />
				</div>
			</div>
			<p>Get exclusive perks with the Chromatic Gamer rank, like a 33% additive XP rate, reserved channels, and a slot for your games in our Scratch Studio.</p>
			<p>You can get this rank in three ways:</p>
			<nav class="list-none space-y-4">
				<li>Win a server giveaway or event</li>
				<li>Get more than 5k likes (or equivalent) on one of your games</li>
				<li>Enter in the staff (or profile moderator)</li>
			</nav>
		</div>
	</div>
	${footer}`,
	join:`${header}
	<div id="content" class="p-8 space-y-8 md:text-center md:px-36">
		<div class="bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 p-8 rounded-lg dark:from-blue-800 dark:via-indigo-800 dark:to-fuchsia-800">
			<div class="space-y-4">
				<h2 class="text-2xl font-bold">Join us on Discord</h2>
				<p>We have three Discord servers, one for each language. Choose the better one and join it by clicking on one of the buttons below.</p>
			</div>
			<div class="grid grid-cols-1 pt-4 md:grid-cols-3 md:gap-4">
				<button class="p-2 rounded-lg hover:bg-slate-900/25 md:bg-transparent"><a href="https://discord.com/invite/spne8ycASv" class="text-sm font-medium">English</a></button>
				<button class="p-2 rounded-lg hover:bg-slate-900/25 md:bg-transparent"><a href="#" class="text-sm font-medium">Français</a></button>
				<button class="p-2 rounded-lg hover:bg-slate-900/25 md:bg-transparent"><a href="#" class="text-sm font-medium">Español</a></button>
			</div>
		</div>
		<div class="bg-slate-800 font-medium p-8 space-y-8 rounded-lg dark:bg-slate-900">
			<h2 class="text-2xl font-bold">On <span class="bg-gradient-to-br from-yellow-400 to-pink-400 bg-clip-text text-transparent">Brawl Stars</span></h2>
			<p>Join our Brawl Stars club. It's reserved to players who have more than 7,500 trophies, in order to prevent fake accounts from joining.</p>
			<button class="bg-gradient-to-br from-yellow-400 to-pink-400 text-sm font-medium w-full py-3 rounded-full shadow-lg md:w-auto md:px-16"><a href="https://link.brawlstars.com/invite/band/en?tag=298QJ2C9G&token=23b2k2de" target="_blank">Join</a></button>
		</div>
		<div class="bg-slate-800 font-medium p-8 space-y-8 rounded-lg dark:bg-slate-900">
			<h2 class="text-2xl font-bold">On <span class="text-[#ffab19]">Scratch</span>...</h2>
			<p>We have a Scratch profile on which we share games with the community. Those games are free to use as long as you credit their creator.</p>
			<button class="bg-[#ffab19] text-sm font-medium w-full py-3 rounded-full shadow-lg md:w-auto md:px-16"><a href="https://scratch.mit.edu/users/thegamehallows/" target="_blank">Visit</a></button>
		</div>
	</div>
	${footer}`
}

export default pages