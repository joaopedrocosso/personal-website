import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "../_lib/interface";
import { client, urlFor } from "../_lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 30

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }
  `

  const data = await client.fetch(query)
  return data
}

export default async function Home() {

  const data: simpleBlogCard[] = await getData()

  return (
    <div className="pt-28 pb-20 px-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, index) => (
        <Card key={index}>
          <Image 
            src={urlFor(post.titleImage).url()} 
            width={500} 
            height={500} 
            alt="Post Image"
            className="rounded-t-lg h-[200px] w-[600px] object-cover"   
          />

          <CardContent className="mt-5">
            <h3 className="text-xl line-clamp-2 font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
              {post.smallDescription}
            </p>

            <Button asChild className="w-full mt-7" >
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
