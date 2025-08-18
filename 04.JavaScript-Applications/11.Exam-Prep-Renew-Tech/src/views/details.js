import { html } from "../lib.js";
import { deleteSolutionById, getSolutionById, getTotalLikes, getUserLike, likeSolution } from "../data/solutions.js";
import { getUserData } from "../utils/utils.js";

const detailsTemplate = (
    solution,
    isOwner,
    onDelete,
    isLoggedIn,
    totalLikesCount,
    onClickLike,
    didUserLikeded
) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${solution.imageUrl}" alt="${solution.type}" />
        <div>
            <p id="details-type">${solution.type}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${solution.description}</p>
                    <p id="more-info">${solution.learnMore}</p>
                </div>
            </div>
            <h3>Like Solution: <span id="like">${totalLikesCount}</span></h3>
            <div id="action-buttons">
                ${isOwner
                    ? html`
                        <a href="/edit/${solution._id}" id="edit-btn">Edit</a>
                        <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
                      `
                    : ""}
                ${!isOwner && isLoggedIn && didUserLikeded == 0
                    ? html`<a href="javascript:void(0)" @click=${onClickLike} id="like-btn">Like</a>`
                    : ""}
            </div>
        </div>
    </div>
</section>
`;

export async function detailsView(ctx) {
    const solutionId = ctx.params.id;
    const solution = await getSolutionById(solutionId);
    const userData = getUserData();

    const isOwner = userData && solution._ownerId == userData.id;
    const isLoggedIn = Boolean(userData);

    let userId = userData?.id;
    let totalLikesCount = await getTotalLikes(solutionId);
    let didUserLikeded = 0;

    if (isLoggedIn && !isOwner) {
        didUserLikeded = await getUserLike(solutionId, userId);
    }

    ctx.render(detailsTemplate(
        solution,
        isOwner,
        onDelete,
        isLoggedIn,
        totalLikesCount,
        onClickLike,
        didUserLikeded
    ));

    async function onClickLike() {
        await likeSolution(solutionId); 
        totalLikesCount = await getTotalLikes(solutionId);
        didUserLikeded = await getUserLike(solutionId, userId);

        ctx.render(detailsTemplate(
            solution,
            isOwner,
            onDelete,
            isLoggedIn,
            totalLikesCount,
            onClickLike,
            didUserLikeded
        ));
    }

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete the offer for ${solution.type}?`);
        if (choice) {
            await deleteSolutionById(solution._id);
            ctx.page.redirect("/catalog");
        }
    }
}
