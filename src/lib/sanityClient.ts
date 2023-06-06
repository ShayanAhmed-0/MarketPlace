import {createClient} from 'next-sanity'

// import {} from ''

export const client=createClient({
    apiVersion:"2023-06-06",
    dataset:"production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.SANITY_ACCESS_TOKEN,
    useCdn:true,
})
