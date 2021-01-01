import React from "react"

const Footer = () => {
    return (
        <>
            <section class="container">
                <h1 class="large text-primary">
                    Posts
      </h1>
                <p class="lead"><i class="fas fa-user"></i> Big Brains!</p>

                <div class="posts">
                    <div class="post bg-white p-1 my-1">
                        <div>
                            <a href="profile.html">
                                <img
                                    class="round-img"
                                    src="https://pbs.twimg.com/media/DaooCaEU0AAdMFJ.jpg"
                                    alt=""
                                />
                                <h4>John Doe</h4>
                            </a>
                        </div>
                        <div>
                            <p class="my-1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                possimus corporis sunt necessitatibus! Minus nesciunt soluta
                                suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
                                dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
                            <p class="post-date">
                                Posted on 04/16/2019
            </p>
                            <button type="button" class="btn btn-light">
                                <i class="fas fa-thumbs-up"></i>
                                <span>4</span>
                            </button>
                            <button type="button" class="btn btn-light">
                                <i class="fas fa-thumbs-down"></i>
                            </button>
                            <a href="post.html" class="btn btn-primary">
                                Discussion <span class='comment-count'>2</span>
                            </a>
                            <button
                                type="button"
                                class="btn btn-danger"
                            >
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    <div class="post bg-white p-1 my-1">
                        <div>
                            <a href="profile.html">
                                <img
                                    class="round-img"
                                    src="https://pbs.twimg.com/media/DaooCaEU0AAdMFJ.jpg"
                                    alt=""
                                />
                                <h4>John Doe</h4>
                            </a>
                        </div>
                        <div>
                            <p class="my-1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                                possimus corporis sunt necessitatibus! Minus nesciunt soluta
                                suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
                                dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
                            <p class="post-date">
                                Posted on 04/16/2019
            </p>
                            <button type="button" class="btn btn-light">
                                <i class="fas fa-thumbs-up"></i>
                                <span>4</span>
                            </button>
                            <button type="button" class="btn btn-light">
                                <i class="fas fa-thumbs-down"></i>
                            </button>
                            <a href="post.html" class="btn btn-primary">
                                Discussion <span class='comment-count'>3</span>
                            </a>
                            <button
                                type="button"
                                class="btn btn-danger"
                            >
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;