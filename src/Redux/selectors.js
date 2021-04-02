export const getPostById = (store, id) => {
    const posts = store.posts;
    const image = posts.images.find((post) => {
        return post.id===id;
    });
    const video = posts.videos.find((post) => {
        return post.id===id;
    });
    if(image)
    return image;
    return video;
}