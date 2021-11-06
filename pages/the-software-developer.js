import Head from 'next/head'
import FavIconThings from '../components/FavIconThings';
import Navigation from '../components/Navigation';
import RolePage from '../components/RolePage';

export default function TheSoftwareDeveloper() { 
    return (
        <>
        <Head>
            <title>Brad the Software Developer</title>
            <FavIconThings/>
        </Head>
        <RolePage pageTitle="...the Software Developer" accentColor="#2A9D8F"></RolePage>
            <Navigation></Navigation>
        </>
    );

}