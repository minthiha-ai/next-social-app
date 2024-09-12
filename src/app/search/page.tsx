import { redirect } from 'next/navigation';
import React from 'react'
import PostList from '@/components/posts/post-list';
import { fetchPostBySearchTerm } from '@/db/queries/posts';


interface SearchPageProps {
    searchParams: {
        term: string;
    }
}
const page = async ({ searchParams }: SearchPageProps) => {
    const { term } = searchParams;

    if (!term) {
        redirect('/');
    }
    return (
        <div>
            <PostList fetchData={() => fetchPostBySearchTerm(term)} />
        </div>
    )
}

export default page
