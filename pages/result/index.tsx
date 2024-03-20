// pages/search.js
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SearchPage = ({ results }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Parse the results passed from the query string
        if (results) {
            setRecipes(JSON.parse(results));
        }
    }, [results]);

    return (
        <div className='h-screen'>
            <Navbar />
            <section className='  bg-[#D9D9D9]'>
                <div className=' max-w-5xl mx-auto py-12  text-2xl font-semibold '>
                    <h1 className='text-center py-6'>Search Results ...</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12'>
                        {recipes.map((recipe) => (
                            <Link href={`/result/${recipe.id}`} key={recipe.id}>

                                <div>
                                    <img src={recipe.image} alt={recipe.title} />

                                    <div className='bg-white text-center py-12'>

                                        <h2>{recipe.title}</h2>
                                    </div>
                                </div>

                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

// Parse the query string to get the results passed from the form
SearchPage.getInitialProps = ({ query }) => {
    return { results: query.results };
};

export default SearchPage;
