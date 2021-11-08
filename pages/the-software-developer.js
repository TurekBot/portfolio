import Head from 'next/head'
import HeadStuff from '../components/HeadStuff';
import Navigation from '../components/Navigation';
import RolePage from '../components/RolePage';

export default function TheSoftwareDeveloper() { 
    return (
        <>
        <Head>
            <title>Brad the Software Developer</title>
            <HeadStuff/>
        </Head>
        <RolePage pageTitle="Software Developer" accentColor="#2A9D8F"></RolePage>
            <Navigation></Navigation>
        </>
    );

}