import Product from '../database/product.js';


export const getProducts = async (req, res, next) => {
    res.json({
        name: "pizza"
    })
}
export const postComment = (req, res, next) => {
    const { name, email } = req.body;
    console.log("post");
    console.log(req.body);
}

export const postService = (req, res, next) => {
    try {
        console.log("post Service");
        console.log(req.body);
        const { name, url } = req.body;
        const newProduct = new Product({ name, url })
        const saved = newProduct.save();
        res.status(201).send("created");
    } catch (err) {
        console.log(err);
    }
}