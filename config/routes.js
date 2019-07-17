import { Router } from 'express';
import { PostController } from '../db/controller';

const router = Router({
  caseSensitive: true
});

const postController = new PostController();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'You have reached the post service'
  });
});

router.post('/post', postController.create);
router.get('/post/:id', postController.getById);
router.get('/post/byauthor/:author', postController.getByAuthor);

export default router;
