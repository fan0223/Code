const express = require("express")
const Article = require("../models/article")
const router = express.Router()
const alert = require('alert')


router.get('/new', async(req, res) => {
    res.render("articles/new", { article: new Article() })
})

router.get('/edit/:id', async(req, res) => {
    const article = await Article.findById(req.params.id)
    res.render("articles/edit", { article: article })
})



router.get('/:slug', async(req, res) => {
    const article = await Article.findOne({ slug: req.params.slug })
    if (article == null) res.redirect('/')
    res.render('articles/show', { article: article })
})


router.post('/', async(req, res, next) => {
    req.article = new Article()
    next()
}, saveArticleAndRedirect('new'))

router.put('/:id', async(req, res) => {
    try {
        let article = await Article.findById(req.params.id)
        if (!article) return res.sendStatus(404)

        await Article.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        })
        res.redirect(`/articles/${article.slug}`)
    } catch (error) {
        console.log(error)
        res.render(`articles/edit`, { article: article })
    }
})

//原版
// router.put('/:id', async(req, res, next) => {
//     req.article = await Article.findById(req.params.id)
//     next()
// }, saveArticleAndRedirect('edit'))

router.delete('/:id', async(req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

function saveArticleAndRedirect(path) {
    return async(req, res) => {
        let article = req.article
        article.title = req.body.title,
            article.description = req.body.description,
            article.markdown = req.body.markdown
        try {
            await article.save()
            res.redirect(`/articles/${article.slug}`)
        } catch (e) {
            console.log(e)
            res.render(`articles/${path}`, { article: article })
        }
    }
}
module.exports = router