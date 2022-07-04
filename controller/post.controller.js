const db = require('../db')

class PostController {
    async createPost(req,res){
        const {title, content, user_id} = req.body
        const newPost = await db.query('INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, user_id])
        res.json(newPost.rows[0])
    }
    async getPostsByUser(req,res){
        const user_id = req.query.user_id
        const posts = await db.query('SELECT * FROM post where user_id = $1', [user_id])
        res.json(posts.rows)
    }
    async getPost(req,res){
        const id = req.params.id
        const post = await db.query('SELECT * FROM post where id = $1', [id])
        res.json(post.rows[0])
    }
}

module.exports = new PostController()