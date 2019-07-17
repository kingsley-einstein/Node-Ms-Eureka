import { Post } from '..';

export class PostController {
  async create(req, res) {
    try {
      const { body } = req;
      await Post.create(body).then((data) => {
        res.status(201).json({
          status: 201,
          data
        });
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        status: error.statusCode || 500,
        error
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      await Post.findByPk(id).then((data) => {
        res.status(200).json({
          status: 200,
          data
        });
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        status: error.statusCode || 500,
        error
      });
    }
  }

  async getByAuthor(req, res) {
    try {
      const { author } = req.params;
      await Post.findAll({
        where: {
          author
        }
      }).then((data) => {
        res.status(200).json(data);
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({
        status: error.statusCode || 500,
        error
      });
    }
  }
}
