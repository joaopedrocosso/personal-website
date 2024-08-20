import { fullBlog } from "@/app/lib/interface"
import { client, urlFor } from "@/app/lib/sanity"
import { PortableText } from "next-sanity"
import Image from "next/image"

export const revalidate = 30

async function getData(slug: string){
    const query = `
        *[_type == "blog" && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            title,
            content,
            titleImage
        }[0]
    `

    const data = await client.fetch(query)
    return data
}

export default async function BlogArticle({ 
    params 
}: { 
    params: { slug: string } 
}){

    const data: fullBlog = await getData(params.slug)
    
    return(
        <div className="flex flex-col items-center mt-8">
            <h1>
                <span className="block text-base text-center text-[#4d4af9] font-semibold tracking-wide uppercase">
                    João Pedro Cosso - Blog
                </span>
                <span className="mt-2 block text-2xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                    {data.title}
                </span>
            </h1>

            <Image 
                src={urlFor(data.titleImage).url()}
                width={800}
                height={800}
                alt="Article Image"
                priority
                className="rounded-lg mt-8 border"
            />

            <div className="items-center mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-[#4d4af9] prose-a:text-[#4d4af9]">
                <PortableText value={data.content} />
            </div>
        </div>
    )
}