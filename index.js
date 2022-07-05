const express = require('express');
const userRouter = require('./routes/user.router');
const postRouter = require('./routes/post.router');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));