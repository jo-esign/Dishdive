// pages/recipes/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RecipePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=314f520dc9454b89a4a70071a0303d5c`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recipe');
                }
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        if (id) {
            fetchRecipe();
        }
    }, [id]);

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">Recipe Details</h3>
                        <img src={recipe?.image} />
                    </div>
                    {recipe && (
                        <div>
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg font-semibold leading-6 text-gray-900">{recipe?.title}</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Preparation time: {recipe?.readyInMinutes} minutes</p>
                            </div>
                            <div className="px-4 py-5 sm:px-6">
                                <h4 className="text-lg font-semibold leading-6 text-gray-900">Ingredients:</h4>
                                <ul>
                                    {recipe?.extendedIngredients.map(ingredient => (
                                        <li key={ingredient.id}>{ingredient.original}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="px-4 py-5 sm:px-6">
                                <h4 className="text-lg font-semibold leading-6 text-gray-900">Instructions:</h4>
                                <ol>
                                    {recipe?.analyzedInstructions[0].steps.map(step => (
                                        <li key={step.number}>{step.step}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RecipePage;
