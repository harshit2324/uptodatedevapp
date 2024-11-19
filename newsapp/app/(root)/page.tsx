import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import NewsList from "../../components/NewsList"

export default async function Home({searchParams}: {
  searchParams: Promise<{ query?: string}>  
 
}) {
  const query = (await searchParams).query; 
   
   const post = [{
    _createdAt: Date.now(),
    views: 55,
    author: {_id: 1, name: "harhsit"},
    _id: 1,
    description: "This is a description",
    image: "https://th.bing.com/th/id/OIP.NztfNu6p_efe7yI8BXI4iAHaEK?rs=1&pid=ImgDetMain",
    cetegory: "Robot",
    tittle: "we robots",
   }]
  return (
    <>
    <section className="pink_container">
    <h1 className="heading "> Keep getting new information and stay updated </h1>
    <p className="sub-heading !max-w-3xl">Experience News Like Never Before: AI-Powered News Delivery at Your Fingertips</p>
    <SearchForm query = {query} />
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `search result for ${query}` : "all news"}
        </p>

        <ul className="mt-7 card_grid">
          {post?.length > 0 ? (
            post.map((post: startuptypecard, index: number) => (
           <NewsList key={post?._id} post={post} />
            ))
          ): (
            <p className="no-results"> No news found </p>
          )}
            
        </ul>

    </section>

  </>
  );
}
