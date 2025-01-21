const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const articlesFilePath = path.join(__dirname, 'public', 'articles.json');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

// Read articles from JSON file
const readArticles = () => {
  const data = fs.readFileSync(articlesFilePath, 'utf8');
  return JSON.parse(data);
};

// Write articles to JSON file
const writeArticles = (articles) => {
  fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2), 'utf8');
};

// Routes
app.post('/add-post', (req, res) => {
  const { category, heading, headline, content, images, video } = req.body;

  const articles = readArticles();
  const newPost = { id: Date.now(), category, heading, headline, content, images, video };
  articles.push(newPost);
  writeArticles(articles);

  res.json({ success: true, post: newPost });
});

app.get('/posts', (req, res) => {
  const articles = readArticles();
  res.json(articles);
});

app.put('/edit-post/:id', (req, res) => {
  const { id } = req.params;
  const { category, heading, headline, content, images, video } = req.body;

  const articles = readArticles();
  const postIndex = articles.findIndex(article => article.id === parseInt(id));
  if (postIndex !== -1) {
    articles[postIndex] = { id: parseInt(id), category, heading, headline, content, images, video };
    writeArticles(articles);
    res.json({ success: true, post: articles[postIndex] });
  } else {
    res.status(404).json({ success: false, message: 'Post not found' });
  }
});

app.delete('/delete-post/:id', (req, res) => {
  const { id } = req.params;

  const articles = readArticles();
  const newArticles = articles.filter(article => article.id !== parseInt(id));
  writeArticles(newArticles);

  res.json({ success: true });
});

app.get('/categories', (req, res) => {
  res.json(['Workout Routines', 'Healthy Recipes']);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});