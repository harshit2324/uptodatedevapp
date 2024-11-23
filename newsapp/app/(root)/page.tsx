
import SearchForm from "../../components/SearchForm";
import NewsList, { startuptypecard } from "../../components/NewsList"
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/quaries";
import { auth } from "@/auth";


export default async function Home({searchParams}: {
  searchParams: Promise<{ query?: string}>  
 
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  console.log(session?.id);

  const { data: post } = await sanityFetch({ query: STARTUPS_QUERY, params });

  console.log(query)

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
 <SanityLive />

  </>
  );
}
