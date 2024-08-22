import pkgA from '@cqleo/pkg-a';

export default function pkgB() {
    pkgA();
    console.log('pkg-b');
}