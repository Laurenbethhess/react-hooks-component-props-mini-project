import React from "react";
import blogData from "../data/blog";
import Article from './Article'

function ArticleList( {posts}) {

    return (
        <main>
        {posts.map((item) => {
            return <Article key={item.id} title={item.title} date={item.date} preview={item.preview} />
            })
        }
        </main>
    )
}

export default ArticleList


