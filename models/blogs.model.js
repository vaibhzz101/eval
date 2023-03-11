const mongoose= require("mongoose")
const blogSchema = mongoose.Schema({
    title: String,
    body: String,
    device: String,
    userID: String
})

const BlogModel = mongoose.model('blog',blogSchema)
module.exports={
    BlogModel
}