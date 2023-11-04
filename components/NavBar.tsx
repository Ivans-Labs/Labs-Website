import { h } from 'preact';
import { tw } from 'twind';

export function NavBar() {
    return (
        <nav className={tw`bg-gray-900 rounded-full text-white p-2 flex justify-center`}>
            <a className={tw`mx-1`} href="#">Home</a>
            <a className={tw`mx-1`} href="#">About</a>
            <a className={tw`mx-1`} href="#">Contact</a>
        </nav>
    );
}