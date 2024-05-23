// This decorator handles try..catch for a controller
const asyncWrapper = (controller) => {
  const func = async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

export default asyncWrapper;
