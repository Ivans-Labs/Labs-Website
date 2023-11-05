import { tw } from 'twind';

export function NavBar() {
    return (
        <ul class={tw`flex justify-center fixed top-4 z-50 rounded-full bg-black bg-opacity-90 px-3 text-sm font-medium text-white shadow-lg ring-1 ring-black backdrop-blur`}>
            <li>
                <a class={tw`relative block px-3 py-2 transition hover:text-teal-500`} href="/">
                    Home
                    <span class={tw`absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0`}></span>
                </a>
            </li>
            <li><a class={tw`relative block px-3 py-2 transition hover:text-teal-500`} href="/#">Reports</a></li>
            <li><a class={tw`relative block px-3 py-2 transition hover:text-teal-500`} href="/#">News</a></li>
            <li><a class={tw`relative block px-3 py-2 transition hover:text-teal-500`} href="/docs">Docs</a></li>
        </ul>
    );
}