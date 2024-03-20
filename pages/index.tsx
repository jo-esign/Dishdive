import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Construct the URL for the API request
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=6&apiKey=314f520dc9454b89a4a70071a0303d5c`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);


      // Redirect to the search page with the search results
      router.push({
        pathname: '/result',
        query: { results: JSON.stringify(data.results) } // Pass the results as a query parameter
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <section className="main h-full">
        <div className="flex justify-center items-center h-full">
          <form onSubmit={handleSubmit}>
            <div className="max-w-xl  flex  rounded-3xl items-center px-5 bg-white" >
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder=" Explore your tastebuds" className="py-6 placeholder:text-center placeholder:text-lg px-6 w-full rounded-3xl" type="text" />
              <button><svg width="24" height="24" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8073 20.5786L29.6531 29.0845C29.9289 29.3837 30.0837 29.7894 30.0836 30.2123C30.0835 30.6353 29.9284 31.0408 29.6524 31.3398C29.3764 31.6388 29.0022 31.8066 28.6121 31.8065C28.222 31.8063 27.8479 31.6382 27.5721 31.339L19.7263 22.8331C17.3808 24.8026 14.4315 25.7294 11.4781 25.425C8.52476 25.1206 5.7893 23.6079 3.82821 21.1946C1.86712 18.7813 0.827702 15.6487 0.921416 12.4341C1.01513 9.21947 2.23494 6.16428 4.33268 3.89006C6.43043 1.61584 9.24854 0.293423 12.2137 0.191825C15.1789 0.0902268 18.0684 1.21708 20.2944 3.34315C22.5205 5.46922 23.9158 8.4348 24.1966 11.6366C24.4773 14.8384 23.6225 18.0359 21.8058 20.5786M12.5833 22.3193C14.904 22.3193 17.1296 21.3199 18.7705 19.5409C20.4115 17.7619 21.3333 15.3491 21.3333 12.8332C21.3333 10.3174 20.4115 7.90453 18.7705 6.12555C17.1296 4.34656 14.904 3.34713 12.5833 3.34713C10.2627 3.34713 8.0371 4.34656 6.39616 6.12555C4.75521 7.90453 3.83334 10.3174 3.83334 12.8332C3.83334 15.3491 4.75521 17.7619 6.39616 19.5409C8.0371 21.3199 10.2627 22.3193 12.5833 22.3193Z" fill="#E4A951" />
              </svg></button>

            </div>
          </form>
        </div>

      </section>

      <div className=" mt-auto">
        <Footer />

      </div>
    </div>
  );
}
