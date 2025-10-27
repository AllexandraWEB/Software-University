import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { volcanoService } from "../services/index.js";

const volcanoController = Router();

// Rendering all volcanos for Catalog - RENDER CATALOG
volcanoController.get("/", async (req, res) => {
  const volcanos = await volcanoService.getAll();

  res.render("volcanos/catalog", { volcanos: volcanos }); 
});

// GET for Create Action - CREATE
volcanoController.get("/create", isAuth, (req, res) => {
  res.render("volcanos/create");
});

// POST for Create Action - CREATE
volcanoController.post("/create", isAuth, async (req, res) => {
  const volcanoData = req.body;
  const userId = req.user.id;

  try {
    await volcanoService.create(volcanoData, userId);

    res.redirect("/volcanos");
  } catch (err) {
    res.render("volcanos/create", {
      error: getErrorMessage(err),
      blog: volcanoData,
    });
  }
});

// GET for Details Action - the path is volcanos/:volcanoId/details - RENDER DETAILS
volcanoController.get("/:volcanoId/details", async (req, res) => {
  const volcanoId = req.params.volcanoId;
  const userId = req.user?.id;
  const volcano = await volcanoService.getOne(volcanoId);
  const isOwner = volcano.owner.equals(userId);

  const voters = volcano.voters.map((voter) => voter.email).join(", ");
  const isVoted = volcano.voters.some((voter) =>
    voter.equals(userId)
  );
  const voteCount = volcano.voters.length;

  res.render("volcanos/details", { volcano, isOwner, voters, isVoted, voteCount });
});

// GET for Details - Vote Action - VOTE
volcanoController.get("/:volcanoId/vote", isAuth, async (req, res) => {
  const volcanoId = req.params.volcanoId;
  const userId = req.user.id;

  await volcanoService.vote(volcanoId, userId);

  res.redirect(`/volcanos/${volcanoId}/details`);
});

// GET for Details - DELETE
volcanoController.get("/:volcanoId/delete", isAuth, async (req, res) => {
  const volcanoId = req.params.volcanoId;
  const userId = req.user.id;

  await volcanoService.remove(volcanoId, userId);

  res.redirect(`/volcanos`);
});

// GET for Details - EDIT and RENDER
volcanoController.get("/:volcanoId/edit", isAuth, async (req, res) => {
  const volcanoId = req.params.volcanoId;
  const volcano = await volcanoService.getOne(volcanoId);

  if (!volcano.owner.equals(req.user.id)) {
    throw {
      statusCode: 401,
      message: "Cannot edit blogs that you are not owner!",
    };
  }

  res.render(`volcanos/edit`, { volcano: volcano });
});

// POST for Details - EDIT POST
volcanoController.post("/:volcanoId/edit", isAuth, async (req, res) => {
  const volcanoId = req.params.volcanoId;
  const volcanoData = req.body;
  const userId = req.user.id;

  const volcano = await volcanoService.getOne(volcanoId);

  if (!volcano.owner.equals(userId)) {
    throw {
      statusCode: 401,
      message: "Cannot edit volcano posts that you are not yours!",
    };
  }

  try {
    await volcanoService.edit(volcanoId, volcanoData);

    res.redirect(`/volcanos/${volcanoId}/details`);
  } catch (err) {
    res.render("volcanos/edit", {
      volcano: volcanoData,
      error: getErrorMessage(err),
    });
  }
});

export default volcanoController;